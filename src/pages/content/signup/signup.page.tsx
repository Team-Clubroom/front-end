import { NavLink } from "react-router-dom";
import { signUpStyles } from "./signup.page.styles.tsx";
import { useAuthActionContext } from "../../../contexts/auth/auth.context.tsx";
import useForm from "../../../hooks/useForm.ts";
import {
  signupEmptyForm,
  SignupFormValues,
  validateSignupForm,
} from "./signup.helpers.ts";

function SignupPage() {
  const { register } = useAuthActionContext();
  const { registerField, onSubmit, isLoading, error } = useForm(
    signupEmptyForm,
    validateSignupForm,
  );

  const handleSubmit = async (formValues: SignupFormValues) => {
    const result = await register({
      user_first_name: formValues.firstName,
      user_last_name: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    });
    // TODO: handle success case
    console.log(result);
  };

  return (
    <div className={signUpStyles.container}>
      <div className={signUpStyles.formContainer}>
        <div className={signUpStyles.title}>Join us Now</div>
        <div className={signUpStyles.subtitle}>
          Enter your credentials to get access to your account
        </div>

        <div className={signUpStyles.form}>
          <form onSubmit={onSubmit(handleSubmit)} noValidate={true}>
            <div className={signUpStyles.formField}>
              <label htmlFor="first_name" className={signUpStyles.label}>
                First name:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  person
                </span>
                <input
                  id="first_name"
                  type="text"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your first name"
                  {...registerField("firstName")}
                />
              </div>
            </div>
            <div className={signUpStyles.formField}>
              <label htmlFor="last_name" className={signUpStyles.label}>
                Last name:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  person
                </span>
                <input
                  id="last_name"
                  type="text"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your last name"
                  {...registerField("lastName")}
                />
              </div>
            </div>
            <div className={signUpStyles.formField}>
              <label htmlFor="email" className={signUpStyles.label}>
                E-Mail Address:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your email"
                  {...registerField("email")}
                />
              </div>
            </div>
            <div className={signUpStyles.formField}>
              <label htmlFor="password" className={signUpStyles.label}>
                Enter Password:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your password"
                  {...registerField("password")}
                />
              </div>
            </div>
            <div className={signUpStyles.formField}>
              <label htmlFor="password" className={signUpStyles.label}>
                Re-Enter Password:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  lock
                </span>
                <input
                  id="password-repeat"
                  type="password"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your password"
                  {...registerField("passwordRepeat")}
                />
              </div>
            </div>
            {/* TODO: style error message here */}
            <span>{error}</span>
            <div className="flex w-full">
              <button type="submit" className={signUpStyles.submitButton}>
                {isLoading ? (
                  // TODO: add spinner here
                  <span>Loading...</span>
                ) : (
                  <>
                    <span className={signUpStyles.signUpText}>Sign Up</span>
                    <span
                      className={`material-symbols-outlined ${signUpStyles.signUpIcon}`}
                    >
                      start
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <NavLink to={"/login"} className={signUpStyles.loginLink}>
            <div className={signUpStyles.loginLinkText}>
              Already have an account?
              <span className={signUpStyles.loginLinkTextBlue}>Login here</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
