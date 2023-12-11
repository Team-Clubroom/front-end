import { EmployerNodeProps } from "./custom-graph-components/employer-node.component.tsx";

export type API_Employer_Node = {
  id: string;
  name: string;
  estDate: string;
  position: { x: number; y: number };
};

export type API_Employer_Edge = {
  id: string;
  target: string;
  source: string;
  relationType: string;
  startDate: string;
};

export type API_Employer_Graph = {
  nodes: API_Employer_Node[];
  edges: API_Employer_Edge[];
};

export interface BaseEmployerNode {
  id: string;
  type: "custom";
  data: EmployerNodeProps;
  position: { x: number; y: number };
}

export type GraphDirection = "LR" | "TB";
