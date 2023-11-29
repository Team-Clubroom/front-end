import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import useForm from "../../../hooks/useForm.ts";


interface YesNoFormProps extends ModalVisibilityProps {
    onConfirm: React.FormEventHandler<HTMLFormElement>;
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
                <form
                    onSubmit={onConfirm}
                    noValidate={true}
                    className={"flex flex-col gap-2 max-h-96 pr-2"}
                >
                    <label className={"text-center"}>{bodyText}</label>
                    <div className={"flex w-full justify-end"}>
                        <button onClick={close} className={dashboardRootStyles.cancelButton}>Cancel</button>
                        <LoadButtonComponent
                            isLoading={false}
                            loadingText={"Confirming"}
                        >
                            Confirm
                        </LoadButtonComponent>
                    </div>
                </form>
            </div>
        </Modal>
    )
}