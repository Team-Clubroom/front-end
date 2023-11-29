import { dashboardStyles } from "./dashboard.page.styles.ts";
import { Outlet, useLocation } from "react-router-dom";
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
        <div className={dashboardStyles.mainContent} id={"main-content"}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
