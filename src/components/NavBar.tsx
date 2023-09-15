import { Link } from "react-router-dom";

export const NavBar = () => {

    const isLoggedIn: boolean = false;

    return (
        <div className="h-16 bg-blue-100 text-black flex justify-between items-center px-4">
            <p>AR TC</p>
            <div className="flex w-96 justify-between">
                <Link to="" className="text-gray-700">Companies</Link>
                <Link to="" className="text-gray-700">Employees</Link>
                <Link to="" className="text-gray-700">About</Link>
                {!isLoggedIn && <>
                    <Link to="signup" className="text-gray-700">Sign Up</Link>
                    <Link to="login" className="text-gray-700">Log In</Link>
                </>}
                {isLoggedIn && <>
                    <Link to="" className="text-gray-700">Log Out</Link>
                </>}
            </div>
        </div>
    )
}