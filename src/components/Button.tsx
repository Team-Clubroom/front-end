import { useLocation, useNavigate } from 'react-router-dom';

type ButtonProps = {
    children: React.ReactNode,
}

export const Button = (props: ButtonProps) => {
    let location = useLocation().pathname;
    const navigate = useNavigate();

    const handleClick = (button: React.ReactNode) => {
        if (location == "/signup" && button == "Log In") {
            navigate('/login');
        } else if (location == "/login" && button == "Sign Up") {
            navigate('/signup');
        }
    }

    return (
        <div className="border-2 rounded-md w-24 h-10 my-4 flex justify-center items-center bg-gray-800 select-none" onClick={() => handleClick(props.children)}>
            <p className="text-lg">
                {props.children}
            </p>
        </div>
    )
}