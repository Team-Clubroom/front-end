export const dashboardStyles = {
  view: "w-screen flex flex-row",
  sidenavButton:
    "p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden",
  sidebar:
    "bg-white h-full md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300" +
    " ease-in-out",
  profile: "flex flex-col gap-2 mt-8 mb-8",
  profile_name: "font-medium text-xs md:text-sm text-center text-teal-500",
  access_level: "text-xs text-gray-500 text-center",
  // searchInput:
  //   "flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500",
  menu: "flex flex-col space-y-2",
  menuLink:
    "text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out",
  mainContent: "h-screen w-full flex",
};
