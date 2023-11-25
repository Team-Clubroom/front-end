import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";
import { US_STATES } from "../../../data/states.ts";
import { INDUSTRY_SECTOR_CODES } from "../../../data/naics-codes.ts";

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
  industrySectorName: Object.keys(INDUSTRY_SECTOR_CODES)[0],
  status: "",
  legalStatus: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: US_STATES[0].abbreviation,
  zipcode: "",
};

export const addEmployerValidationCriteria: ValidationCriteria<AddEmployerFormValues> =
  {
    employerName: [Validate.Required],
    establishmentDate: [Validate.Required],
    industrySectorName: [Validate.Required],
    status: [Validate.Required],
    legalStatus: [Validate.Required],
    addressLine1: [Validate.Required],
    city: [Validate.Required],
    state: [Validate.Required],
    zipcode: [Validate.Required, Validate.ZipCode],
  };
