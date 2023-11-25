import React, { forwardRef, useLayoutEffect, useState } from "react";
import { ContextMenuState } from "../../contexts/context-menu/context-menu.types.ts";
import "./context-menu.styles.css";
import { Icon } from "../icon.component.tsx";

interface ContextMenuProps extends ContextMenuState {}

interface VerticalPosition {
  top: number;
  transform: "" | "translateY(-100%)";
}

interface HorizontalPosition {
  left: number | "";
  right: number | "";
}

type ContextMenuPosition = VerticalPosition & HorizontalPosition;

function _ContextMenuComponent(
  {
    currentTarget,
    children,
    menu,
    clientY,
    clientX,
    height,
    width,
    alignToEdge = false,
    marginTop = 0,
  }: ContextMenuProps,
  ref: React.ForwardedRef<null | HTMLDivElement>,
) {
  const [position, _setPosition] = useState<ContextMenuPosition>();

  useLayoutEffect(() => {
    updatePosition();
    const resizeHandler = () => updatePosition();
    document.addEventListener("resize", resizeHandler);
    return () => document.removeEventListener("resize", resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTarget]);

  function updatePosition() {
    const vertPosition = getVerticalPos(
      currentTarget.clientHeight,
      currentTarget.getBoundingClientRect().top,
    );
    const horiPosition = getHorizontalPos(currentTarget);
    _setPosition({ ...horiPosition, ...vertPosition });
  }

  function getVerticalPos(
    pivotHeight: number,
    pivotTop: number,
  ): VerticalPosition {
    if (clientY > window.innerHeight / 2) {
      return { top: pivotTop + marginTop, transform: "translateY(-100%)" };
    } else {
      return { top: pivotTop + pivotHeight + marginTop, transform: "" };
    }
  }

  function getHorizontalPos({
    clientWidth,
    offsetLeft,
  }: HTMLElement): HorizontalPosition {
    const showOnRight = clientX < window.innerWidth / 2;
    if (alignToEdge) {
      return showOnRight
        ? { left: offsetLeft, right: "" }
        : { left: "", right: window.innerWidth - (offsetLeft + clientWidth) };
    } else {
      return showOnRight
        ? { left: offsetLeft + clientWidth, right: "" }
        : { left: "", right: window.innerWidth - offsetLeft };
    }
  }

  return (
    <div
      className={"context-menu"}
      style={{ ...position, width, height }}
      ref={ref}
    >
      {children}
      {menu.map(({ text, icon, onClick }) => {
        return (
          <button key={text} onClick={onClick}>
            {icon && <Icon name={icon} />}
            {text}
          </button>
        );
      })}
    </div>
  );
}

export const ContextMenuComponent = forwardRef(_ContextMenuComponent);
