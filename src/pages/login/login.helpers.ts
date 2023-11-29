import { Validate, ValidationCriteria } from "../../hooks/Validator.ts";

export interface LoginFormValues {
  email: string;
  password: string;
}

export const emptyLoginForm: LoginFormValues = {
  email: "",
  password: "",
};

export const loginFormCriteria: ValidationCriteria<LoginFormValues> = {
  email: [Validate.Required, Validate.Email],
  // TODO: add password min length
  password: [Validate.Required],
};
