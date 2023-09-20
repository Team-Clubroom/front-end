import {loginStyles} from "./login.page.styles.tsx";
import {Navigate, NavLink} from "react-router-dom";

function LoginPage() {
    // TODO: Replace with actual auth state
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <Navigate to="/appmain"/>;
    }

    // TODO: Determine why icon isn't showing up

    return (
        <div className={loginStyles.container}>
            <div className={loginStyles.formContainer}>
                <div className={loginStyles.title}>Welcome Back</div>
                <div className={loginStyles.subtitle}>
                    Enter your credentials to access your account
                </div>

                <div className={loginStyles.form}>
                    <form action="#">
                        <div className={loginStyles.formField}>
                            <label htmlFor="email" className={loginStyles.label}>
                                E-Mail Address:
                            </label>
                            <div className={loginStyles.inputContainer}>
                                <div className={loginStyles.inputIcon}>
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className={loginStyles.input}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className={loginStyles.formField}>
                            <label htmlFor="password" className={loginStyles.label}>
                                Password:
                            </label>
                            <div className={loginStyles.inputContainer}>
                                <div className={loginStyles.inputIcon}>
                                  <span>
                                    <i className="fas fa-lock text-blue-500"></i>
                                  </span>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    className={loginStyles.input}
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" className={loginStyles.submitButton}>
                                <span className={loginStyles.signInText}>Sign In</span>
                                <span>
                                  <svg
                                      className={loginStyles.signInIcon}
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                  >
                                    <path
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <NavLink to={'/signup'} className={loginStyles.registerLink}>
                        <div className={loginStyles.registerLinkText}>
                            You don't have an account?
                            <span className={loginStyles.registerLinkTextBlue}>
                              Sign Up now
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;

