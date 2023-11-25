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
};

export type API_Employer_Graph = {
    nodes: API_Employer_Node[];
    edges: API_Employer_Edge[];
};

export interface BaseEmployerNode {
    id: string;
    type: "custom";
    data: Omit<API_Employer_Node, 'position'>;
    position: { x: number; y: number };
}

export type GraphEdge = {
    id: string;
    target: string;
    source: string;
    label: string;
};
