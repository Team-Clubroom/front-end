import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { dashboardPageStrings } from "./dashboard.page.styles.tsx";

function DashboardPage() {
  const user = useAuthContext();
  return (
    // <div className={dashboardPageStrings.app_main}>
    <div className={dashboardPageStrings.view}>
      <button className={dashboardPageStrings.sidenavButton}>
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path for the sidenav button */}
        </svg>
      </button>
      <div className={dashboardPageStrings.sidebar}>
        {/* Sidebar content */}
      </div>
      <div className={dashboardPageStrings.mainContent}>
        {/* Main content */}
        <h1>Private dashboard</h1>
        <p>Welcome {user.email}</p>
      </div>
    </div>
    // </div>
  );
}

export default DashboardPage;

/*
 *
 * <div>
 *   <h1>Private dashboard</h1>
 *   <p>Welcome {user.email}</p>
 * </div>
 *
 * */
