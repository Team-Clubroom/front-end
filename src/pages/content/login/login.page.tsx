import { loginStyles } from "./login.page.styles.tsx";
import { NavLink, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm.ts";
import { emptyLoginForm, validateLoginForm } from "./login.helpers.ts";
import React, { useState } from "react";
import { useAuthActionContext } from "../../../contexts/auth/auth.context.tsx";

function LoginPage() {
  const { registerField, resetForm, formValues } = useForm(emptyLoginForm);
  const [error, setError] = useState("");
  const { login } = useAuthActionContext();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler = async (e) => {
    try {
      e.preventDefault();
      const error = validateLoginForm(formValues);
      setError(error);
      if (error) return;
      await login(formValues);
      resetForm();
      setTimeout(() => {
        navigate("/dashboard");
      }, 0);
    } catch (e) {
      setError((e as Error).message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.formContainer}>
        <div className={loginStyles.title}>Welcome Back</div>
        <div className={loginStyles.subtitle}>
          Enter your credentials to access your account
        </div>

        <div className={loginStyles.form}>
          <form noValidate={true} onSubmit={handleSubmit}>
            <div className={loginStyles.formField}>
              <label htmlFor="email" className={loginStyles.label}>
                E-Mail Address:
              </label>
              <div className={loginStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${loginStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  className={loginStyles.input}
                  placeholder="Enter your email"
                  {...registerField("email")}
                />
              </div>
            </div>
            <div className={loginStyles.formField}>
              <label htmlFor="password" className={loginStyles.label}>
                Password:
              </label>
              <div className={loginStyles.inputContainer}>
                <span
                  className={`material-symbols-outlined ${loginStyles.inputIcon}`}
                  style={{ display: "flex" }}
                >
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  className={loginStyles.input}
                  placeholder="Enter your password"
                  {...registerField("password")}
                />
              </div>
            </div>
            <span>{error}</span>
            <div className="flex w-full">
              <button type="submit" className={loginStyles.submitButton}>
                {isLoading ? (
                  //  TODO: add spinner here
                  <span>Loading...</span>
                ) : (
                  <>
                    <span className={loginStyles.signInText}>Sign In</span>
                    <span
                      className={`material-symbols-outlined ${loginStyles.signInIcon}`}
                    >
                      login
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <NavLink to={"/signup"} className={loginStyles.registerLink}>
            <div className={loginStyles.registerLinkText}>
              You don't have an account?
              <span className={loginStyles.registerLinkTextBlue}>
                Sign up now
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
