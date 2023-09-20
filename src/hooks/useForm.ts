import React, { useState } from "react";

const useForm = <T extends Record<string, string>>(initialValues: T) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof T,
  ) => {
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

  const resetForm = () => setFormValues(initialValues);

  return { registerField, formValues, resetForm };
};

export default useForm;
