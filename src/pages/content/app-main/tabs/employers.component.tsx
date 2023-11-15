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
    <div className="w-full h-full overflow-x-hidden overflow-y-scroll p-3">
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        className="grid gap-3"
      >
        {employers.map((employer) => {
          return <EmployerCard employer={employer} key={employer.id} />;
        })}
      </div>
    </div>
  );
}

export default Employers;
