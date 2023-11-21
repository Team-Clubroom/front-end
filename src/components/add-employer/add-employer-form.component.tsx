import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "./form.styles.css";
import {
  addEmployerEmptyForm,
  AddEmployerFormValues,
  addEmployerValidationCriteria,
} from "./add-employer-form.helpers.ts";
import useForm from "../../hooks/useForm.ts";
import { Modal, ModalVisibilityProps } from "../modal/modal.component.tsx";
import { InputComponent } from "../input/input.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { NewEmployerRequest } from "../../models/employer.types.ts";
import { useFetch } from "../../models/useFetch.ts";
import { ApiRoutes } from "../../models/api.types.ts";
import { SelectComponent } from "../select/select.component.tsx";
import { INDUSTRY_SECTOR_CODES } from "../../data/naics-codes.ts";
import { US_STATES } from "../../data/states.ts";

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

    console.log(newEmployerRequest);
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
                text: state,
                value: state,
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
            <button type="submit" className={dashboardRootStyles.submitButton}>
              {isLoading ? (
                <div className={dashboardRootStyles.loadDiv}>
                  <span className={dashboardRootStyles.loading}>Creating</span>
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
                  Create Employer
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddEmployerForm;
