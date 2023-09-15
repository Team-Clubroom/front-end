import { styles } from "./Login.styles"
import { Link } from "react-router-dom"

// TODO refactor whole thing as form

export const Login = () => {
    return (
        <form className={styles.loginCardStyle}>
            <div className={styles.companyHeaderStyle}>
                AR Tech Connections
            </div>
            {/* TODO style */}
            <input type="email" placeholder="Email..." required className={styles.inputFieldStyle}/>
            <input type="password" placeholder="Password..." required className={styles.inputFieldStyle}/>
            <div className={styles.formButtonsWrapperStyle}>
                {/* Delete custom button component and replace with HTML Button */}
                <Link to="/signup" className="w-full"><button className={styles.formButtonStyle}>Sign Up</button></Link>
                <button type="submit" className={styles.formButtonStyle}>Log In</button>
            </div>
        </form>
    )
}