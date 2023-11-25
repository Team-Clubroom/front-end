import React from "react";

export interface ContextMenuItem {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export type ContextMenu = ContextMenuItem[];

interface ContextMenuSharedStatePayload {
  menu: ContextMenu;
  width?: string;
  height?: string;
  alignToEdge?: boolean;
  marginTop?: number;
  children?: React.ReactNode;
}

export interface ContextMenuState extends ContextMenuSharedStatePayload {
  currentTarget: HTMLElement & EventTarget;
  clientX: number;
  clientY: number;
}

export interface ContextMenuPayload extends ContextMenuSharedStatePayload {
  event: React.MouseEvent<HTMLButtonElement>;
}
