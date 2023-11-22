import { Validate, ValidationCriteria } from "../../hooks/Validator.ts";

export interface AddChangeFormValues {
    employerName: string,
    newEmployerName: string,
}

export const addChangeEmptyForm: AddChangeFormValues = {
    employerName: "",
    newEmployerName: "",
};

export const addChangeValidationCriteria: ValidationCriteria<AddChangeFormValues> =
  {
    employerName: [Validate.Required],
    newEmployerName: [Validate.Required],
  };