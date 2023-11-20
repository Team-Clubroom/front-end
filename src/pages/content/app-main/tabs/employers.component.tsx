import { useEffect, useState } from "react";
import { Employer } from "../../../../models/employer.types.ts";
import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";
import SearchBoxComponent from "../../../../components/search-box/search-box.component.tsx";
import { useFetch } from "../../../../models/useFetch.ts";
import { EmployerCard } from "../../../../components/employer-card/employer-card.component.tsx";
import { ApiRoutes } from "../../../../models/api.types.ts";

function Employers() {
  const [search, setSearch] = useState("");
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

  function compareSearch(employer: Employer) {
    if (search != "") {
      if (employer.name.toLowerCase().includes(search.toLowerCase())) {
        return <EmployerCard employer={employer} key={employer.id} />;
      }
      // TODO: add other search filters when needed
    } else {
      return <EmployerCard employer={employer} key={employer.id} />;
    }
  }

  const employerNodes = employers.map(compareSearch);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-scroll p-3">
      <div className={"w-[320px] m-auto pb-3"}>
        <SearchBoxComponent
          placeholder={"Search employers"}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {employerNodes.some((node) => node !== undefined) ? (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
          className="grid gap-3"
        >
          {employerNodes}
        </div>
      ) : (
        <div className={"text-center pt-72 text-gray-500"}>
          No employers match the search
        </div>
      )}
    </div>
  );
}

export default Employers;
