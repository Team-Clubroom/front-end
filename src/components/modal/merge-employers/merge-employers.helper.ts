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
    firstEmployer: [
      Validate.Required,
      Validate.AreDifferent(
        "firstEmployer",
        "secondEmployer",
        "than the other merging company",
      ),
      Validate.AreDifferent(
        "firstEmployer",
        "mergedEmployer",
        "the merged company",
      ),
    ],
    secondEmployer: [
      Validate.Required,
      Validate.AreDifferent(
        "secondEmployer",
        "mergedEmployer",
        "the merged company",
      ),
    ],
    mergedEmployer: [Validate.Required],
  };
