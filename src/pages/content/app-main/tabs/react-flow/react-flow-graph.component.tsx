import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Controls,
  Edge,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/base.css";

import { EmployerNode } from "./employer-node.component.tsx";

const nodeTypes = {
  custom: EmployerNode,
};

const initNodes: Array<{
  id: string;
  type: "custom";
  data: EmployerNode;
  position: { x: number; y: number };
}> = [
  {
    id: "1",
    type: "custom",
    data: { name: "Jane Doe", estDate: "12/12/2023" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Tyler Weary", estDate: "12/12/2023" },
    position: { x: -200, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Kristi Price", estDate: "12/12/2023" },
    position: { x: 200, y: 200 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "New One", estDate: "12/12/2023" },
    position: { x: 400, y: 300 },
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e1-4",
    source: "3",
    target: "4",
  },
  {
    id: "e1-5",
    source: "2",
    target: "4",
  },
];

export const ReactFlowGraphComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="bg-teal-50"
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
