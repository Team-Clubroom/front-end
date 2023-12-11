import { Position } from "reactflow";
import { EdgeLabelComponent } from "../../../components/edge-label/edge-label.component.tsx";

export const GRAPH = {
  nodes: [
    {
      id: "13",
      position: {
        x: 0,
        y: 100,
      },
      data: {
        id: "13",
        name: "Ultra-Mart",
        estDate: "1988-09-21",
        isMainNode: false,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "14",
      position: {
        x: 400,
        y: 0,
      },
      data: {
        id: "14",
        name: "Ultra-Rx",
        estDate: "1993-11-11",
        isMainNode: false,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "15",
      position: {
        x: 400,
        y: 200,
      },
      data: {
        id: "15",
        name: "Mega-Mart",
        estDate: "1999-03-16",
        isMainNode: false,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "16",
      position: {
        x: 800,
        y: 100,
      },
      data: {
        id: "16",
        name: "Okay-Mart",
        estDate: "2000-02-21",
        isMainNode: true,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "18",
      position: {
        x: 1200,
        y: 100,
      },
      data: {
        id: "18",
        name: "Not-Great-Mart",
        estDate: "2006-08-16",
        isMainNode: false,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "17",
      position: {
        x: 800,
        y: 300,
      },
      data: {
        id: "17",
        name: "Mega-Mart Neighborhoods",
        estDate: "2000-07-01",
        isMainNode: false,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      },
      type: "custom",
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
  ],
  edges: [
    {
      id: "1",
      source: "15",
      target: "17",
      type: "custom",
      label: (
        <EdgeLabelComponent date={"02-12-1998"} relationName={"Subsidiary"} />
      ),
    },
    {
      id: "2",
      source: "13",
      target: "14",
      type: "custom",
      label: (
        <EdgeLabelComponent date={"05-22-2001"} relationName={"Subsidiary"} />
      ),
    },
    {
      id: "3",
      source: "13",
      target: "15",
      type: "custom",
      label: (
        <EdgeLabelComponent date={"12-12-1934"} relationName={"Subsidiary"} />
      ),
    },
    {
      id: "4",
      source: "16",
      target: "18",
      type: "custom",
      label: (
        <EdgeLabelComponent date={"05-20-2023"} relationName={"Subsidiary"} />
      ),
    },
    {
      id: "5",
      source: "15",
      target: "16",
      type: "custom",
      label: (
        <EdgeLabelComponent date={"02-12-1998"} relationName={"Subsidiary"} />
      ),
    },
  ],
};
