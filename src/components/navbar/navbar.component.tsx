import { NavLink } from "react-router-dom";
import { navbarStyles } from "./navbar.styles.tsx";
import {
  useAuthActionContext,
  useAuthContext,
} from "../../contexts/auth/auth.context.tsx";
import SearchBoxComponent from "../search-box/search-box.component.tsx";

export const NavbarComponent = () => {
  const { logout, isLoggedIn } = useAuthActionContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div className="inline-flex">
        <NavLink className={navbarStyles.logoLink} to="/">
          CELDV
        </NavLink>
      </div>
      <div className={navbarStyles.userSection}>
        <div className="flex justify-end items-center relative">
          {isLoggedIn() ? (
            <div className={navbarStyles.authButtons}>
              <button className={navbarStyles.authLink} onClick={handleLogout}>
                <div className={navbarStyles.linkText}>Log Out</div>
              </button>
            </div>
          ) : (
            <div className={navbarStyles.authButtons}>
              <NavLink className={navbarStyles.authLink} to="/login">
                <div className={navbarStyles.linkText}>Log In</div>
              </NavLink>
              <NavLink className={navbarStyles.authLink} to="/signup">
                <div className={navbarStyles.linkText}>Sign Up</div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
