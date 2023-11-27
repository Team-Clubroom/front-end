import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  Panel,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/base.css";
import { EmployerNodeComponent } from "./employer-node.component.tsx";
import {
  API_Employer_Graph,
  BaseEmployerNode,
  GraphDirection,
} from "./graph.types.ts";
import CustomEdge from "./custom-edge/custom-edge.component.tsx";
import { useFetch } from "../../../../../models/useFetch.ts";
import { ApiRoutes } from "../../../../../models/api.types.ts";
import { useParams } from "react-router-dom";
import dagre from "dagre";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  custom: EmployerNodeComponent,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 150;
const nodeHeight = 50;

const getLayoutElements = (
  nodes: Node[],
  edges: Edge[],
  direction: GraphDirection = "LR",
) => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    // To create space between nodes
    node.position.x *= 3;
    node.position.y *= 1.5;

    return node;
  });

  return { nodes, edges };
};

export const ReactFlowGraphComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { customFetch } = useFetch();
  const [error, setError] = useState("");
  const { employerId } = useParams();

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
        data: { id, name, estDate, isMainNode: employerId === id },
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
        <button onClick={() => onLayout("TB")}>Vertical</button>
        <button onClick={() => onLayout("LR")}>Horizontal</button>
      </Panel>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
