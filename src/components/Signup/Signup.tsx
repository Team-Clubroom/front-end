import { Link } from "react-router-dom"
import { styles } from "./Signup.styles"

export const Signup = () => {
    return (
        <form className={styles.loginCardStyle}>
            <div className={styles.companyHeaderStyle}>
                AR Tech Connections
            </div>
            {/* TODO style */}
            <input type="email" placeholder="Email..." required className={styles.inputFieldStyle}/>
            <input type="password" placeholder="Password..." required className={styles.inputFieldStyle}/>
            <input type="password" placeholder="Confirm Password..." required className={styles.inputFieldStyle}/>
            <div className={styles.formButtonsWrapperStyle}>
                {/* Delete custom button component and replace with HTML Button */}
                <Link to="/login" className="w-full"><button className={styles.formButtonStyle}>Log In</button></Link>
                <button type="submit" className={styles.formButtonStyle}>Sign Up</button>
            </div>
        </form>
    )
}