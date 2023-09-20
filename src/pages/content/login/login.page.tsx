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
                                <span className={`material-symbols-outlined ${loginStyles.inputIcon}`}
                                      style={{display: 'flex'}}>
                                    mail
                                </span>
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
                                <span className={`material-symbols-outlined ${loginStyles.inputIcon}`}
                                      style={{display: 'flex'}}>
                                    lock
                                </span>
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
                                <span className={`material-symbols-outlined ${loginStyles.signInIcon}`}>
                                    login
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

