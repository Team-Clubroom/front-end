import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import { ApiRoutes, customFetch } from "../../../../utils/custom-fetch.ts";
import { EmployerCard } from "../../../../components/employer-card/employer-card.component.tsx";

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
    <div className="h-full overflow-x-scroll overflow-y-scroll h-[calc(100vh-85px)] w-full">
      <span>Employers:</span>
      <div className="grid grid-cols-4 gap-2">
        {employers.map((employer) => {
          return <EmployerCard employer={employer} />;
        })}
      </div>
    </div>
  );
}

export default Employers;
