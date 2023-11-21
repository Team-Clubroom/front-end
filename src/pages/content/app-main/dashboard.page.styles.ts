export const dashboardStyles = {
  view: "w-screen flex flex-row",
  sidenavButton:
    "p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden",
  sidebar:
    "bg-white h-full md:block shadow-xl px-3 w-60 overflow-x-hidden transition-transform duration-300 flex-shrink-0" +
    " ease-in-out",
  profile: "flex flex-col gap-2 mt-8 mb-8",
  profile_name: "font-medium text-xs md:text-sm text-center text-[#334155]",
  access_level: "text-xs text-gray-500 text-center",
  menu: "flex flex-col space-y-2",
  menuLink:
    "flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#334155] hover:text-white" +
    " hover:text-base" +
    " rounded-md transition duration-150 ease-in-out",
  menuLinkHighlight:
    "flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#334155] hover:text-white" +
    " hover:text-base" +
    " rounded-md transition duration-150 ease-in-out" +
    " bg-gray-300",
  menuLinkButton: "flex items-center w-full",
  svgLink: "w-6 h-6 fill-current mr-2",
  mainContent: "flex h-full w-full",
};
