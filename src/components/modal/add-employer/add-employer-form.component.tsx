import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "../../../sharedStyles/form.styles.css";
import {
  addEmployerEmptyForm,
  AddEmployerFormValues,
  addEmployerValidationCriteria,
} from "./add-employer-form.helpers.ts";
import useForm from "../../../hooks/useForm.ts";
import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { NewEmployerRequest } from "../../../models/employer.types.ts";
import { useFetch } from "../../../models/useFetch.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { SelectComponent } from "../../select/select.component.tsx";
import { INDUSTRY_SECTOR_CODES } from "../../../data/naics-codes.ts";
import { US_STATES } from "../../../data/states.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";

interface EmployerFormProps extends ModalVisibilityProps {}

function AddEmployerForm({ isOpen, close }: EmployerFormProps) {
  const { registerField, onSubmit, isLoading, formError, resetForm } = useForm(
    addEmployerEmptyForm,
    addEmployerValidationCriteria,
  );
  const { customFetch } = useFetch();

  async function handleSubmit(formValues: AddEmployerFormValues) {
    const newEmployerRequest: NewEmployerRequest = {
      employer_name: formValues.employerName.trim(),
      employer_founded_date: formValues.establishmentDate.trim(),
      employer_industry_sector_code: parseInt(formValues.industrySectorName),
      employer_status: formValues.status.trim(),
      employer_legal_status: formValues.legalStatus.trim(),
      employer_addr_line_1: formValues.addressLine1.trim(),
      employer_addr_city: formValues.city.trim(),
      employer_addr_state: formValues.state.trim(),
      employer_addr_zip_code: formValues.zipcode.trim(),
    };

    const addressLine2 = formValues.addressLine2.trim();
    if (addressLine2) {
      newEmployerRequest.employer_addr_line_2 = addressLine2;
    }
    const dissolvedDate = formValues.dissolvedDate.trim();
    if (dissolvedDate) {
      newEmployerRequest.employer_dissolved_date = dissolvedDate;
    }
    const bankruptcyDate = formValues.bankruptcyDate.trim();
    if (bankruptcyDate) {
      newEmployerRequest.employer_bankruptcy_date = bankruptcyDate;
    }

    const response = await customFetch<{ employer_id: string }>(
      ApiRoutes.Employer,
      "POST",
      newEmployerRequest,
    );
    console.log(response.data.employer_id);
  }

  return (
    <Modal
      close={close}
      isOpen={isOpen}
      onClose={resetForm}
      title={"Create New Employer"}
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
            <LoadButtonComponent isLoading={isLoading} loadingText={"Creating"}>
              Create Employer
            </LoadButtonComponent>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddEmployerForm;
