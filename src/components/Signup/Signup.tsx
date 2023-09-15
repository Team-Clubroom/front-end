import { Link } from "react-router-dom"

export const Signup = () => {
    return (
        <form className="bg-red-500 w-96 h-auto">
            <div className="mt-4 flex justify-center items-center">
                <p className="text-3xl text-black">
                    AR Tech Connections
                </p>
            </div>
            <input type="email" placeholder="Email..."/>
            <input type="password" placeholder="Password..."/>
            <input type="password" placeholder="Confirm Password..."/>
            <div className="flex justify-evenly items-center">
                <Link to="../login"><button>Log In</button></Link>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}