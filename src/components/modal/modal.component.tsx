import React from "react";
import { createPortal } from "react-dom";
import { dashboardRootStyles } from "../../sharedStyles/dashboard-root.styles.tsx";
import { MaterialIcon } from "../../utils/icons.ts";

export interface ModalVisibilityProps {
  isOpen: boolean;
  close: () => void;
}

interface BaseModalProps extends ModalVisibilityProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export function Modal({
  children,
  isOpen,
  close,
  title,
  onClose,
}: BaseModalProps) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose && onClose();
    close();
  };
  const modal = (
    <div
      onClick={handleClose}
      className={
        "fixed w-screen h-screen z-50 grid place-items-center bg-opacity-40 bg-black"
      }
    >
      {/*  When clicking the modal body it should NOT close so we stop the event propagation */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={dashboardRootStyles.formContainer}
      >
        <div className={"flex items-center justify-between"}>
          <div className={dashboardRootStyles.title}>{title}</div>
          <button
            onClick={handleClose}
            type={"button"}
            className={"rounded-full flex hover:bg-gray-600 opacity-50 p-1"}
          >
            <span className={`material-symbols-outlined`}>
              {MaterialIcon.Close}
            </span>
          </button>
        </div>
        <div className={"border-b-gray-300 border-b mt-1.5 w-full"}></div>
        {children}
      </div>
    </div>
  );
  return createPortal(modal, document.body);
}
