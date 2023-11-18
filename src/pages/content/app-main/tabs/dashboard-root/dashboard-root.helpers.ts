export interface AddEmployerFormValues {
  employerName: string;
  establishmentDate: string;
  dissolvedDate: string;
  bankruptcyDate: string;
  industrySectorName: string;
  status: string;
  legalStatus: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
}

export const addEmployerEmptyForm: AddEmployerFormValues = {
  employerName: "",
  establishmentDate: "",
  dissolvedDate: "",
  bankruptcyDate: "",
  industrySectorName: "",
  status: "",
  legalStatus: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipcode: "",
};

export function validateAddEmployerForm(
  formValues: AddEmployerFormValues,
): string {
  return "";
}
