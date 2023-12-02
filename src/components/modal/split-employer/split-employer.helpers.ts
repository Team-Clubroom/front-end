import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface SplitFormValues {
  employerToBeSplitId: string;
  relationStartDate: string;
  firstCompanyId: string;
  secondCompanyId: string;
}

export const splitFormEmptyForm: SplitFormValues = {
  employerToBeSplitId: "",
  relationStartDate: "",
  firstCompanyId: "",
  secondCompanyId: "",
};

export const splitFormValidationCriteria: ValidationCriteria<SplitFormValues> =
  {
    relationStartDate: [Validate.Required],
    firstCompanyId: [
      Validate.Required,
      Validate.AreDifferent(
        "employerToBeSplitId",
        "firstCompanyId",
        "the splitting company",
      ),
    ],
    secondCompanyId: [
      Validate.Required,
      Validate.AreDifferent(
        "employerToBeSplitId",
        "secondCompanyId",
        "the splitting company",
      ),
      Validate.AreDifferent(
        "firstCompanyId",
        "secondCompanyId",
        "first company name",
      ),
    ],
  };
