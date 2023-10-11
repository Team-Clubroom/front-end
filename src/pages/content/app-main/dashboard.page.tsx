import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { useState } from "react";
import { dashboardStyles } from "./dashboard.page.styles.tsx";
import DashboardTab from "./dashboard.tabs.tsx";

function DashboardPage() {
  const user = useAuthContext();
  const [tab, setTab] = useState("dashboard");

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };
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
          <button
            className={dashboardStyles.menuLink}
            onClick={() => {
              handleTabChange("dashboard");
            }}
          >
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              dashboard
            </span>
            <span className="">Dashboard</span>
          </button>
          <button
            className={dashboardStyles.menuLink}
            onClick={() => {
              handleTabChange("employers");
            }}
          >
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              apartment
            </span>
            <span className="">Employers</span>
          </button>
          <button
            className={dashboardStyles.menuLink}
            onClick={() => {
              handleTabChange("employees");
            }}
          >
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              badge
            </span>
            <span className="">Employees</span>
          </button>
          <button
            className={dashboardStyles.menuLink}
            onClick={() => {
              handleTabChange("graph");
            }}
          >
            <span
              className={`material-symbols-outlined ${dashboardStyles.svgLink}`}
              style={{ display: "flex" }}
            >
              account_tree
            </span>
            <span className="">Graph</span>
          </button>
        </div>
      </div>
      <div className={dashboardStyles.mainContent}>
        <DashboardTab tab={tab} user={user} />
      </div>
    </div>
  );
}

export default DashboardPage;
