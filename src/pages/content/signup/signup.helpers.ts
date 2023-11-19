import { Validate, ValidationCriteria } from "../../../hooks/Validator.ts";

export interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export const signupEmptyForm: SignupFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

export const signupValidationCriteria: ValidationCriteria<SignupFormValues> = {
  // TODO: add min length on password
  firstName: [Validate.Required],
  lastName: [Validate.Required],
  email: [Validate.Required, Validate.Email],
  password: [Validate.Required],
  passwordRepeat: [
    Validate.Required,
    Validate.AreSame<SignupFormValues>("password", "passwordRepeat"),
  ],
};
