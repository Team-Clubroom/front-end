import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export function Modal({ children, isOpen, close }: ModalProps) {
  if (!isOpen) return null;
  const modal = (
    <div
      onClick={() => close()}
      className={"fixed"}
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: "100",
        display: "grid",
        placeItems: "center",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      {/*  When clicking the modal body it should NOT close so we stop the event propagation */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <div>
          <button className={"float-right"} onClick={() => close()}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}
