import { UserAuth } from "../../../contexts/auth/auth.types";
import TreeComponent from "../../../components/tree/tree.component";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { useEffect, useState } from "react";
import { Employer } from "../../../models/employer.types";
import { ApiRoutes, customFetch } from "../../../utils/custom-fetch";

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

  // TODO: Currently this is not working, need to fix (401 error - Unauthorized)
  const Employers = () => {
    const [employers, setEmployers] = useState<Employer[]>([]);
    useEffect(() => {
      const fetchEmployees = async () => {
        const response = await customFetch<Employer[]>(
          ApiRoutes.Employers,
          "GET",
        );
        return response.data;
      };

      fetchEmployees()
        .then((employers) => {
          setEmployers(employers);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);

    return (
      <div>
        <span>Employers:</span>
        {employers.map((employer) => {
          return <div key={employer.id}>{employer.name}</div>;
        })}
      </div>
    );
  };

  const Employees = () => {
    // TODO: Add employees logic
    return (
      <div>
        <h1>Employees</h1>
      </div>
    );
  };

  const Graph = () => {
    return (
      <ParentSize>
        {({ width, height }) => <TreeComponent width={width} height={height} />}
      </ParentSize>
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
