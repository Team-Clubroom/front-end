import React from "react";
import { MaterialIcon } from "../../utils/icons.ts";

export interface ContextMenuItem {
  text: string;
  icon?: MaterialIcon;
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
