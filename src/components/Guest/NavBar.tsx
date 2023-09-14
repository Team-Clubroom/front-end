import { Link } from "../Link"

export const NavBar = () => {
    return (
        <div className="h-16 bg-blue-100 text-black flex justify-between items-center px-4">
            <p>AR TC</p>
            <div className="flex w-96 justify-between">
                <Link>Companies</Link>
                <Link>Employees</Link>
                <Link>About</Link>
                <Link>Sign Up</Link>
                <Link>Log In</Link>
            </div>
        </div>
    )
}