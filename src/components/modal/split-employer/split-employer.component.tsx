import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";

import { InputComponent } from "../../input/input.component.tsx";
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
import { SplitRelationRequest } from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { DateComponent } from "../../input/date.component.tsx";

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
    const splitRelationRequest: SplitRelationRequest = {
      company_a_name: companyName.trim(),
      company_b_name: formValues.firstCompanyName.trim(),
      company_c_name: formValues.secondCompanyName.trim(),
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
            <InputComponent
              iconName={MaterialIcon.Split}
              placeholder={"Tesla"}
              id={"company_name_to_be_split"}
              label={"Company Name to be Split"}
              fieldRegistration={registerField("employerToBeSplitName")}
              constantValue={companyName}
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
            <InputComponent
              fieldRegistration={registerField("firstCompanyName")}
              iconName={MaterialIcon.Work}
              placeholder={"Tesla"}
              id={"first_company_name"}
              label={"Enter the First Company Name"}
            />
            <InputComponent
              fieldRegistration={registerField("secondCompanyName")}
              iconName={MaterialIcon.Work}
              placeholder={"Ford"}
              id={"second_company_name"}
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
