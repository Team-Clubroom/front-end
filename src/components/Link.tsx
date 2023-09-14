import { useNavigate } from "react-router-dom";

type LinkProps = {
    children: React.ReactNode,
}

export const Link = (props: LinkProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (props.children == "Log In") {
            navigate('/login');
        } else if (props.children == "Sign Up") {
            navigate('/signup');
        }
    }

    return (
        <a href="" className="text-gray-700" onClick={handleClick}>{props.children}</a>
    )
}