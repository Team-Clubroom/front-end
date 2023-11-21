import React, { useState } from "react";
import {
  Validate,
  ValidationCriteria,
  ValidatorFunctions,
} from "./Validator.ts";

export interface FieldRegistration {
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  value: string;
  error: string | null;
  required: boolean;
}

type FieldsErrors<T> = Record<keyof T, string>;

const useForm = <T extends Record<keyof T, string>>(
  initialValues: T,
  validationCriteria: ValidationCriteria<T>,
) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string>("");
  const [fieldsErrors, setFieldsErrors] = useState<FieldsErrors<T>>(
    getClearedErrors(),
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    name: keyof T,
  ) => {
    setFieldsErrors({ ...fieldsErrors, [name]: "" });
    setFormError("");
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  const registerField = (name: keyof T): FieldRegistration => {
    return {
      onChange: (e) => handleChange(e, name),
      value: formValues[name],
      error: fieldsErrors[name],
      required:
        validationCriteria[name] &&
        (validationCriteria[name] as ValidatorFunctions<T>).some(
          (func) => func === Validate.Required,
        ),
    };
  };

  const validateFormFields = (formValues: T): boolean => {
    let formHasAnError = false;
    const errorsUpdate = { ...fieldsErrors };
    for (const [field, validators] of Object.entries(validationCriteria)) {
      const fieldName = field as keyof T;
      const value = formValues[fieldName];
      for (const validator of validators as ValidatorFunctions<T>) {
        const fieldErrorMessage = validator(value, formValues);
        if (fieldErrorMessage) {
          formHasAnError = true;
          errorsUpdate[fieldName] = fieldErrorMessage;
          break;
        }
      }
    }
    setFieldsErrors(errorsUpdate);
    return formHasAnError;
  };

  /**
   * Returns a form event handler
   * @param callback - function to be invoked if the form has no validation errors
   */
  const onSubmit =
    (callback: (formValues: T) => Promise<void>): React.FormEventHandler =>
    async (event) => {
      try {
        // prevent form from submitting and refreshing the page
        event.preventDefault();
        // get the form error if any
        const anyErrorsInForm = validateFormFields(formValues);
        if (anyErrorsInForm) return;
        setIsLoading(true);
        await callback(formValues);
        setSuccess(true);
        resetForm();
      } catch (e) {
        console.log(e);
        setFormError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

  function getClearedErrors(): Record<keyof T, string> {
    const clearedErrors: Record<keyof T, string> = { ...initialValues };
    (Object.keys(clearedErrors) as Array<keyof T>).forEach((key) => {
      clearedErrors[key] = "";
    });
    return clearedErrors;
  }

  const resetForm = () => {
    setFormValues(initialValues);
    setFieldsErrors(getClearedErrors());
    setFormError("");
  };

  return {
    registerField,
    formValues,
    resetForm,
    isLoading,
    onSubmit,
    success,
    formError,
  } as const;
};

export default useForm;
