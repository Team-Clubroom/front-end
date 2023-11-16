import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import { ApiRoutes, customFetch } from "../../../../utils/custom-fetch.ts";
import SearchBoxComponent from "../../../../components/search-box/search-box.component.tsx";

function Employers() {
  const [search, setSearch] = useState("");
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
    <div className={"w-full"}>
      <div className={"w-[320px] m-auto"}>
        <SearchBoxComponent
          placeholder={"Search employers"}
          onChange={(value) => {
            setSearch(value.target.value);
          }}
        />
      </div>
      <span>Employers:</span>
      {employers.map((employer) => {
        if (search != "") {
          if (employer.name.toLowerCase().includes(search.toLowerCase())) {
            return <div key={employer.id}>{employer.name}</div>;
          }
        } else {
          return <div key={employer.id}>{employer.name}</div>;
        }
      })}
    </div>
  );
}

export default Employers;
