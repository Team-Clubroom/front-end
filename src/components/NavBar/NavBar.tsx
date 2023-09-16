// TODO add your shit back

import { Link } from "react-router-dom";

export const NavBar = () => {
  const isLoggedIn: boolean = false;

  return (
    <nav className=" bg-gray-500 w-screen flex justify-between items-center mx-auto px-8 h-20 sticky top-0 z-50 my-[-4rem]">
      <div className="inline-flex">
        <Link
          className="text-white hover:text-white cursor-pointer hover:scale-125"
          to="/"
        >
          AR Tech Tree
        </Link>
      </div>

      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <button
              className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border border-white rounded-full p-1 focus:bg-gray-700 hover:border-white hover:shadow-lg"
              type="button"
            >
              <div className="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "12px",
                    width: "12px",
                    stroke: "#FFFFFF",
                    strokeWidth: "5.33333",
                    overflow: "visible",
                  }}
                >
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          {!isLoggedIn && (
            <div className="flex mr-4 items-center">
              <Link
                className="inline-block py-2 px-3 hover:bg-gray-700 rounded-full text-white hover:text-white"
                to="/login"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  Log In
                </div>
              </Link>
              <Link
                className="inline-block py-2 px-3 hover:bg-gray-700 rounded-full text-white hover:text-white"
                to="/signup"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  Sign Up
                </div>
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="block">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "#FFFFFF",
                        strokeWidth: "3",
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "#FFFFFF",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
