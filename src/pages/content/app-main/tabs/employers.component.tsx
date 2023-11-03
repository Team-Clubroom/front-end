import {useEffect, useState} from "react";
import {Employer} from "../../../../models/employer.types.ts";
import {useAuthContext} from "../../../../contexts/auth/auth.context.tsx";
import {ApiRoutes, customFetch} from "../../../../utils/custom-fetch.ts"; // TODO: Currently this is not working, need to fix (401 error - Unauthorized)

// TODO: Currently this is not working, need to fix (401 error - Unauthorized)
function Employers() {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const user = useAuthContext();
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await customFetch<Employer[]>(
        ApiRoutes.Employers,
        "GET",
        user.jwt,
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
