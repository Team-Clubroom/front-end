import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Edge,
  Panel,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/base.css";
import CustomEdge from "../../graph/custom-graph-components/custom-edge.component.tsx";
import { EmployerNodeComponent } from "../../graph/custom-graph-components/employer-node.component.tsx";
import { GraphDirection } from "../../graph/graph.types.ts";
import { getLayoutElements } from "../../graph/dagre-functions.ts";
import { classIf } from "../../../utils/tailwind.utils.ts";
import { Icon } from "../../../components/icon.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { GRAPH } from "./graph.data.ts";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  custom: EmployerNodeComponent,
};

const FlowGraph = () => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(GRAPH.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(GRAPH.edges);
  const [direction, setDirection] = useState<GraphDirection>("TB");

  useEffect(() => {
    onLayout(direction);
  }, []);

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

  const proOptions = { hideAttribution: true };

  return (
    <ReactFlow
      edgeTypes={edgeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      proOptions={proOptions}
      className="border border-cyan-400 rounded"
    >
      <Panel position="top-right">
        <div className="flex rounded bg-cyan-600 overflow-clip shadow">
          <button
            title={"Vertical layout"}
            className={`flex flex-grow p-2 transition-colors ${classIf(
              direction === "TB",
              "bg-cyan-700",
            )}`}
            onClick={() => onLayout("TB")}
          >
            <Icon name={MaterialIcon.Network} />
          </button>
          <button
            title={"Horizontal layout"}
            className={`flex flex-grow p-2 transition-colors ${classIf(
              direction === "LR",
              "bg-cyan-700",
            )}`}
            onClick={() => onLayout("LR")}
          >
            <Icon name={MaterialIcon.Account_Tree} />
          </button>
        </div>
      </Panel>
    </ReactFlow>
  );
};

export const DummyGraphComponent = () => (
  <ReactFlowProvider>
    <FlowGraph />
  </ReactFlowProvider>
);
