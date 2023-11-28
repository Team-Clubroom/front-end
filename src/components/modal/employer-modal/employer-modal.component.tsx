import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import {
  addEmployerEmptyForm,
  AddEmployerFormValues,
  addEmployerValidationCriteria,
} from "./employer-modal.helpers.ts";
import useForm from "../../../hooks/useForm.ts";
import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { SelectComponent } from "../../select/select.component.tsx";
import { INDUSTRY_SECTOR_CODES } from "../../../data/naics-codes.ts";
import { US_STATES } from "../../../data/states.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import { useEmployerActions } from "./useEmployerActions.ts";
import { Employer } from "../../../models/employer.types.ts";

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

  async function handleSubmit(formValues: AddEmployerFormValues) {
    if (prePopulate) {
      await employerActions.editEmployer(formValues);
    } else {
      await employerActions.createNewEmployer(formValues);
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
      <div className={dashboardRootStyles.form}>
        <form
          onSubmit={onSubmit(handleSubmit)}
          noValidate={true}
          className={"flex flex-col gap-2 max-h-96 overflow-y-scroll pr-2"}
        >
          <InputComponent
            fieldRegistration={registerField("employerName")}
            iconName={MaterialIcon.Work}
            placeholder={"Tesla"}
            id={"employer_name"}
            label={"Enter the Employer Name"}
          />
          <div className={"form-row"}>
            <InputComponent
              fieldRegistration={registerField("establishmentDate")}
              iconName={MaterialIcon.Event}
              placeholder={"mm/dd/yyyy"}
              id={"est_date"}
              label={"Enter the Est. Date"}
            />
            <InputComponent
              fieldRegistration={registerField("dissolvedDate")}
              iconName={MaterialIcon.Event}
              placeholder={"mm/dd/yyyy"}
              id={"dis_date"}
              label={"Enter the Dissolved Date"}
            />
            <InputComponent
              fieldRegistration={registerField("bankruptcyDate")}
              iconName={MaterialIcon.Event}
              placeholder={"mm/dd/yyyy"}
              id={"bank_date"}
              label={"Enter the Bankruptcy Date"}
            />
          </div>
          <SelectComponent
            fieldRegistration={registerField("industrySectorName")}
            iconName={MaterialIcon.Action_Key}
            label={"Select the Industry Sector Name"}
            id={"sector_name"}
            options={Object.keys(INDUSTRY_SECTOR_CODES)
              .map((code) => ({
                text: INDUSTRY_SECTOR_CODES[code].name,
                value: code,
              }))
              .sort((a, b) => a.text.localeCompare(b.text))}
          />
          <div className={"sector form-row"}>
            <InputComponent
              fieldRegistration={registerField("legalStatus")}
              iconName={MaterialIcon.Balance}
              placeholder={"LLC"}
              id={"legal_status"}
              label={"Enter the Legal Status"}
            />
            <InputComponent
              fieldRegistration={registerField("status")}
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
            fieldRegistration={registerField("addressLine1")}
            iconName={MaterialIcon.Map}
            placeholder={"1234 Cantrell Rd"}
            id={"line_1"}
            label={"Enter Address Line 1"}
          />
          <InputComponent
            fieldRegistration={registerField("addressLine2")}
            iconName={MaterialIcon.Map}
            placeholder={"Apt 206"}
            id={"line_2"}
            label={"Enter Address Line 2"}
          />
          <div className={"form-row"}>
            <SelectComponent
              fieldRegistration={registerField("state")}
              iconName={MaterialIcon.Flag}
              label={"Select the State"}
              id={"state"}
              options={US_STATES.map((state) => ({
                text: state.name,
                value: state.abbreviation,
              }))}
            />
            <InputComponent
              fieldRegistration={registerField("city")}
              iconName={MaterialIcon.Location_City}
              placeholder={"Little Rock"}
              id={"city"}
              label={"Enter the City Name"}
            />
            <InputComponent
              fieldRegistration={registerField("zipcode")}
              iconName={MaterialIcon.Location_On}
              placeholder={"72222"}
              id={"zip_code"}
              label={"Enter the ZIP Code"}
            />
          </div>

          <span className={dashboardRootStyles.error}>{formError}</span>
          <div className="flex w-full justify-end">
            <LoadButtonComponent
              isLoading={isLoading}
              loadingText={content.loadingText}
            >
              {content.buttonText}
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EmployerModal;
