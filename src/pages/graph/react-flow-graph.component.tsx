import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Controls,
  Edge,
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
import { Helmet } from "react-helmet";
import { GraphToggleComponent } from "../../components/graph-toggle/graph-toggle.component.tsx";
import { EdgeLabelComponent } from "../../components/edge-label/edge-label.component.tsx";

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
        label: (
          // TODO: provide a real date here once backend is updated to send one
          <EdgeLabelComponent date={"02-12-1998"} relationName={relationType} />
        ),
      };
    });
    // update the nodes positions using dagre
    const { nodes: layoutNodes, edges: layoutEdges } = getLayoutElements(
      nodesUpdate,
      edgesUpdate,
    );
    setNodes(layoutNodes);
    setEdges(layoutEdges);

    console.log({ layoutNodes, layoutEdges });
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
  const proOptions = { hideAttribution: true };

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
      proOptions={proOptions}
      fitView
    >
      <GraphToggleComponent direction={direction} onLayout={onLayout} />
      <Controls style={{ background: "#e3e3e3" }} />
    </ReactFlow>
  );
};

export const ReactFlowGraphComponent = () => (
  <>
    <Helmet>
      <title>Employer Graph - CELDV</title>
    </Helmet>
    <ReactFlowProvider>
      <FlowGraph />
    </ReactFlowProvider>
  </>
);
