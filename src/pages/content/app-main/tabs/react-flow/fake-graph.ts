import { EmployerNode, GraphEdge } from "./graph.types.ts";

export const FAKE_EMPLOYERS_NODES: Record<string, EmployerNode> = {
  13: { name: "Ultra-Mart", estDate: "1988-09-21" },
  14: { name: "Ultra-Rx", estDate: "1993-11-11" },
  15: { name: "Mega-Mart", estDate: "1999-03-16" },
  16: { name: "Okay-Mart", estDate: "2000-02-21" },
  17: { name: "Mega-Mart Neighborhoods", estDate: "2000-07-01" },
  18: { name: "Not-Great-Mart", estDate: "2006-08-16" },
};

export const FAKE_EMPLOYERS_EDGES: Array<GraphEdge> = [
  {
    id: "1",
    target: "16",
    source: "15",
    relationType: "Subsidiary",
  },
  {
    id: "2",
    target: "17",
    source: "15",
    relationType: "Subsidiary",
  },
  {
    id: "3",
    target: "14",
    source: "13",
    relationType: "Subsidiary",
  },
  {
    id: "4",
    target: "15",
    source: "13",
    relationType: "Subsidiary",
  },
  {
    id: "5",
    target: "18",
    source: "16",
    relationType: "Subsidiary",
  },
];
