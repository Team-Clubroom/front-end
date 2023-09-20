import { Navigate, NavLink } from "react-router-dom";
import { signUpStyles } from "./signup.page.styles.tsx";

function SignupPage() {
  // TODO: Replace with actual auth state
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to="/appmain" />;
  }

  return (
    <div className={signUpStyles.container}>
      <div className={signUpStyles.formContainer}>
        <div className={signUpStyles.title}>Join us Now</div>
        <div className={signUpStyles.subtitle}>
          Enter your credentials to get access to your account
        </div>

        <div className={signUpStyles.form}>
          <form action="#">
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
                  name="name"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your name"
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
                  name="email"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your email"
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
                  name="password"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your password"
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
                  id="password-verify"
                  type="password"
                  name="password-verify"
                  required
                  className={signUpStyles.input}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button type="submit" className={signUpStyles.submitButton}>
                <span className={signUpStyles.signUpText}>Sign Up</span>
                <span
                  className={`material-symbols-outlined ${signUpStyles.signUpIcon}`}
                >
                  start
                </span>
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