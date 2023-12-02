import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import "../../../sharedStyles/form.styles.css";
import {
  splitFormEmptyForm,
  splitFormValidationCriteria,
  SplitFormValues,
} from "./split-employer.helpers.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import {
  Employer,
  SplitRelationRequest,
} from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { DateComponent } from "../../form/input/date.component.tsx";
import {
  SelectComponent,
  SelectOptions,
} from "../../form/select/select.component.tsx";

interface ChangeFormProps extends ModalVisibilityProps {
  employersOptions: SelectOptions;
  employer: Employer;
}

export function SplitEmployerModal({
  isOpen,
  close,
  employer,
  employersOptions,
}: ChangeFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    splitFormEmptyForm,
    splitFormValidationCriteria,
  );
  const { customFetch } = useFetch();

  async function handleSubmit(formValues: SplitFormValues) {
    const splitRelationRequest: SplitRelationRequest = {
      company_a_name: employer.id.toString(),
      company_b_name: formValues.firstCompanyId,
      company_c_name: formValues.secondCompanyId,
      employer_relation_start_date: formValues.relationStartDate.trim(),
    };

    await customFetch<undefined>(
      ApiRoutes.SplitRelation,
      "POST",
      splitRelationRequest,
    );
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
            <SelectComponent
              iconName={MaterialIcon.Split}
              placeholder={"Tesla"}
              id={"company_name_to_be_split"}
              label={"Company Name to be Split"}
              fieldRegistration={registerField("employerToBeSplitId")}
              constantValue={employer.id.toString()}
              options={employersOptions}
            />
            <DateComponent
              fieldRegistration={registerField("relationStartDate")}
              id={"split_relation_start_date"}
              label={"Enter the Relation's Start Date"}
            />
          </div>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Resulting companies information
            </span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <div className={"form-row"}>
            <SelectComponent
              fieldRegistration={registerField("firstCompanyId")}
              iconName={MaterialIcon.Work}
              placeholder={"Employer"}
              id={"first_company_name"}
              label={"Enter the First Company Name"}
              options={employersOptions}
            />
            <SelectComponent
              fieldRegistration={registerField("secondCompanyId")}
              iconName={MaterialIcon.Work}
              placeholder={"Employer"}
              id={"second_company_name"}
              label={"Enter the Second Company Name"}
              options={employersOptions}
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
