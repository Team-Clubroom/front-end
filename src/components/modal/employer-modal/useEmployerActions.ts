import { AddEmployerFormValues } from "./employer-modal.helpers.ts";
import {
  Employer,
  NewEmployerRequest,
} from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";
import { useFetch } from "../../../models/useFetch.ts";

export const useEmployerActions = () => {
  const { customFetch } = useFetch();
  const createNewEmployer = async (formValues: AddEmployerFormValues) => {
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
  };
  const editEmployer = (formValues: AddEmployerFormValues) => {
    console.log(formValues);
  };

  const getEmployerFormInitValues = (
    employer: Employer | undefined,
    emptyForm: AddEmployerFormValues,
  ): AddEmployerFormValues => {
    if (employer === undefined) return emptyForm;
    return {
      employerName: employer.name,
      establishmentDate: employer.foundedDate,
      dissolvedDate: employer.dissolvedDate || "",
      bankruptcyDate: employer.bankruptcyDate || "",
      industrySectorName: employer.industrySectorCode.toString(),
      status: employer.status,
      legalStatus: employer.legalStatus,
      addressLine1: employer.address.line1,
      addressLine2: employer.address.line2 || "",
      city: employer.address.city,
      state: employer.address.state,
      zipcode: employer.address.zipCode,
    };
  };

  return {
    createNewEmployer,
    editEmployer,
    getEmployerFormInitValues,
  };
};
