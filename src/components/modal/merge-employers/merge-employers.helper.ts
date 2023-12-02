import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface MergeFormValues {
  firstEmployerId: string;
  secondEmployerId: string;
  mergedEmployerId: string;
  relationStartDate: string;
}

export const mergeFormEmptyForm: MergeFormValues = {
  firstEmployerId: "",
  secondEmployerId: "",
  mergedEmployerId: "",
  relationStartDate: "",
};

export const mergeFormValidationCriteria: ValidationCriteria<MergeFormValues> =
  {
    relationStartDate: [Validate.Required],
    secondEmployerId: [
      Validate.Required,
      Validate.AreDifferent(
        "firstEmployerId",
        "secondEmployerId",
        "the first company",
      ),
    ],
    mergedEmployerId: [
      Validate.Required,
      Validate.AreDifferent(
        "firstEmployerId",
        "mergedEmployerId",
        "the first company",
      ),
      Validate.AreDifferent(
        "secondEmployerId",
        "mergedEmployerId",
        "the second company",
      ),
    ],
  };
