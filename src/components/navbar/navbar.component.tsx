// TODO add your shit back

import { NavLink } from "react-router-dom";
import { navbarStyles } from "./navbar.styles.tsx";
import { useState } from "react";

export const NavbarComponent = () => {
  // NOTE: Change to auth check later
  const isLoggedIn: boolean = false;

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const myDivNormal: string = "#9CA3AF";
  const myDivHovered: string = "#94A3B8";
  const myDivClicked: string = "#334155";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };

  const handleInputBlur = () => {
    setIsClicked(false);
  };

  const divStyle = {
    backgroundColor: `${
      isClicked ? myDivClicked : isHovered ? myDivHovered : myDivNormal
    }`,
    transition: "background-color 0.3s",
    boxShadow: `${isHovered ? "0px 5px 5px 2px rgb(0, 0, 0, 0.1)" : ""}`,
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div className="inline-flex">
        <NavLink className={navbarStyles.logoLink} to="/">
          AR Tech Tree
        </NavLink>
      </div>
      <form className={navbarStyles.searchForm}>
        <div
          className={navbarStyles.searchContainer}
          style={divStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>

          <div className={navbarStyles.searchIconContainer}>
            <span
              className={`material-symbols-outlined ${navbarStyles.searchIcon}`}
            >
              device_hub
            </span>
            <input
              type="text"
              className={navbarStyles.searchInput}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              placeholder="Search company name..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={navbarStyles.searchButton}
          style={{ border: "none", borderRadius: "50%" }}
        >
          <span
            className={`material-symbols-outlined ${navbarStyles.searchIcon}`}
          >
            search
          </span>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div className={navbarStyles.userSection}>
        <div className="flex justify-end items-center relative">
          {!isLoggedIn && (
            <div className={navbarStyles.authButtons}>
              <NavLink className={navbarStyles.authLink} to="/login">
                <div className={navbarStyles.linkText}>Log In</div>
              </NavLink>
              <NavLink className={navbarStyles.authLink} to="/signup">
                <div className={navbarStyles.linkText}>Sign Up</div>
              </NavLink>
            </div>
          )}
          {isLoggedIn && (
            <div className={navbarStyles.loggedInSection}>
              <div className="inline relative">
                <button
                  type="button"
                  className={navbarStyles.userDropdownButton}
                >
                  <div className={navbarStyles.userDropdownIcon}>
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
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className={navbarStyles.userDropdownMenu}>
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
