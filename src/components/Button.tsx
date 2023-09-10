type ButtonProps = {
    body: string
}

export const Button = (props: ButtonProps) => {
    return (
        <div className="border-2 rounded-md w-24 h-10 my-4 flex justify-center items-center bg-gray-800">
            <p className="text-lg">
                {props.body}
            </p>
        </div>
    )
}