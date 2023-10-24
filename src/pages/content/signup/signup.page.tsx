import { NavLink } from "react-router-dom";
import { signUpStyles } from "./signup.page.styles.tsx";
import { useAuthActionContext } from "../../../contexts/auth/auth.context.tsx";
import useForm from "../../../hooks/useForm.ts";
import {
  signupEmptyForm,
  SignupFormValues,
  validateSignupForm,
} from "./signup.helpers.ts";
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Sign Up - CELDV</title>
      </Helmet>
      <div className={signUpStyles.container}>
        <div className={signUpStyles.formContainer}>
          <div className={signUpStyles.title}>Join us Now</div>
          <div className={signUpStyles.subtitle}>
            Enter your credentials to get access to your account
          </div>

          <div className={signUpStyles.form}>
            <form onSubmit={onSubmit(handleSubmit)} noValidate={true}>
              <div className="flex justify-center items-center">
                <div className={signUpStyles.formField + " pr-1"}>
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
                <div className={signUpStyles.formField + " pl-1"}>
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
              <span className={signUpStyles.error}>{error}</span>
              <div className="flex w-full">
                <button type="submit" className={signUpStyles.submitButton}>
                  {isLoading ? (
                    // TODO: add spinner here
                    <div className={signUpStyles.loadDiv}>
                      <span className={signUpStyles.loading}>Registering</span>
                      <svg aria-hidden="true" className={signUpStyles.spinner} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    </div>
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
    </>
  );
}

export default SignupPage;
