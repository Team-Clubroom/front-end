import {Navigate, NavLink} from "react-router-dom"
import {signUpStyles} from "./signup.page.styles.tsx";

function SignupPage() {
    // TODO: Replace with actual auth state
    const isLoggedIn = false;

    if (isLoggedIn) {
        return <Navigate to="/appmain"/>;
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
                                <div className={signUpStyles.inputIcon}>
                                    <i className="fas fa-user text-blue-500"></i>
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
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
                                <div className={signUpStyles.inputIcon}>
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
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
                                <div className={signUpStyles.inputIcon}>
                <span>
                  <i className="fas fa-lock text-blue-500"></i>
                </span>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
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
                                <div className={signUpStyles.inputIcon}>
                                    <span>
                                      <i className="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>
                                <input
                                    id="password-verify"
                                    type="password"
                                    name="password-verify"
                                    className={signUpStyles.input}
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" className={signUpStyles.submitButton}>
                                <span className={signUpStyles.signUpText}>Sign Up</span>
                                <span>
                                <svg
                                    className={signUpStyles.signUpIcon}
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
                    <NavLink to={'/login'} className={signUpStyles.loginLink}>
                        <div className={signUpStyles.loginLinkText}>
                            Already have an account?
                            <span className={signUpStyles.loginLinkTextBlue}>
                              Login here
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;