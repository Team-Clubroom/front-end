import { NavLink, useNavigate } from "react-router-dom";
import { navbarStyles } from "./navbar.styles.tsx";
import { useState } from "react";
import {
  useAuthActionContext,
  useAuthContext,
} from "../../contexts/auth/auth.context.tsx";

export const NavbarComponent = () => {
  const { logout } = useAuthActionContext();
  const currentUser = useAuthContext();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    logout();
    setTimeout(() => {
      navigate("/login");
    }, 0);
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
          {!currentUser ? (
            <div className={navbarStyles.authButtons}>
              <NavLink className={navbarStyles.authLink} to="/login">
                <div className={navbarStyles.linkText}>Log In</div>
              </NavLink>
              <NavLink className={navbarStyles.authLink} to="/signup">
                <div className={navbarStyles.linkText}>Sign Up</div>
              </NavLink>
            </div>
          ) : (
            <div className={navbarStyles.authButtons}>
              <button className={navbarStyles.authLink} onClick={handleLogout}>
                <div className={navbarStyles.linkText}>Log Out</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
