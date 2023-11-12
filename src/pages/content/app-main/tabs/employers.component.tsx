import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import { ApiRoutes, customFetch } from "../../../../utils/custom-fetch.ts";
import { EmployerCard } from "../../../../components/employer-card/employer-card.component.tsx";
import Grid from '@mui/material/Unstable_Grid2';

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
    <div className="h-full overflow-scroll">
      <span>Employers:</span>
      <Grid container rowSpacing={1} columnSpacing={1} maxHeight={100}>
        {employers.map((employer) => {
          return <EmployerCard employer={employer}/>
        })}
      </Grid>
      
    </div>
  );
}

export default Employers;
