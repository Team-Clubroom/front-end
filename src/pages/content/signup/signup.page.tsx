import { NavLink } from "react-router-dom";
import { signUpStyles } from "./signup.page.styles.tsx";
import { useAuthActionContext } from "../../../contexts/auth/auth.context.tsx";
import { FormEventHandler, useState } from "react";
import useForm from "../../../hooks/useForm.ts";
import { signupEmptyForm, validateSignupForm } from "./signup.helpers.ts";

function SignupPage() {
  const { register } = useAuthActionContext();
  const { registerField, formValues, resetForm } = useForm(signupEmptyForm);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();
      const error = validateSignupForm(formValues);
      setError(error);
      if (error) return;
      setIsLoading(true);
      const result = await register({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      });
      resetForm();
      // TODO: handle success case here
      console.log(result);
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={signUpStyles.container}>
      <div className={signUpStyles.formContainer}>
        <div className={signUpStyles.title}>Join us Now</div>
        <div className={signUpStyles.subtitle}>
          Enter your credentials to get access to your account
        </div>

        <div className={signUpStyles.form}>
          <form onSubmit={handleSubmit} noValidate={true}>
            <div className={signUpStyles.formField}>
              <label htmlFor="name" className={signUpStyles.label}>
                Name:
              </label>
              <div className={signUpStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${signUpStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  person
                </span>
                <input
                  id="name"
                  type="text"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your name"
                  {...registerField("name")}
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
