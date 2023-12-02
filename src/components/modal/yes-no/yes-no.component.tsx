import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";


interface YesNoFormProps extends ModalVisibilityProps {
    onConfirm: Promise<void>;
    bodyText: string;
}

export function YesNoModal({
    isOpen,
    close,
    onConfirm,
    bodyText
}: YesNoFormProps) {

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            title={"Confirm Action"}
        >
            <div className={dashboardRootStyles.form}>
                <div
                    className={"flex flex-col gap-2 max-h-96 pr-2"}
                >
                    <label className={"text-center"}>{bodyText}</label>
                    <div className={"flex w-full justify-end"}>
                        <button onClick={close} className={dashboardRootStyles.cancelButton}>Cancel</button>
                        <button onClick={() => onConfirm} className={dashboardRootStyles.submitButton}>Confirm</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}