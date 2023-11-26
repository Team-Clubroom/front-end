import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface NameChangeFormValues {
  oldEmployerName: string;
  newEmployerName: string;
  changeDate: string;
}

export const nameChangeEmptyForm: NameChangeFormValues = {
  oldEmployerName: "",
  newEmployerName: "",
  changeDate: "",
};

export const nameChangeValidationCriteria: ValidationCriteria<NameChangeFormValues> =
  {
    newEmployerName: [
      Validate.Required,
      Validate.AreDifferent(
        "oldEmployerName",
        "newEmployerName",
        "old employer name",
      ),
    ],
    changeDate: [Validate.Required],
  };
