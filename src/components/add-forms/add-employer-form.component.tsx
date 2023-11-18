import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import "./form.styles.css";
import {
  addEmployerEmptyForm,
  validateAddEmployerForm,
} from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.helpers.ts";
import useForm from "../../hooks/useForm.ts";
import { Modal, ModalVisibilityProps } from "../modal/modal.component.tsx";
import { InputComponent } from "../input/input.component.tsx";

interface EmployerFormProps extends ModalVisibilityProps {}

function AddEmployerForm({ isOpen, close }: EmployerFormProps) {
  // const { register } = useAuthActionContext();
  const { registerField, onSubmit, isLoading, error, success } = useForm(
    addEmployerEmptyForm,
    validateAddEmployerForm,
  );

  return (
    <Modal close={close} isOpen={isOpen} title={"Create New Employer"}>
      <div className={dashboardRootStyles.form}>
        <form
          // onSubmit={onSubmit(handleSubmit)}
          noValidate={true}
          className={"flex flex-col gap-2"}
        >
          <InputComponent
            fieldRegistration={registerField("employerName")}
            iconName={"work"}
            placeholder={"Tesla"}
            id={"employer_name"}
            label={"Enter the employer name"}
          />
          <div className={"form-row"}>
            <InputComponent
              fieldRegistration={registerField("establishmentDate")}
              iconName={"event"}
              placeholder={"mm/dd/yyyy"}
              id={"est_date"}
              label={"Enter the est. date"}
            />
            <InputComponent
              fieldRegistration={registerField("dissolvedDate")}
              iconName={"event"}
              placeholder={"mm/dd/yyyy"}
              id={"dis_date"}
              label={"Enter the dissolved date"}
            />
            <InputComponent
              fieldRegistration={registerField("bankruptcyDate")}
              iconName={"event"}
              placeholder={"mm/dd/yyyy"}
              id={"bank_date"}
              label={"Enter the bankruptcy date"}
            />
          </div>
          <div className={"sector form-row"}>
            <InputComponent
              fieldRegistration={registerField("industrySectorName")}
              iconName={"event"}
              placeholder={"Food"}
              id={"sector_name"}
              label={"Select the sector name"}
            />
            <InputComponent
              fieldRegistration={registerField("legalStatus")}
              iconName={"event"}
              placeholder={"Active"}
              id={"legal_status"}
              label={"Enter the legal status"}
            />
            <InputComponent
              fieldRegistration={registerField("status")}
              iconName={"event"}
              placeholder={"LLC"}
              id={"status"}
              label={"Enter the status"}
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
            iconName={"event"}
            placeholder={"1234 Cantrell Rd"}
            id={"line_1"}
            label={"Enter address line 1"}
          />
          <InputComponent
            fieldRegistration={registerField("addressLine2")}
            iconName={"event"}
            placeholder={"Apt 206"}
            id={"line_2"}
            label={"Enter address line 2"}
          />
          <div className={"form-row"}>
            <InputComponent
              fieldRegistration={registerField("state")}
              iconName={"event"}
              placeholder={"Arkansas"}
              id={"state"}
              label={"Select the state"}
            />
            <InputComponent
              fieldRegistration={registerField("city")}
              iconName={"event"}
              placeholder={"Little Rock"}
              id={"city"}
              label={"Enter the city name"}
            />
            <InputComponent
              fieldRegistration={registerField("zipcode")}
              iconName={"event"}
              placeholder={"72222"}
              id={"zip_code"}
              label={"Enter the ZIP code"}
            />
          </div>

          {/*<span className={dashboardRootStyles.error}>{error}</span>*/}
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