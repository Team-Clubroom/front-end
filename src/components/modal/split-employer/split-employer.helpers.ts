import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface SplitFormValues {
  relationStartDate: string;
  firstCompanyName: string;
  secondCompanyName: string;
}

export const splitFormEmptyForm: SplitFormValues = {
  relationStartDate: "",
  firstCompanyName: "",
  secondCompanyName: "",
};

export const splitFormValidationCriteria: ValidationCriteria<SplitFormValues> =
  {
    relationStartDate: [Validate.Required],
    firstCompanyName: [Validate.Required],
    secondCompanyName: [Validate.Required],
  };
