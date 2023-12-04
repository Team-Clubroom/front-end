import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import "../../../sharedStyles/form.styles.css";
import {
  mergeFormEmptyForm,
  mergeFormValidationCriteria,
  MergeFormValues,
} from "./merge-employers.helpers.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import {
  Employer,
  MergeRelationRequest,
} from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { DateComponent } from "../../form/input/date.component.tsx";
import {
  SelectComponent,
  SelectOptions,
} from "../../form/select/select.component.tsx";

interface MergeFormProps extends ModalVisibilityProps {
  employersOptions: SelectOptions;
  employer: Employer;
}

export function MergeEmployersModal({
  isOpen,
  close,
  employer,
  employersOptions,
}: MergeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    mergeFormEmptyForm,
    mergeFormValidationCriteria,
  );

  const { customFetch } = useFetch();

  async function handleSubmit(formValues: MergeFormValues) {
    const mergeRelationRequest: MergeRelationRequest = {
      company_a_id: employer.id.toString(),
      company_b_id: formValues.secondEmployerId,
      company_c_id: formValues.mergedEmployerId,
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
            <SelectComponent
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"first_company"}
              label={"First Company to be Merged"}
              fieldRegistration={registerField("firstEmployerId")}
              constantValue={employer.id.toString()}
              options={employersOptions}
            />

            <SelectComponent
              iconName={MaterialIcon.Work}
              id={"second_company"}
              placeholder={"Employer"}
              label={"Second Company to be Merged"}
              fieldRegistration={registerField("secondEmployerId")}
              options={employersOptions}
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
            <SelectComponent
              iconName={MaterialIcon.Merge}
              id={"merged_company"}
              placeholder={"Employer"}
              label={"Company Name After Merge"}
              fieldRegistration={registerField("mergedEmployerId")}
              options={employersOptions}
            />
            <DateComponent
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
