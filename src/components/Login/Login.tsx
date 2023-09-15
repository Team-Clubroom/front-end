import { loginCardStyle } from "./Login.styles"
import { Link } from "react-router-dom"

// TODO refactor whole thing as form

export const Login = () => {
    return (
        <form className={loginCardStyle}>
            <div className="mt-4 flex justify-center items-center">
                <p className="text-3xl text-black">
                    AR Tech Connections
                </p>
            </div>
            {/* TODO style */}
            <input type="email" placeholder="Email..."></input>
            <input type="password" placeholder="Password..."></input>
            <div className="flex justify-evenly items-center">
                {/* Delete custom button component and replace with HTML Button */}
                <Link to="../signup"><button>Sign Up</button></Link>
                <button type="submit">Log In</button>
            </div>
        </form>
    )
}