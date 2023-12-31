import { NavLink } from "react-router-dom";
import { navbarStyles } from "./navbar.styles.tsx";
import { useAuthActionContext } from "../../contexts/auth/auth.context.tsx";
import { ProfileComponent } from "./profile/profile.component.tsx";
import LogoPath from "../../../public/logo.svg";

export const NavbarComponent = () => {
  const { isLoggedIn } = useAuthActionContext();

  return (
    <nav className={navbarStyles.navbar}>
      <div className={"flex items-center gap-1"}>
        <img className={"w-8"} src={LogoPath} alt={"celdv logo"} />
        <NavLink className={navbarStyles.logoLink} to="/">
          CELDV
        </NavLink>
      </div>
      <div className={navbarStyles.userSection}>
        <div className="flex justify-end items-center relative">
          {isLoggedIn() ? (
            <ProfileComponent />
          ) : (
            <div className={navbarStyles.authButtons}>
              <NavLink
                className={`${navbarStyles.authLink} hover:text-gray-200`}
                to="/login"
              >
                Log In
              </NavLink>
              <NavLink
                className={`${navbarStyles.authLink} bg-cyan-600 hover:bg-cyan-700`}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
