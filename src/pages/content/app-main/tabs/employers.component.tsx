import {ApiRoutes, customFetch} from "../../../../utils/custom-fetch.ts";
import {useEffect, useState} from "react";
import {Employer} from "../../../../models/employer.types.ts";

// TODO: Currently this is not working, need to fix (401 error - Unauthorized)
function Employers() {
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
}

export default Employers;
