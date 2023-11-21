export type EmployerNode = {
  name: string;
  estDate: string;
};

export interface BaseEmployerNode {
  id: string;
  type: "custom";
  data: EmployerNode;
  position: { x: number; y: number };
}

export type GraphEdge = {
  id: string;
  target: string;
  source: string;
  relationType: string;
};
