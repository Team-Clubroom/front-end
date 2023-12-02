import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface NameChangeFormValues {
  oldEmployerId: string;
  newEmployerId: string;
  changeDate: string;
}

export const nameChangeEmptyForm: NameChangeFormValues = {
  oldEmployerId: "",
  newEmployerId: "",
  changeDate: "",
};

export const nameChangeValidationCriteria: ValidationCriteria<NameChangeFormValues> =
  {
    newEmployerId: [
      Validate.Required,
      Validate.AreDifferent(
        "oldEmployerId",
        "newEmployerId",
        "old employer name",
      ),
    ],
    changeDate: [Validate.Required],
  };
