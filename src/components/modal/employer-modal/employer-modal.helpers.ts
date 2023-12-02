import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";
import { NewEmployerRequest } from "../../../models/employer.types.ts";

export interface EmployerFormFields
  extends Record<keyof NewEmployerRequest, string> {}

export const addEmployerEmptyForm: EmployerFormFields = {
  employer_name: "",
  employer_founded_date: "",
  employer_dissolved_date: "",
  employer_bankruptcy_date: "",
  employer_industry_sector_code: "",
  employer_status: "",
  employer_legal_status: "",
  employer_addr_line_1: "",
  employer_addr_line_2: "",
  employer_addr_city: "",
  employer_addr_state: "",
  employer_addr_zip_code: "",
};

export const addEmployerValidationCriteria: ValidationCriteria<EmployerFormFields> =
  {
    employer_name: [Validate.Required],
    employer_founded_date: [Validate.Required],
    employer_industry_sector_code: [Validate.Required],
    employer_status: [Validate.Required],
    employer_legal_status: [Validate.Required],
    employer_addr_line_1: [Validate.Required],
    employer_addr_city: [Validate.Required],
    employer_addr_state: [Validate.Required],
    employer_addr_zip_code: [Validate.Required, Validate.ZipCode],
  };
