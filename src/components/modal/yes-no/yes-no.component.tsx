import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";

interface YesNoFormProps extends ModalVisibilityProps {
    func: Function;
}

export function YesNoModal({
    isOpen,
    close,
    func
}: YesNoFormProps) {

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            title={"Confirm Action"}
        >
            <div className={dashboardRootStyles.form}>
                <div className={"form-row"}>
                    <button>Cancel</button>
                    <LoadButtonComponent
                        isLoading={false}
                        loadingText={"Confirming"}
                    >
                        Confirm
                    </LoadButtonComponent>
                </div>
            </div>
        </Modal>
    )
}