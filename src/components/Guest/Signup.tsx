import { Button } from "../Button"
import { TextField } from "../TextField"

export const Signup = () => {
    return (
        <div className="bg-red-500 w-96 h-auto">
            <div className="mt-4 flex justify-center items-center">
                <p className="text-3xl text-black">
                    AR Tech Connections
                </p>
            </div>
            <div className="mt-4">
                <TextField placeholder="Email..." />
            </div>
            <div className="mt-4">
                <TextField placeholder="Password..." />
            </div>
            <div className="mt-4">
                <TextField placeholder="Confirm Password..." />
            </div>
            <div className="flex justify-evenly items-center">
                <Button>Log In</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    )
}