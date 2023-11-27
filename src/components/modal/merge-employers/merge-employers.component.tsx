import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";

import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import "../../../sharedStyles/form.styles.css";
import {
  mergeFormEmptyForm,
  mergeFormValidationCriteria,
  MergeFormValues,
} from "./merge-employers.helper.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import { MergeRelationRequest } from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";

interface MergeFormProps extends ModalVisibilityProps {
  companyName: string;
}

export function MergeEmployersModal({
  isOpen,
  close,
  companyName,
}: MergeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    mergeFormEmptyForm,
    mergeFormValidationCriteria,
  );

  const { customFetch } = useFetch();

  async function handleSubmit(formValues: MergeFormValues) {
    const mergeRelationRequest: MergeRelationRequest = {
      company_a_name: companyName.trim(),
      company_b_name: formValues.secondEmployer.trim(),
      company_c_name: formValues.mergedEmployer.trim(),
      employer_relation_start_date: formValues.relationStartDate.trim(),
    };

    await customFetch<undefined>(
      ApiRoutes.MergeRelation,
      "POST",
      mergeRelationRequest,
    );
  }

  return (
    <Modal
      close={close}
      isOpen={isOpen}
      onClose={resetForm}
      title={"Create Merge Relation"}
    >
      <div className={dashboardRootStyles.form}>
        <form
          onSubmit={onSubmit(handleSubmit)}
          noValidate={true}
          className={"flex flex-col gap-2 max-h-96 pr-2"}
        >
          <div className={"form-row"}>
            <InputComponent
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"first_company"}
              label={"First Company to be Merged"}
              fieldRegistration={registerField("firstEmployer")}
              constantValue={companyName}
            />
            <InputComponent
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"second_company"}
              label={"Second Company to be Merged"}
              fieldRegistration={registerField("secondEmployer")}
            />
          </div>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Resulting company's information
            </span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <div className={"form-row"}>
            <InputComponent
              iconName={MaterialIcon.Merge}
              placeholder={"Tesla"}
              id={"merged_company"}
              label={"Company Name After Merge"}
              fieldRegistration={registerField("mergedEmployer")}
            />
            <InputComponent
              iconName={MaterialIcon.Event}
              placeholder={"mm/dd/yyyy"}
              id={"relation_start_date"}
              label={"Enter the Relation's Start Date"}
              fieldRegistration={registerField("relationStartDate")}
            />
          </div>
          <span className={dashboardRootStyles.error}>{formError}</span>
          <div className="flex w-full justify-end">
            <LoadButtonComponent isLoading={isLoading} loadingText={"Merging"}>
              Merge Companies
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}
