import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface MergeFormValues {
  firstEmployer: string;
  secondEmployer: string;
  mergedEmployer: string;
  relationStartDate: string;
}

export const mergeFormEmptyForm: MergeFormValues = {
  firstEmployer: "",
  secondEmployer: "",
  mergedEmployer: "",
  relationStartDate: "",
};

export const mergeFormValidationCriteria: ValidationCriteria<MergeFormValues> =
  {
    relationStartDate: [Validate.Required],
    secondEmployer: [
      Validate.Required,
      Validate.AreDifferent(
        "firstEmployer",
        "secondEmployer",
        "the first company",
      ),
    ],
    mergedEmployer: [
      Validate.Required,
      Validate.AreDifferent(
        "firstEmployer",
        "mergedEmployer",
        "the first company",
      ),
      Validate.AreDifferent(
        "secondEmployer",
        "mergedEmployer",
        "the second company",
      ),
    ],
  };
