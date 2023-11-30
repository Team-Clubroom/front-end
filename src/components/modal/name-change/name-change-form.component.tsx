import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import {
  nameChangeEmptyForm,
  NameChangeFormValues,
  nameChangeValidationCriteria,
} from "./name-change-form.helpers.ts";
import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import { NameChangeRequest } from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import "../../../sharedStyles/form.styles.css";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import { DateComponent } from "../../input/date.component.tsx";

interface ChangeFormProps extends ModalVisibilityProps {
  companyName: string;
}

function NameChangeForm({ isOpen, close, companyName }: ChangeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    nameChangeEmptyForm,
    nameChangeValidationCriteria,
  );
  const { customFetch } = useFetch();

  async function handleSubmit(formValues: NameChangeFormValues) {
    const nameChangeRequest: NameChangeRequest = {
      old_employer_name: companyName.trim(),
      new_employer_name: formValues.newEmployerName.trim(),
      name_change_effective_date: formValues.changeDate.trim(),
    };

    await customFetch<undefined>(
      ApiRoutes.NameChange,
      "POST",
      nameChangeRequest,
    );
  }

  return (
    <Modal
      close={close}
      isOpen={isOpen}
      onClose={resetForm}
      title={"Change Employer Name"}
    >
      <div className={dashboardRootStyles.form}>
        <form
          onSubmit={onSubmit(handleSubmit)}
          noValidate={true}
          className={"flex flex-col gap-2 max-h-96 pr-2"}
        >
          <div className={"form-row"}>
            <InputComponent
              fieldRegistration={registerField("oldEmployerName")}
              constantValue={companyName}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"old_company_name"}
              label={"Old Employer Name"}
            />
            <InputComponent
              fieldRegistration={registerField("newEmployerName")}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"new_employer_name"}
              label={"Enter the New Employer Name"}
            />
          </div>
          <DateComponent
            fieldRegistration={registerField("changeDate")}
            id={"change_date"}
            label={"Enter the Name Change Date"}
          />
          <span className={dashboardRootStyles.error}>{formError}</span>
          <div className="flex w-full justify-end">
            <LoadButtonComponent isLoading={isLoading} loadingText={"Changing"}>
              Change Name
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NameChangeForm;
