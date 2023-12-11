import { EmployerFormFields } from "./employer-modal.helpers.ts";
import {
  DeleteEmployerAction,
  DeleteEmployerRequest,
  Employer,
  EmployerEditRequest,
  NewEmployerRequest,
} from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { useFetch } from "../../../models/useFetch.ts";

export const useEmployerActions = () => {
  const { customFetch } = useFetch();
  const createNewEmployer = async (
    formValues: EmployerFormFields,
  ): Promise<Employer> => {
    const newEmployerRequest: NewEmployerRequest = {
      employer_name: formValues.employer_name.trim(),
      employer_founded_date: formValues.employer_founded_date.trim(),
      employer_industry_sector_code: parseInt(
        formValues.employer_industry_sector_code,
      ),
      employer_status: formValues.employer_status.trim(),
      employer_legal_status: formValues.employer_legal_status.trim(),
      employer_addr_line_1: formValues.employer_addr_line_1.trim(),
      employer_addr_city: formValues.employer_addr_city.trim(),
      employer_addr_state: formValues.employer_addr_state.trim(),
      employer_addr_zip_code: formValues.employer_addr_zip_code.trim(),
    };

    const addressLine2 = (formValues.employer_addr_line_2 || "").trim();
    if (addressLine2) {
      newEmployerRequest.employer_addr_line_2 = addressLine2;
    }
    const dissolvedDate = (formValues.employer_dissolved_date || "").trim();
    if (dissolvedDate) {
      newEmployerRequest.employer_dissolved_date = dissolvedDate;
    }
    const bankruptcyDate = (formValues.employer_bankruptcy_date || "").trim();
    if (bankruptcyDate) {
      newEmployerRequest.employer_bankruptcy_date = bankruptcyDate;
    }

    const response = await customFetch<{ employer_id: number | string }>(
      ApiRoutes.Employer,
      "POST",
      newEmployerRequest,
    );

    return {
      id: response.data.employer_id.toString(),
      name: newEmployerRequest.employer_name,
      industrySectorCode: newEmployerRequest.employer_industry_sector_code,
      dissolvedDate: newEmployerRequest.employer_dissolved_date,
      bankruptcyDate: newEmployerRequest.employer_bankruptcy_date,
      address: {
        zipCode: newEmployerRequest.employer_addr_zip_code,
        city: newEmployerRequest.employer_addr_city,
        state: newEmployerRequest.employer_addr_state,
        line2: newEmployerRequest.employer_addr_line_2,
        line1: newEmployerRequest.employer_addr_line_1,
      },
      foundedDate: newEmployerRequest.employer_founded_date,
      status: newEmployerRequest.employer_status,
      legalStatus: newEmployerRequest.employer_legal_status,
    };
  };
  const editEmployer = async (
    employer: Employer,
    formValues: EmployerFormFields,
  ): Promise<Employer> => {
    const previousFormValues = _employerToForm(employer);
    const editRequest: EmployerEditRequest = { employer_id: employer.id };

    const props = Object.keys(formValues) as (keyof EmployerFormFields)[];
    props.forEach((key) => {
      const newValue = formValues[key].trim();
      const oldValue = previousFormValues[key].trim();

      // Compare old and new values
      if (newValue !== oldValue) {
        // TS won't let me assign new value without casting to unknown
        editRequest[key] = newValue as unknown as undefined;
      }
    });
    await customFetch(ApiRoutes.Employer, "PATCH", editRequest);
    return _partialEmployerToEmployer(editRequest, employer);
  };

  const _partialEmployerToEmployer = (
    partialEmployer: Partial<NewEmployerRequest>,
    originalEmployer: Employer,
  ): Employer => {
    return {
      id: originalEmployer.id,
      name: partialEmployer.employer_name || originalEmployer.name,
      address: {
        line1:
          partialEmployer.employer_addr_line_1 ||
          originalEmployer.address.line1,
        line2:
          partialEmployer.employer_addr_line_2 ||
          originalEmployer.address.line2,
        city:
          partialEmployer.employer_addr_city || originalEmployer.address.city,
        state:
          partialEmployer.employer_addr_state || originalEmployer.address.state,
        zipCode:
          partialEmployer.employer_addr_zip_code ||
          originalEmployer.address.zipCode,
      },
      foundedDate:
        partialEmployer.employer_founded_date || originalEmployer.foundedDate,
      dissolvedDate:
        partialEmployer.employer_dissolved_date ||
        originalEmployer.dissolvedDate,
      bankruptcyDate:
        partialEmployer.employer_bankruptcy_date ||
        originalEmployer.bankruptcyDate,
      industrySectorCode:
        partialEmployer.employer_industry_sector_code ||
        originalEmployer.industrySectorCode,
      status: partialEmployer.employer_status || originalEmployer.status,
      legalStatus:
        partialEmployer.employer_legal_status || originalEmployer.legalStatus,
    };
  };

  const deleteEmployer = async (employer: Employer) => {
    const deleteRequest: DeleteEmployerRequest = {
      employer_id: employer.id,
    };
    await customFetch(ApiRoutes.DeleteEmployer, "DELETE", deleteRequest);
  };

  const _employerToForm = (employer: Employer): EmployerFormFields => ({
    employer_name: employer.name,
    employer_founded_date: employer.foundedDate,
    employer_dissolved_date: employer.dissolvedDate || "",
    employer_bankruptcy_date: employer.bankruptcyDate || "",
    employer_industry_sector_code: employer.industrySectorCode.toString(),
    employer_status: employer.status,
    employer_legal_status: employer.legalStatus,
    employer_addr_line_1: employer.address.line1,
    employer_addr_line_2: employer.address.line2 || "",
    employer_addr_city: employer.address.city,
    employer_addr_state: employer.address.state,
    employer_addr_zip_code: employer.address.zipCode,
  });

  const getEmployerFormInitValues = (
    employer: Employer | undefined,
    emptyForm: EmployerFormFields,
  ): EmployerFormFields => {
    if (employer === undefined) return emptyForm;
    return _employerToForm(employer);
  };

  return {
    createNewEmployer,
    editEmployer,
    getEmployerFormInitValues,
    deleteEmployer,
  };
};
