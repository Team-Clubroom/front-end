import { EmployerNode, GraphEdge } from "./graph.types.ts";

export const FAKE_EMPLOYERS_NODES: Record<string, EmployerNode> = {
  1: { name: "Pine and Dandy", estDate: "2001-02-19" },
  2: { name: "Really Arboreal", estDate: "2005-08-06" },
  3: { name: "Patty's Cakes", estDate: "2012-04-16" },
  4: { name: "Smooth Eddie's Smoothie Eatery", estDate: "2008-11-04" },
  5: { name: "Just Desserts", estDate: "2019-05-01" },
  6: { name: "Twiddler", estDate: "2007-03-21" },
  7: { name: "Hex", estDate: "2023-07-22" },
  8: { name: "Scantine", estDate: "2002-12-03" },
  9: { name: "HelpQuest", estDate: "1999-03-09" },
  10: { name: "Talcum State Healthcare", estDate: "2005-10-29" },
  11: { name: "Five-O Pensions", estDate: "2004-03-17" },
  12: { name: "Synagogues Fish & Chips", estDate: "1972-06-12" },
  13: { name: "Ultra-Mart", estDate: "1988-09-21" },
  14: { name: "Ultra-Rx", estDate: "1993-11-11" },
  15: { name: "Mega-Mart", estDate: "1999-03-16" },
  16: { name: "Okay-Mart", estDate: "2000-02-21" },
  17: { name: "Mega-Mart Neighborhoods", estDate: "2000-07-01" },
  18: { name: "Not-Great-Mart", estDate: "2006-08-16" },
  19: { name: "Sample Company", estDate: "2000-01-01" },
  20: { name: "Sample Company 02", estDate: "2000-01-01" },
  21: { name: "Sample Company 03", estDate: "2000-01-01" },
  22: { name: "Test", estDate: "2002-12-13" },
  23: { name: "123", estDate: "df" },
  24: { name: "Links", estDate: "2000-12-12" },
  25: { name: "TEST", estDate: "12/12/2000" },
  26: { name: "df", estDate: "df" },
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
