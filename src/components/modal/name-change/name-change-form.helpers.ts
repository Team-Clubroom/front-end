import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface NameChangeFormValues {
  newEmployerName: string;
  changeDate: string;
}

export const nameChangeEmptyForm: NameChangeFormValues = {
  newEmployerName: "",
  changeDate: "",
};

export const nameChangeValidationCriteria: ValidationCriteria<NameChangeFormValues> =
  {
    newEmployerName: [Validate.Required],
    changeDate: [Validate.Required],
  };
