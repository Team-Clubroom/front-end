import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import { ApiRoutes, useFetch } from "../../../../utils/custom-fetch.ts";

function Employers() {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const { customFetch } = useFetch();
  const user = useAuthContext();
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
  }, [user]);

  return (
    <div>
      <span>Employers:</span>
      {employers.map((employer) => {
        return <div key={employer.id}>{employer.name}</div>;
      })}
    </div>
  );
}

export default Employers;
