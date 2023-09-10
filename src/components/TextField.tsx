type TextFieldProps = {
    placeholder: string,
}

export const TextField = (props: TextFieldProps) => {
    return (
        <div className="flex justify-center items-center">
            <input type="text" placeholder={props.placeholder} className="w-64 h-10 border-2 rounded-md bg-white text-black focus:text-black" >

            </input>
        </div>
    )
}