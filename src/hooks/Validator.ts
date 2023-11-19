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
}

export type ValidatorFunctions = Array<(input: string) => string>;
export type ValidationCriteria<T> = Partial<
  Record<keyof T, ValidatorFunctions>
>;
