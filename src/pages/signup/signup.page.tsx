import { NavLink } from "react-router-dom";
import { signUpStyles } from "./signup.page.styles.tsx";
import { useAuthActionContext } from "../../contexts/auth/auth.context.tsx";
import useForm from "../../hooks/useForm.ts";
import FooterComponent from "../../components/footer/footer.component.tsx";
import {
  signupEmptyForm,
  SignupFormValues,
  signupValidationCriteria,
} from "./signup.helpers.ts";
import { Helmet } from "react-helmet";
import { InputComponent } from "../../components/form/input/input.component.tsx";
import { MaterialIcon } from "../../utils/icons.ts";
import { LoadButtonComponent } from "../../components/load-button/load-button.component.tsx";

function SignupPage() {
  const { register } = useAuthActionContext();
  const { registerField, onSubmit, isLoading, formError, success } = useForm(
    signupEmptyForm,
    signupValidationCriteria,
  );

  const handleSubmit = async (formValues: SignupFormValues) => {
    await register({
      user_first_name: formValues.firstName,
      user_last_name: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    });
  };

  const RegistrationForm = () => {
    return (
      <>
        <div className={signUpStyles.title}>Join us Now</div>
        <div className={signUpStyles.subtitle}>
          Enter your credentials to get access to your account
        </div>

        <div className={signUpStyles.form}>
          <form
            onSubmit={onSubmit(handleSubmit)}
            noValidate={true}
            className={"flex flex-col gap-2"}
          >
            <div className="flex justify-center">
              <InputComponent
                fieldRegistration={registerField("firstName")}
                iconName={MaterialIcon.Person}
                placeholder={"John"}
                id={"first_name"}
                label={"Enter Your First Name"}
              />

              <InputComponent
                fieldRegistration={registerField("lastName")}
                iconName={MaterialIcon.Person}
                placeholder={"Doe"}
                id={"last_name"}
                label={"Enter Your Last Name"}
              />
            </div>

            <InputComponent
              fieldRegistration={registerField("email")}
              iconName={MaterialIcon.Mail}
              placeholder={"johndoe@example.com"}
              id={"email"}
              label={"Enter Your E-Mail Address"}
            />

            <InputComponent
              fieldRegistration={registerField("password")}
              iconName={MaterialIcon.Lock}
              placeholder={
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022"
              }
              id={"password"}
              label={"Enter a Password"}
              type="password"
            />

            <InputComponent
              fieldRegistration={registerField("passwordRepeat")}
              iconName={MaterialIcon.Lock}
              placeholder={
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022" +
                "\u2022"
              }
              id={"password-repeat"}
              label={"Repeat the Password"}
              type="password"
            />

            <span className={signUpStyles.error}>{formError}</span>
            <div className="flex w-full justify-center">
              <LoadButtonComponent
                isLoading={isLoading}
                loadingText={"Registering"}
                icon={MaterialIcon.Start}
              >
                Sign up
              </LoadButtonComponent>
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
      </>
    );
  };

  const SuccessPopup = () => {
    return (
      <div className={signUpStyles.successWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#4BB543"
          className="w-24 h-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className={signUpStyles.title}>Registration Successful</div>
        <div style={{ color: "grey", marginTop: "0.5rem" }}>
          Please check your email to verify your account
        </div>
        <NavLink to="/login" className={signUpStyles.loginAfterSuccess}>
          Log In
        </NavLink>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - CELDV</title>
      </Helmet>
      <div className={signUpStyles.container}>
        <div className={signUpStyles.formContainer}>
          {success ? SuccessPopup() : RegistrationForm()}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default SignupPage;
