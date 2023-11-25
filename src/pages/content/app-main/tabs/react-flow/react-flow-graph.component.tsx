import { useCallback, useEffect, useState } from "react";
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
import { API_Employer_Graph, BaseEmployerNode } from "./graph.types.ts";
import CustomEdge from "./custom-edge/custom-edge.component.tsx";
import { useFetch } from "../../../../../models/useFetch.ts";
import { ApiRoutes } from "../../../../../models/api.types.ts";
import { useParams } from "react-router-dom";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  custom: EmployerNodeComponent,
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

  function handleSuccess({
    nodes: api_nodes,
    edges: api_edges,
  }: API_Employer_Graph) {
    // set the nodes from the api
    setNodes(
      api_nodes.map<BaseEmployerNode>((api_node) => {
        const { name, id, position, estDate } = api_node;
        return {
          id,
          position,
          data: { id, name, estDate, isMainNode: employerId === id },
          type: "custom",
        };
      }),
    );
    // set the edges from the api
    setEdges(
      api_edges.map<Edge>((api_edge) => {
        const { relationType, ...rest } = api_edge;
        return {
          ...rest,
          type: "custom",
          label: relationType,
        };
      }),
    );
  }

  useEffect(() => {
    // TODO: update ApiRoute when backend route is ready
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
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
