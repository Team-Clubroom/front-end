import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { dashboardStyles } from "./dashboard.page.styles.tsx";

function DashboardPage() {
  const user = useAuthContext();
  return (
    <div className={dashboardStyles.view}>
      <div className={dashboardStyles.sidebar}>
        <div id="profile" className={dashboardStyles.profile}>
          {/*  // TODO: Change later to be name instead of email */}
          <h2 className={dashboardStyles.profile_name}>{user.email}</h2>
          {/*  // TODO: Change later to be actual access level */}
          <p className={dashboardStyles.access_level}>Administrator</p>
        </div>
        <div id="menu" className={dashboardStyles.menu}>
          <a href="" className={dashboardStyles.menuLink}>
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              dashboard
            </span>
            <span className="">Dashboard</span>
          </a>
          <a href="" className={dashboardStyles.menuLink}>
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              apartment
            </span>
            <span className="">Employers</span>
          </a>
          <a href="" className={dashboardStyles.menuLink}>
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              badge
            </span>
            <span className="">Employees</span>
          </a>
        </div>
      </div>
      <div className={dashboardStyles.mainContent}>
        {/*  // TODO: ------------------- PUT MAIN CONTENT HERE -------------------  */}
        <div>
          <h1>Private dashboard</h1>
          <p>Welcome {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

// // NOTE: Extra links if more are needed.
//          <a href="" className={dashboardStyles.menuLink}>
//            <span
//              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
//              style={{ display: "flex" }}
//            >
//              dashboard
//            </span>
//            <span className="">Messages</span>
//          </a>
//          <a href="" className={dashboardStyles.menuLink}>
//            <span
//              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
//              style={{ display: "flex" }}
//            >
//              dashboard
//            </span>
//            <span className="">Calendar</span>
//          </a>
//          <a href="" className={dashboardStyles.menuLink}>
//            <span
//              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
//              style={{ display: "flex" }}
//            >
//              dashboard
//            </span>
//            <span className="">Table</span>
//          </a>
//          <a href="" className={dashboardStyles.menuLink}>
//            <span
//              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
//              style={{ display: "flex" }}
//            >
//              dashboard
//            </span>
//            <span className="">UI Components</span>
//          </a>
//          <a href="" className={dashboardStyles.menuLink}>
//            <span
//              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
//              style={{ display: "flex" }}
//            >
//              dashboard
//            </span>
//            <span className="">Users</span>
//          </a>
