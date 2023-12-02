import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import { useState } from "react";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";

interface YesNoFormProps extends ModalVisibilityProps {
  onConfirm: () => Promise<void>;
  bodyText: string;
}

export function YesNoModal({
  isOpen,
  close,
  onConfirm,
  bodyText,
}: YesNoFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    setIsLoading(true);
    setError("");
    try {
      await onConfirm();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={close} title={"Confirm Action"}>
      <div className={dashboardRootStyles.form}>
        <form 
            onSubmit={handleConfirm}
            noValidate={true}
            className={"flex flex-col gap-2 max-h-96 pr-2"}>
          <label className={"text-center"}>{bodyText}</label>
          <p>{error}</p>
          <div className={"flex w-full justify-end"}>
            <button
              onClick={close}
              className={dashboardRootStyles.cancelButton}
            >
              Cancel
            </button>
            
            <LoadButtonComponent
                isLoading={isLoading}
                loadingText={"Confirming..."}
            >
                Confirm
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}
