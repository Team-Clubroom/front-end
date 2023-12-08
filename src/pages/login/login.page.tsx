import { loginStyles } from "./login.page.styles.tsx";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm.ts";
import {
  emptyLoginForm,
  loginFormCriteria,
  LoginFormValues,
} from "./login.helpers.ts";
import { useAuthActionContext } from "../../contexts/auth/auth.context.tsx";
import FooterComponent from "../../components/footer/footer.component.tsx";
import { Helmet } from "react-helmet";
import { MaterialIcon } from "../../utils/icons.ts";
import { InputComponent } from "../../components/form/input/input.component.tsx";
import { RequestButtonComponent } from "../../components/request-button/request-button.component.tsx";
import { dashboardRootStyles } from "../../sharedStyles/dashboard-root.styles.tsx";

function LoginPage() {
  const { registerField, onSubmit, formError, isLoading } = useForm(
    emptyLoginForm,
    loginFormCriteria,
  );
  const { login, isLoggedIn } = useAuthActionContext();
  const navigate = useNavigate();

  // if the user is logged in, don't let them access this page
  if (isLoggedIn()) {
    return <Navigate to={"/employers"} />;
  }

  const handleSubmit = async (formValues: LoginFormValues) => {
    await login(formValues);
    setTimeout(() => {
      navigate("/employers");
    }, 0);
  };

  return (
    <>
      <Helmet>
        <title>Log In - CELDV</title>
      </Helmet>
      <div className={loginStyles.container}>
        <div className={dashboardRootStyles.modal}>
          <div className={loginStyles.title}>Welcome Back</div>
          <div className={loginStyles.subtitle}>
            Enter your credentials to access your account
          </div>

          <form
            noValidate={true}
            onSubmit={onSubmit(handleSubmit)}
            className={"flex flex-col gap-2"}
          >
            <InputComponent
              fieldRegistration={registerField("email")}
              iconName={MaterialIcon.Mail}
              placeholder={"johndoe@email.com"}
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
              label={"Enter Your Password"}
              type="password"
            />

            <span className={loginStyles.error}>{formError}</span>
            <div className="flex w-full justify-center">
              <RequestButtonComponent
                isLoading={isLoading}
                icon={MaterialIcon.Login}
                loadingText={"Signing in"}
              >
                Login
              </RequestButtonComponent>
            </div>
          </form>

          <div className="flex justify-center items-center mt-6">
            <NavLink to={"/signup"} className={loginStyles.formLink}>
              <div className={loginStyles.linkText}>
                You don't have an account?
                <span className={loginStyles.linkUrl}>Sign up now</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default LoginPage;
