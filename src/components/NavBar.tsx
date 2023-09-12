import { Link } from "./Link"

export const NavBar = () => {
    return (
        <div className="h-16 bg-blue-100 text-black flex justify-between items-center px-4">
            <p>AR TC</p>
            <div className="flex w-64 justify-between">
                <Link>Companies</Link>
                <Link>Employees</Link>
                <Link>About</Link>
            </div>
        </div>
    )
}