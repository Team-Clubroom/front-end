type ButtonProps = {
    children: React.ReactNode,
}

export const Button = (props: ButtonProps) => {
    return (
        <div className="border-2 rounded-md w-24 h-10 my-4 flex justify-center items-center bg-gray-800 select-none">
            <p className="text-lg">
                {props.children}
            </p>
        </div>
    )
}