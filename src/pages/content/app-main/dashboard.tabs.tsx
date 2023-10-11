import { UserAuth } from "../../../contexts/auth/auth.types.ts";

interface DashboardTabProps {
  tab: string;
  user: UserAuth;
}

function DashboardTab({ tab, user }: DashboardTabProps) {
  const Dashboard = () => {
    return (
      <div>
        <h1>Private Dashboard</h1>
        <p>Welcome {user.email}</p>
      </div>
    );
  };

  const Employers = () => {
    return (
      <div>
        <h1>Employers</h1>
      </div>
    );
  };

  const Employees = () => {
    return (
      <div>
        <h1>Employees</h1>
      </div>
    );
  };

  const Graph = () => {
    return (
      <div>
        <h1>Graph</h1>
      </div>
    );
  };

  switch (tab) {
    case "dashboard":
      return Dashboard();
    case "employers":
      return Employers();
    case "employees":
      return Employees();
    case "graph":
      return Graph();
    default:
      return Dashboard();
  }
}

export default DashboardTab;
