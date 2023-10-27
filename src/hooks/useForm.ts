import React, { useState } from "react";

const useForm = <T extends Record<keyof T, string>>(
  initialValues: T,
  validateForm: (formValues: T) => string,
) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof T,
  ) => {
    setError("");
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  const registerField = (name: keyof T) => {
    return {
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => handleChange(e, name),
      value: formValues[name],
    };
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
        const errorMessage = validateForm(formValues);
        setError(errorMessage);
        if (errorMessage) return;
        setIsLoading(true);
        await callback(formValues);
        setSuccess(true);
        resetForm();
      } catch (e) {
        console.log(e);
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

  const resetForm = () => setFormValues(initialValues);

  return {
    registerField,
    formValues,
    resetForm,
    isLoading,
    onSubmit,
    error,
    success,
  } as const;
};

export default useForm;
