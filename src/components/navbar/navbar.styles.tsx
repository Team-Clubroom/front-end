export const navbarStyles = {
    navbar:
        "bg-gray-500 w-screen flex justify-between items-center mx-auto px-8 h-[85px] sticky top-0 z-50",
    logoLink:
        "text-white hover:text-white cursor-pointer hover:scale-125",
    searchForm: "hidden sm:flex flex-shrink flex-grow-0 justify-start px-2 w-[25rem]",
    searchContainer:
        "flex items-center flex-grow-0 flex-shrink pl-2 relative w-full border border-white gap-4 rounded-full p-1",
    searchInput: 'bg-transparent focus:outline-none text-white w-full placeholder:text-[rgba(255,255,255,0.75)]' +
        ' focus:placeholder:text-[rgba(255,255,255,0.50)]',
    searchIconContainer:
        "flex items-center justify-center relative h-full w-full pr-4 gap-2 rounded-full",
    searchIcon: 'text-white',
    searchButton: 'py-2.5 px-3 ml-2 text-sm h-12 font-medium text-white rounded-lg border before:border-[none]' +
        ' hover:bg-gray-700 focus:outline-none',
    userSection: "flex-initial",
    authButtons: "flex mr-4 items-center gap-2",
    authLink:
        "inline-block py-2.5 px-3.5 h-12 hover:bg-gray-700 rounded-full text-white hover:text-white",
    linkText: 'flex items-center relative cursor-pointer whitespace-nowrap',
    loggedInSection: "block",
    userDropdownButton:
        "inline-flex items-center relative px-2 border rounded-full hover:shadow-lg",
    userDropdownIcon:
        "pl-1",
    userDropdownMenu:
        "block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5",
}
