import { NavLink } from "react-router-dom";
import { navbarStyles } from "./navbar.styles.tsx";
import { useAuthActionContext } from "../../contexts/auth/auth.context.tsx";
import { ProfileComponent } from "./profile/profile.component.tsx";

export const NavbarComponent = () => {
  const { isLoggedIn } = useAuthActionContext();

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
            <ProfileComponent />
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
