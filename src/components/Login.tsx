import { Button } from "./Button"
import { TextField } from "./TextField"

export const Login = () => {
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
            <div className="flex justify-evenly items-center">
                <Button body="Log In" />
                <Button body="Sign Up" />
            </div>
        </div>
    )
}