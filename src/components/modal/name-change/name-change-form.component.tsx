import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import {
  nameChangeEmptyForm,
  NameChangeFormValues,
  nameChangeValidationCriteria,
} from "./name-change-form.helpers.ts";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import {
  Employer,
  EmployerAction,
  NameChangeRequest,
} from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import "../../../sharedStyles/form.styles.css";
import { RequestButtonComponent } from "../../request-button/request-button.component.tsx";
import { DateComponent } from "../../form/input/date.component.tsx";
import { InputComponent } from "../../form/input/input.component.tsx";

interface ChangeFormProps extends ModalVisibilityProps {
  employer: Employer;
  employerDispatch: (action: EmployerAction) => unknown;
}

function NameChangeForm({
  isOpen,
  close,
  employer,
  employerDispatch,
}: ChangeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm, success } =
    useForm(nameChangeEmptyForm, nameChangeValidationCriteria);
  const { customFetch } = useFetch();

  async function handleSubmit(formValues: NameChangeFormValues) {
    const nameChangeRequest: NameChangeRequest = {
      old_employer_id: employer.id.toString(),
      new_employer_name: formValues.newEmployerName.trim(),
      name_change_effective_date: formValues.changeDate.trim(),
    };

    const result = await customFetch<{ newEmployer: Employer }>(
      ApiRoutes.NameChange,
      "POST",
      nameChangeRequest,
    );
    employerDispatch({
      type: "Add",
      payload: { newEmployer: result.data.newEmployer },
    });
    setTimeout(close, 2000);
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
              constantValue={employer.name}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"old_company_name"}
              label={"Old Employer Name"}
            />
            <InputComponent
              fieldRegistration={registerField("newEmployerName")}
              iconName={MaterialIcon.Work}
              placeholder={"Twitter"}
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
            <RequestButtonComponent
              isLoading={isLoading}
              loadingText={"Changing"}
              success={{ text: "Name Changed", isSuccessful: success }}
            >
              Change Name
            </RequestButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NameChangeForm;
