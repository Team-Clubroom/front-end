import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Panel,
  Position,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/base.css";
import { EmployerNodeComponent } from "./custom-graph-components/employer-node.component.tsx";
import {
  API_Employer_Graph,
  BaseEmployerNode,
  GraphDirection,
} from "./graph.types.ts";
import CustomEdge from "./custom-graph-components/custom-edge.component.tsx";
import { useFetch } from "../../models/useFetch.ts";
import { ApiRoutes } from "../../models/api.types.ts";
import { useParams } from "react-router-dom";
import { getLayoutElements } from "./dagre-functions.ts";
import { Icon } from "../../components/icon.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { classIf } from "../../utils/tailwind.utils.ts";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  custom: EmployerNodeComponent,
};

const FlowGraph = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { customFetch } = useFetch();
  const [error, setError] = useState("");
  const { employerId } = useParams();
  const [direction, setDirection] = useState<GraphDirection>("LR");

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onLayout = useCallback(
    (direction: GraphDirection) => {
      const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
        nodes,
        edges,
        direction,
      );

      setNodes([...layoutNodes]);
      setEdges([...layoutEdges]);
      setDirection(direction);
      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges],
  );

  function handleSuccess({
    nodes: api_nodes,
    edges: api_edges,
  }: API_Employer_Graph) {
    // set the nodes from the api
    const nodesUpdate = api_nodes.map<BaseEmployerNode>((api_node) => {
      const { name, id, position, estDate } = api_node;
      return {
        id,
        position,
        data: {
          id,
          name,
          estDate,
          isMainNode: employerId === id,
          targetPosition: Position.Left,
          sourcePosition: Position.Right,
        },
        type: "custom",
      };
    });
    // set the edges from the api
    const edgesUpdate = api_edges.map<Edge>((api_edge) => {
      const { relationType, ...rest } = api_edge;
      return {
        ...rest,
        type: "custom",
        label: relationType,
      };
    });
    // update the nodes positions using dagre
    const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
      nodesUpdate,
      edgesUpdate,
    );
    setNodes(layoutNodes);
    setEdges(layoutEdges);
  }

  useEffect(() => {
    customFetch<API_Employer_Graph>(ApiRoutes.EmployersGraph, "POST", {
      employer_id: employerId,
    })
      .then((response) => handleSuccess(response.data))
      .catch((request_error) => {
        setError((request_error as Error).message);
      });
  }, []);

  return error ? (
    <div className={"m-auto text-red-500"}>{error}</div>
  ) : (
    <ReactFlow
      edgeTypes={edgeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="bg-teal-50"
    >
      <Panel position="top-right">
        <div className="flex rounded bg-gray-300 overflow-clip shadow">
          <button
            title={"Vertical layout"}
            className={`flex flex-grow p-2 transition-colors ${classIf(
              direction === "TB",
              "bg-gray-500",
            )}`}
            onClick={() => onLayout("TB")}
          >
            <Icon name={MaterialIcon.Network} />
          </button>
          <button
            title={"Horizontal layout"}
            className={`flex flex-grow p-2 transition-colors ${classIf(
              direction === "LR",
              "bg-gray-500",
            )}`}
            onClick={() => onLayout("LR")}
          >
            <Icon name={MaterialIcon.Account_Tree} />
          </button>
        </div>
      </Panel>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export const ReactFlowGraphComponent = () => (
  <ReactFlowProvider>
    <FlowGraph />
  </ReactFlowProvider>
);
