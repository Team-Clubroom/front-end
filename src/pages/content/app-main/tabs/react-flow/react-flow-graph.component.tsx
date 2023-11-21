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
import { EmployerNodeComponent } from "./employer-node.component.tsx";
import { FAKE_EMPLOYERS_EDGES, FAKE_EMPLOYERS_NODES } from "./fake-graph.ts";
import { BaseEmployerNode, GraphEdge } from "./graph.types.ts";

const nodeTypes = {
  custom: EmployerNodeComponent,
};

const initEdges: GraphEdge[] = FAKE_EMPLOYERS_EDGES;

const initNodes: BaseEmployerNode[] = Object.keys(
  FAKE_EMPLOYERS_NODES,
).map<BaseEmployerNode>((nodeId, index) => ({
  id: nodeId,
  type: "custom",
  position: { x: index * 100, y: index * 100 },
  data: {
    estDate: FAKE_EMPLOYERS_NODES[nodeId].estDate,
    name: FAKE_EMPLOYERS_NODES[nodeId].name,
  },
}));

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
