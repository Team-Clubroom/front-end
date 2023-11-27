import dagre from "dagre";
import { Edge, Node, Position } from "reactflow";
import { GraphDirection } from "./graph.types.ts";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 150;
const nodeHeight = 50;

export const getLayoutElements = (
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
    const targetPos = isHorizontal ? Position.Left : Position.Top;
    const sourcePos = isHorizontal ? Position.Right : Position.Bottom;
    node.targetPosition = targetPos;
    node.sourcePosition = sourcePos;
    // to update the actual node handles
    node.data.targetPosition = targetPos;
    node.data.sourcePosition = sourcePos;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    // To create space between nodes depending on layout
    node.position.x *= isHorizontal ? 2 : 1.4;
    node.position.y *= isHorizontal ? 2 : 2;

    return node;
  });

  return { nodes, edges };
};
