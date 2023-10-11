import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";
import { useEffect, useState } from "react";
import { ApiRoutes, customFetch } from "../../../utils/custom-fetch.ts";
import { Employer } from "../../../models/employer.types.ts";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import TreeComponent from "../../../components/tree/tree.component.tsx";

function DashboardPage() {
  const user = useAuthContext();
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
    // <div>
    //   <h1>Private dashboard</h1>
    //   <p>Welcome {user.email}</p>
    //   <div>
    //     <span>Employers:</span>
    //     {employers.map((employer) => {
    //       return <div key={employer.id}>{employer.name}</div>;
    //     })}
    //   </div>
    // </div>
    <ParentSize>
      {({ width, height }) => <TreeComponent width={width} height={height} />}
    </ParentSize>
  );
}

export default DashboardPage;
