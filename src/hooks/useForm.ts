import React, { useState } from "react";
import {
  Validate,
  ValidationCriteria,
  ValidatorFunctions,
} from "./Validator.ts";

export interface FieldRegistration {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  error: string | null;
  required: boolean;
}

type FieldError<T> = { message: string; fieldName: keyof T | null } | null;

const useForm = <T extends Record<keyof T, string>>(
  initialValues: T,
  validationCriteria: ValidationCriteria<T>,
) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fieldError, setFieldError] = useState<FieldError<T>>(null);
  const [formError, setFormError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof T,
  ) => {
    setFieldError(null);
    setFormError("");
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  const registerField = (name: keyof T): FieldRegistration => {
    return {
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => handleChange(e, name),
      value: formValues[name],
      error: getFieldError(name),
      required:
        validationCriteria[name] &&
        (validationCriteria[name] as ValidatorFunctions<T>).some(
          (func) => func === Validate.Required,
        ),
    };
  };

  const validateFormFields = (formValues: T): FieldError<T> => {
    for (const [field, validators] of Object.entries(validationCriteria)) {
      const fieldName = field as keyof T;
      const value = formValues[fieldName];
      for (const validator of validators as ValidatorFunctions<T>) {
        const fieldErrorMessage = validator(value, formValues);
        if (fieldErrorMessage) return { message: fieldErrorMessage, fieldName };
      }
    }
    return null;
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
        const fieldError = validateFormFields(formValues);
        setFieldError(fieldError);
        if (fieldError) return;
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

  const resetForm = () => setFormValues(initialValues);

  const getFieldError = (name: keyof T) => {
    return fieldError?.fieldName === name ? fieldError.message : null;
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
