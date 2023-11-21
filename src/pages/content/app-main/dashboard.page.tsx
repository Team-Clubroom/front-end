import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { dashboardStyles } from "./dashboard.page.styles.ts";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            <NavLink to={"/dashboard"} className={dashboardStyles.menuLink}>
              <span
                className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
                style={{ display: "flex" }}
              >
                dashboard
              </span>
              <span className="">Dashboard</span>
            </NavLink>
            <NavLink
              to={"/dashboard/employers"}
              className={dashboardStyles.menuLink}
            >
              <span
                className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
                style={{ display: "flex" }}
              >
                apartment
              </span>
              <span className="">Employers</span>
            </NavLink>
            <NavLink
              to={"/dashboard/employees"}
              className={dashboardStyles.menuLink}
            >
              <span
                className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
                style={{ display: "flex" }}
              >
                badge
              </span>
              <span className="">Employees</span>
            </NavLink>
            <NavLink
              to={"/dashboard/graph"}
              className={dashboardStyles.menuLink}
            >
              <span
                className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
                style={{ display: "flex" }}
              >
                account_tree
              </span>
              <span className="">Graph</span>
            </NavLink>
            <NavLink
              to={"/dashboard/react-flow"}
              className={dashboardStyles.menuLink}
            >
              <span
                className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
                style={{ display: "flex" }}
              >
                account_tree
              </span>
              <span className="">React Flow</span>
            </NavLink>
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
