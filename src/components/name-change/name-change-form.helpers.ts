import { Validate, ValidationCriteria } from "../../hooks/Validator.ts";

export interface AddChangeFormValues {
    employerName: string,
    newEmployerName: string,
    changeDate: string,
}

export const addChangeEmptyForm: AddChangeFormValues = {
    employerName: "",
    newEmployerName: "",
    changeDate: "",
};

export const addChangeValidationCriteria: ValidationCriteria<AddChangeFormValues> =
  {
    employerName: [Validate.Required],
    newEmployerName: [Validate.Required],
    changeDate: [Validate.Required],
  };