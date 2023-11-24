import { Validate, ValidationCriteria } from "../../hooks/Validator.ts";

export interface nameChangeFormValues {
  employerName: string;
  newEmployerName: string;
  changeDate: string;
}

export const nameChangeEmptyForm: nameChangeFormValues = {
  employerName: "",
  newEmployerName: "",
  changeDate: "",
};

export const nameChangeValidationCriteria: ValidationCriteria<nameChangeFormValues> =
  {
    employerName: [Validate.Required],
    newEmployerName: [Validate.Required],
    changeDate: [Validate.Required],
  };
