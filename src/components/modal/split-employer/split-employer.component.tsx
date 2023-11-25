import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";

import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import "../../../sharedStyles/form.styles.css";
import {
  splitFormEmptyForm,
  splitFormValidationCriteria,
  SplitFormValues,
} from "./split-employer.helpers.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";

interface ChangeFormProps extends ModalVisibilityProps {
  companyName: string;
}

export function SplitEmployerModal({
  isOpen,
  close,
  companyName,
}: ChangeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    splitFormEmptyForm,
    splitFormValidationCriteria,
  );
  const { customFetch } = useFetch();

  async function handleSubmit(formValues: SplitFormValues) {
    // const nameChangeRequest: NameChangeRequest = {
    //   old_employer_name: companyName.trim(),
    //   new_employer_name: formValues.newEmployerName.trim(),
    //   name_change_effective_date: formValues.changeDate.trim(),
    // };
    //
    // await customFetch<undefined>(
    //   ApiRoutes.NameChange,
    //   "POST",
    //   nameChangeRequest,
    // );
  }

  return (
    <Modal
      close={close}
      isOpen={isOpen}
      onClose={resetForm}
      title={"Create Split Relation"}
    >
      <div className={dashboardRootStyles.form}>
        <form
          onSubmit={onSubmit(handleSubmit)}
          noValidate={true}
          className={"flex flex-col gap-2 max-h-96 pr-2"}
        >
          <div className={"form-row"}>
            <InputComponent
              iconName={MaterialIcon.Split}
              placeholder={"Tesla"}
              id={"new_employer_name"}
              label={"Company Name to be Split"}
              value={companyName}
            />
            <InputComponent
              fieldRegistration={registerField("relationStartDate")}
              iconName={MaterialIcon.Event}
              placeholder={"mm/dd/yyyy"}
              id={"new_employer_name"}
              label={"Enter the Relation's Start Date"}
            />
          </div>
          <div className={"form-row"}>
            <InputComponent
              fieldRegistration={registerField("firstCompanyName")}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"change_date"}
              label={"Enter the First Company Name"}
            />
            <InputComponent
              fieldRegistration={registerField("secondCompanyName")}
              iconName={MaterialIcon.Work}
              placeholder={"Ford"}
              id={"change_date"}
              label={"Enter the Second Company Name"}
            />
          </div>
          <span className={dashboardRootStyles.error}>{formError}</span>
          <div className="flex w-full justify-end">
            <LoadButtonComponent
              isLoading={isLoading}
              loadingText={"Splitting"}
            >
              Split Company
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}
