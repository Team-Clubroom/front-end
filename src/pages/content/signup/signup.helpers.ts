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

export function validateSignupForm(formValues: SignupFormValues): string {
  const { firstName, lastName, email, password, passwordRepeat } = formValues;

  if (!firstName.trim()) {
    return "Please enter your first name.";
  }

  if (!lastName.trim()) {
    return "Please enter your last name.";
  }

  if (!email.trim()) {
    return "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!password) {
    return "Please enter a password.";
  } else if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  if (!passwordRepeat) {
    return "Please repeat your password.";
  } else if (password !== passwordRepeat) {
    return "Passwords do not match.";
  }

  return "";
}
