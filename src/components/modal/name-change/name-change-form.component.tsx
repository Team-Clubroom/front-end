import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import {
  nameChangeEmptyForm,
  NameChangeFormValues,
  nameChangeValidationCriteria,
} from "./name-change-form.helpers.ts";
import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { CompanyComponent } from "../../company/company.component.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import { NameChangeRequest } from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import "../../../sharedStyles/form.styles.css";

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
            <CompanyComponent
              iconName={MaterialIcon.Work}
              label={"Old Company Name"}
              name={companyName}
            />
            <InputComponent
              fieldRegistration={registerField("newEmployerName")}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"new_employer_name"}
              label={"Enter the New Employer Name"}
            />
          </div>
          <InputComponent
            fieldRegistration={registerField("changeDate")}
            iconName={MaterialIcon.Event}
            placeholder={"mm/dd/yyyy"}
            id={"change_date"}
            label={"Enter the Name Change Date"}
          />
          <span className={dashboardRootStyles.error}>{formError}</span>
          <div className="flex w-full justify-end">
            <button type="submit" className={dashboardRootStyles.submitButton}>
              {isLoading ? (
                <div className={dashboardRootStyles.loadDiv}>
                  <span className={dashboardRootStyles.loading}>Changing</span>
                  <svg
                    aria-hidden="true"
                    className={dashboardRootStyles.spinner}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                <span className={dashboardRootStyles.createText}>
                  Change Name
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NameChangeForm;
