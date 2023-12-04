import { dashboardRootStyles } from "../../../sharedStyles/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import {
  addEmployerEmptyForm,
  addEmployerValidationCriteria,
  EmployerFormFields,
} from "./employer-modal.helpers.ts";
import useForm from "../../../hooks/useForm.ts";
import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { InputComponent } from "../../form/input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { SelectComponent } from "../../form/select/select.component.tsx";
import { INDUSTRY_SECTOR_CODES } from "../../../data/naics-codes.ts";
import { US_STATES } from "../../../data/states.ts";
import { RequestButtonComponent } from "../../request-button/request-button.component.tsx";
import { useEmployerActions } from "./useEmployerActions.ts";
import { Employer } from "../../../models/employer.types.ts";
import { DateComponent } from "../../form/input/date.component.tsx";
import { useState, useEffect } from "react";

interface EmployerModalProps extends ModalVisibilityProps {
  prePopulate?: Employer;
}

function EmployerModal({ isOpen, close, prePopulate }: EmployerModalProps) {
  const employerActions = useEmployerActions();
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    employerActions.getEmployerFormInitValues(
      prePopulate,
      addEmployerEmptyForm,
    ),
    addEmployerValidationCriteria,
  );

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      let interval = setInterval(() => {
        close();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [success]);

  async function handleSubmit(formValues: EmployerFormFields) {
    if (prePopulate) {
      await employerActions.editEmployer(prePopulate, formValues);
      setSuccess(true);
    } else {
      await employerActions.createNewEmployer(formValues);
      setSuccess(true);
    }
  }

  const content = prePopulate
    ? {
        title: "Edit Employer",
        buttonText: "Edit Employer",
        loadingText: "Editing",
      }
    : {
        title: "Create New Employer",
        buttonText: "Create Employer",
        loadingText: "Creating",
      };

  return (
    <Modal
      close={close}
      isOpen={isOpen}
      onClose={resetForm}
      title={content.title}
    >
      <form
        onSubmit={onSubmit(handleSubmit, !prePopulate)}
        noValidate={true}
        className={"mt-4"}
      >
        <div className={"overflow-y-scroll flex flex-col gap-2 max-h-96 pr-2"}>
          <InputComponent
            fieldRegistration={registerField("employer_name")}
            iconName={MaterialIcon.Work}
            placeholder={"Tesla"}
            id={"employer_name"}
            label={"Enter the Employer Name"}
          />
          <div className={"form-row"}>
            <DateComponent
              fieldRegistration={registerField("employer_founded_date")}
              id={"est_date"}
              label={"Enter the Est. Date"}
            />
            <DateComponent
              fieldRegistration={registerField("employer_dissolved_date")}
              id={"dis_date"}
              label={"Enter the Dissolved Date"}
            />
            <DateComponent
              fieldRegistration={registerField("employer_bankruptcy_date")}
              id={"bank_date"}
              label={"Enter the Bankruptcy Date"}
            />
          </div>
          <SelectComponent
            fieldRegistration={registerField("employer_industry_sector_code")}
            iconName={MaterialIcon.Action_Key}
            label={"Select the Industry Sector Name"}
            id={"sector_name"}
            placeholder={"Sector name"}
            options={Object.keys(INDUSTRY_SECTOR_CODES)
              .map((code) => ({
                text: INDUSTRY_SECTOR_CODES[code].name,
                value: code,
              }))
              .sort((a, b) => a.text.localeCompare(b.text))}
          />
          <div className={"sector form-row"}>
            <InputComponent
              fieldRegistration={registerField("employer_legal_status")}
              iconName={MaterialIcon.Balance}
              placeholder={"LLC"}
              id={"legal_status"}
              label={"Enter the Legal Status"}
            />
            <InputComponent
              fieldRegistration={registerField("employer_status")}
              iconName={MaterialIcon.Work_Update}
              placeholder={"Active"}
              id={"status"}
              label={"Enter the Status"}
            />
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Company address
            </span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <InputComponent
            fieldRegistration={registerField("employer_addr_line_1")}
            iconName={MaterialIcon.Map}
            placeholder={"1234 Cantrell Rd"}
            id={"line_1"}
            label={"Enter Address Line 1"}
          />
          <InputComponent
            fieldRegistration={registerField("employer_addr_line_2")}
            iconName={MaterialIcon.Map}
            placeholder={"Apt 206"}
            id={"line_2"}
            label={"Enter Address Line 2"}
          />
          <div className={"form-row"}>
            <SelectComponent
              fieldRegistration={registerField("employer_addr_state")}
              iconName={MaterialIcon.Flag}
              label={"Select the State"}
              placeholder={"State"}
              id={"state"}
              options={US_STATES.map((state) => ({
                text: state.name,
                value: state.abbreviation,
              }))}
            />
            <InputComponent
              fieldRegistration={registerField("employer_addr_city")}
              iconName={MaterialIcon.Location_City}
              placeholder={"Little Rock"}
              id={"city"}
              label={"Enter the City Name"}
            />
            <InputComponent
              fieldRegistration={registerField("employer_addr_zip_code")}
              iconName={MaterialIcon.Location_On}
              placeholder={"72222"}
              id={"zip_code"}
              label={"Enter the ZIP Code"}
            />
          </div>
        </div>
        <span className={`${dashboardRootStyles.error} py-4`}>{formError}</span>
        <div className="flex w-full justify-end pr-2">
          <RequestButtonComponent
            isLoading={isLoading}
            loadingText={content.loadingText}
            success={success}
            successText={"Employer Created"}
          >
            {content.buttonText}
          </RequestButtonComponent>
        </div>
      </form>
    </Modal>
  );
}

export default EmployerModal;
