export const navbarStyles = {
  navbar:
    "bg-cyan-900 w-screen flex justify-between items-center mx-auto px-4 h-[65px] sticky top-0 z-50 shrink-0",
  logoLink: "text-white font-bold hover:text-white cursor-pointer",
  searchForm:
    "hidden sm:flex flex-shrink flex-grow-0 justify-start px-2 w-[25rem]",
  searchContainer:
    "flex items-center flex-grow-0 flex-shrink pl-2 relative w-full border border-white gap-4 rounded-full p-1",
  searchInput:
    "bg-transparent focus:outline-none text-white w-full placeholder:text-[rgba(255,255,255,0.75)]" +
    " focus:placeholder:text-[rgba(255,255,255,0.50)]",
  searchIconContainer:
    "flex items-center justify-center relative h-full w-full pr-4 gap-2 rounded-full",
  searchIcon: "text-white",
  searchButton:
    "py-2.5 px-3 ml-2 text-sm h-12 font-medium text-white rounded-lg border before:border-[none]" +
    " hover:bg-gray-700 focus:outline-none",
  userSection: "flex-initial",
  authButtons: "flex items-center",
  authLink: "py-2 px-4 rounded-full text-white transition-colors",
  loggedInSection: "block",
  userDropdownButton:
    "inline-flex items-center relative px-2 border rounded-full hover:shadow-lg",
  userDropdownIcon: "pl-1",
  userDropdownMenu: "block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5",
};
