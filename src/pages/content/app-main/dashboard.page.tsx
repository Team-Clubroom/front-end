import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { dashboardStyles } from "./dashboard.page.styles.ts";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SIDE_MENU_NAV_LINKS } from "./side-menu-nav-links.ts";

function DashboardPage() {
  let title;
  const location = useLocation();
  if (location.pathname === "/dashboard") {
    title = "Dashboard - CELDV";
  } else if (location.pathname === "/dashboard/employers") {
    title = "Employers - CELDV";
  } else if (location.pathname === "/dashboard/employees") {
    title = "Employees - CELDV";
  } else if (location.pathname === "/dashboard/graph") {
    title = "Graph - CELDV";
  }

  const user = useAuthContext();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        // subtract the height of the top bar
        style={{ height: "calc(100vh - 65px)" }}
        className={dashboardStyles.view}
      >
        <div className={dashboardStyles.sidebar} id={"side-menu"}>
          <div id="profile" className={dashboardStyles.profile}>
            {/*  // TODO: Change later to be name instead of email */}
            <h2 className={dashboardStyles.profile_name}>{user.email}</h2>
            {/*  // TODO: Change later to be actual access level */}
            <p className={dashboardStyles.access_level}>Administrator</p>
          </div>
          <div id="menu" className={dashboardStyles.menu}>
            {SIDE_MENU_NAV_LINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? dashboardStyles.menuLinkHighlight
                    : dashboardStyles.menuLink
                }
                end
              >
                <span
                  className={dashboardStyles.svgLink}
                  style={{ display: "flex" }}
                >
                  {link.icon}
                </span>
                <span className="">{link.text}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className={dashboardStyles.mainContent} id={"main-content"}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
