import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import { useState, useEffect } from "react";
import { RequestButtonComponent } from "../../request-button/request-button.component.tsx";

interface YesNoFormProps extends ModalVisibilityProps {
  onConfirm: () => Promise<void>;
  bodyText: string;
  successText: string;
}

export function YesNoModal({
  isOpen,
  close,
  onConfirm,
  bodyText,
  successText,
}: YesNoFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      let interval = setInterval(() => {
        close();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [success]);

  const handleConfirm = async () => {
    setIsLoading(true);
    setError("");
    try {
      await onConfirm();
      setSuccess(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={close} title={"Confirm Action"}>
      <div className={dashboardRootStyles.form}>
        <div className={"flex flex-col gap-2 max-h-96 pr-2"}>
          <label className={"text-center"}>{bodyText}</label>
          <span className={dashboardRootStyles.error}>{error}</span>
          <div className={"flex w-full justify-end"}>
            <button
              onClick={close}
              className={dashboardRootStyles.cancelButton}
            >
              Cancel
            </button>
            <RequestButtonComponent
              isLoading={isLoading}
              loadingText={"Confirming..."}
              onClick={handleConfirm}
              success={success}
              successText={successText}
            >
              Confirm
            </RequestButtonComponent>
          </div>
        </div>
      </div>
    </Modal>
  );
}
