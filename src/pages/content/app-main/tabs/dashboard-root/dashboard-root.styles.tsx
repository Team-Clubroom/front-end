export const dashboardRootStyles = {
  container:
    "w-full h-full flex flex-col items-center justify-center bg-cool-gray-100",
  formContainer:
    "flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-lg",
  title: "font-medium text-xl sm:text-3xl text-gray-800",
  subtitle: "mt-4 text-xl md:text-md text-gray-800",
  form: "mt-8",
  formField: "flex flex-col mb-5",
  label: "mb-1 text-xs tracking-wide text-gray-600 hidden",
  inputContainer: "relative",
  inputIcon:
    "inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400",
  input:
    "text-sm placeholder-gray-500 pl-9 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none" +
    " focus:border-blue-400",
  error: "text-red-500 text-sm italic flex justify-center font-bold",
  submitButton:
    "flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500" +
    " hover:bg-blue-600 rounded-lg py-2 px-8 transition duration-150 ease-in",
  createText: "",
  loadDiv: "flex justify-center items-center",
  loading: "mr-2",
  spinner:
    "inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",
  successWrapper:
    "flex flex-col text-center items-center justify-evenly w-100 px-4",
  loginAfterSuccess: "pt-5 text-lg text-blue-500 font-semibold",
};
