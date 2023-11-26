import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface SplitFormValues {
  employerToBeSplitName: string;
  relationStartDate: string;
  firstCompanyName: string;
  secondCompanyName: string;
}

export const splitFormEmptyForm: SplitFormValues = {
  employerToBeSplitName: "",
  relationStartDate: "",
  firstCompanyName: "",
  secondCompanyName: "",
};

export const splitFormValidationCriteria: ValidationCriteria<SplitFormValues> =
  {
    relationStartDate: [Validate.Required],
    firstCompanyName: [
      Validate.Required,
      Validate.AreDifferent(
        "employerToBeSplitName",
        "firstCompanyName",
        "the splitting company",
      ),
    ],
    secondCompanyName: [
      Validate.Required,
      Validate.AreDifferent(
        "employerToBeSplitName",
        "secondCompanyName",
        "the splitting company",
      ),
      Validate.AreDifferent(
        "firstCompanyName",
        "secondCompanyName",
        "first company name",
      ),
    ],
  };
