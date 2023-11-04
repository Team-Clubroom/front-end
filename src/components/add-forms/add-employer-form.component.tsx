import { dashboardRootStyles } from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import {
  addEmployerEmptyForm,
  validateAddEmployerForm,
} from "../../pages/content/app-main/tabs/dashboard-root/dashboard-root.helpers.ts";
import useForm from "../../hooks/useForm.ts";

interface EmployerFormProps {
  isModalOpen: boolean;
}

function AddEmployerForm({ isModalOpen }: EmployerFormProps) {
  // const { register } = useAuthActionContext();
  const { registerField, onSubmit, isLoading, error, success } = useForm(
    addEmployerEmptyForm,
    validateAddEmployerForm,
  );

  // const handleSubmit = async (formValues: AddEmployerFormValues) => {
  //   await register({
  //     employerName: formValues.employerName,
  //     establishmentDate: formValues.establishmentDate,
  //     industry: formValues.industry,
  //     registrationNumber: formValues.registrationNumber,
  //     address: formValues.address,
  //     employerEmail: formValues.employerEmail,
  //     employerPhone: formValues.employerPhone,
  //     employerWebsite: formValues.employerWebsite,
  //     ownershipStructure: formValues.ownershipStructure,
  //   });
  // };

  if (isModalOpen) {
    return (
      <div className={dashboardRootStyles.container}>
        <div className={dashboardRootStyles.formContainer}>
          <div className={"flex items-center justify-between"}>
            {/* ---------- TODO: COME BACK AND STYLE */}
            <div className={dashboardRootStyles.title}>Create New Employer</div>
            <button
              type={"button"}
              className={"rounded-xl hover:bg-gray-300 opacity-50 p-1"}
            >
              <span
                className={`material-symbols-outlined`}
                style={{ display: "flex" }}
              >
                close
              </span>
            </button>
          </div>
          <div
            className={
              "border-b-gray-300 border-b-2 border-[solid] mt-1.5 w-[96%]"
            }
          ></div>
          <div className={dashboardRootStyles.form}>
            <form
              // onSubmit={onSubmit(handleSubmit)}
              noValidate={true}
            >
              <div className="flex justify-center items-center">
                <div className={dashboardRootStyles.formField + " pr-1"}>
                  <label
                    htmlFor="employer_name"
                    className={dashboardRootStyles.label}
                  >
                    Employer Name:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      work
                    </span>
                    <input
                      id="employer_name"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Employer Name"
                      {...registerField("employerName")}
                    />
                  </div>
                </div>
                <div className={dashboardRootStyles.formField + " pl-1"}>
                  <label
                    htmlFor="est_date"
                    className={dashboardRootStyles.label}
                  >
                    Establishment Date:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      event
                    </span>
                    <input
                      id="est_date"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Establishment Date"
                      {...registerField("establishmentDate")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className={dashboardRootStyles.formField + " pr-1"}>
                  <label
                    htmlFor="industry"
                    className={dashboardRootStyles.label}
                  >
                    Business Industry:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      merge
                    </span>
                    <input
                      id="industry"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Business Industry"
                      {...registerField("industry")}
                    />
                  </div>
                </div>
                <div className={dashboardRootStyles.formField + " pl-1"}>
                  <label
                    htmlFor="reg_number"
                    className={dashboardRootStyles.label}
                  >
                    Business Registration Number:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      domain
                    </span>
                    <input
                      id="reg_number"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Business Registration Number"
                      {...registerField("registrationNumber")}
                    />
                  </div>
                </div>
              </div>
              <div className={dashboardRootStyles.formField + " pr-1"}>
                <label
                  htmlFor="employer_address"
                  className={dashboardRootStyles.label}
                >
                  Employer Address:
                </label>
                <div className={dashboardRootStyles.inputContainer}>
                  <span
                    className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                    style={{ display: "flex" }}
                  >
                    map
                  </span>
                  <input
                    id="employer_address"
                    type="text"
                    required
                    className={dashboardRootStyles.input}
                    placeholder="Address"
                    {...registerField("address")}
                  />
                </div>
              </div>
              <>
                <div className={dashboardRootStyles.subtitle}>
                  Contact Information
                </div>
                <div
                  className={
                    "border-b-gray-300 border-b-[1px] border-[solid] mt-1.5 mb-6 w-[96%]"
                  }
                ></div>
              </>
              <div className="flex justify-center items-center">
                <div className={dashboardRootStyles.formField}>
                  <label
                    htmlFor="employer_email"
                    className={dashboardRootStyles.label}
                  >
                    Employer E-Mail:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      mail
                    </span>
                    <input
                      id="employer_email"
                      type="email"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Employer E-Mail"
                      {...registerField("employerEmail")}
                    />
                  </div>
                </div>
                <div className={dashboardRootStyles.formField + " pl-1"}>
                  <label
                    htmlFor="employer_phone"
                    className={dashboardRootStyles.label}
                  >
                    Employer Phone:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      call
                    </span>
                    <input
                      id="employer_phone"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Employer Phone"
                      {...registerField("employerPhone")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={dashboardRootStyles.formField + " pr-1"}>
                  <label
                    htmlFor="employer_website"
                    className={dashboardRootStyles.label}
                  >
                    Employer Website:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      link
                    </span>
                    <input
                      id="employer_website"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Employer Website"
                      {...registerField("employerWebsite")}
                    />
                  </div>
                </div>
                <div className={dashboardRootStyles.formField + " pl-1"}>
                  <label
                    htmlFor="own_structure"
                    className={dashboardRootStyles.label}
                  >
                    Ownership Structure:
                  </label>
                  <div className={dashboardRootStyles.inputContainer}>
                    <span
                      className={`material-symbols-outlined ${dashboardRootStyles.inputIcon}`}
                      style={{ display: "flex" }}
                    >
                      store
                    </span>
                    <input
                      id="own_structure"
                      type="text"
                      required
                      className={dashboardRootStyles.input}
                      placeholder="Ownership Structure"
                      {...registerField("ownershipStructure")}
                    />
                  </div>
                </div>
              </div>

              {/*<span className={dashboardRootStyles.error}>{error}</span>*/}
              <div className="flex w-full justify-end">
                <button
                  type="submit"
                  className={dashboardRootStyles.submitButton}
                >
                  {isLoading ? (
                    <div className={dashboardRootStyles.loadDiv}>
                      <span className={dashboardRootStyles.loading}>
                        Creating
                      </span>
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
                      Create
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default AddEmployerForm;
