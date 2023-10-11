export interface LoginFormValues extends Record<string, string> {
  email: string;
  password: string;
}

export const emptyLoginForm: LoginFormValues = {
  email: "",
  password: "",
};

export function validateLoginForm({ email, password }: LoginFormValues) {
  if (!email.trim()) {
    return "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    return "Please enter a valid email address.";
  } else if (!password) {
    return "Please enter your password.";
  } else return "";
}
