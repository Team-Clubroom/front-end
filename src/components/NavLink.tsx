type LinkProps = {
    children: React.ReactNode,
}

export const NavLink = (props: LinkProps) => {

    return (
        <a href="" className="text-gray-700">{props.children}</a>
    )
}