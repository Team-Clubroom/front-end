export class Validate {
  // Static method to validate if a string is not empty
  static Required(input: string): string {
    return input.trim() === "" ? "Field cannot be empty" : "";
  }

  // Static method to validate if a string is a valid email address
  static Email(input: string): string {
    // A basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input) ? "" : "Invalid email address";
  }

  // Static method to validate if a ZIP code is valid
  static ZipCode(input: string): string {
    const zipCodeRegex = /^\d{5,}$/;
    return zipCodeRegex.test(input) ? "" : "Invalid ZIP code";
  }

  static AreSame<T>(name1: keyof T, name2: keyof T) {
    return (_: string, formValues: T) =>
      formValues[name1] === formValues[name2] ? "" : "Fields must be identical";
  }

  static Min(minLength: number) {
    return (input: string) =>
      input.trim().length < minLength ? `Field must be ${minLength} long` : "";
  }
}

export type ValidatorFunctions<T> = Array<
  (input: string, formValues: T) => string
>;
export type ValidationCriteria<T> = Partial<
  Record<keyof T, ValidatorFunctions<T>>
>;
