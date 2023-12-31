export const dashboardRootStyles = {
  container:
    "w-full h-full flex flex-col items-center justify-center bg-cool-gray-100",
  formContainer:
    "flex flex-col bg-gradient-to-br from-neutral-800 to-neutral-900 shadow px-8 py-8 rounded-3xl w-[36rem]",
  title: "font-normal text-xl sm:text-3xl text-gray-200",
  subtitle: "mt-4 text-xl md:text-md text-gray-800",
  form: "mt-4",
  formField: "flex flex-col flex-1",
  label: "mb-1 text-xs tracking-wide text-gray-400",
  inputContainer: "relative",
  inputIcon:
    "material-symbols-outlined pointer-events-none inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500",
  input:
    "text-sm placeholder-gray-500 pl-9 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none" +
    " focus:border-blue-400",
  inputError: "border-red-500 focus:border-red-500",
  error: "text-red-500 text-sm italic flex justify-center font-bold",
  submitButton:
    "flex mt-2 items-center justify-center gap-2 focus:outline-none text-white text-sm sm:text-base bg-cyan-600" +
    " hover:bg-cyan-700 rounded-lg py-2 px-8 transition duration-150 ease-in",
  confirmButton:
    "flex mt-2 items-center justify-center gap-2 focus:outline-none text-white text-sm sm:text-base bg-[#4BB543]" +
    " rounded-lg py-2 px-8 transition duration-150 ease-in",
  cancelButton:
    "mr-2 flex mt-2 items-center justify-center gap-2 focus:outline-none text-white text-sm sm:text-base bg-gray-500" +
    " hover:bg-gray-400 rounded-lg py-2 px-8 transition duration-150 ease-in",
  createText: "",
  loadDiv: "flex justify-center items-center",
  loading: "mr-2",
  spinner:
    "inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",
  successWrapper:
    "flex flex-col text-center items-center justify-evenly w-100 px-4",
  loginAfterSuccess: "pt-5 text-lg text-blue-500 font-semibold",
  modal:
    "flex flex-col bg-gradient-to-br from-neutral-800 to-neutral-900 border border-gray-800 shadow px-8 py-8 rounded-3xl w-50 max-w-md",
};
