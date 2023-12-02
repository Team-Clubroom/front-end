import { useEffect, useState } from "react";
import { Employer } from "../models/employer.types.ts";
import { useFetch } from "../models/useFetch.ts";
import { ApiRoutes } from "../models/api.types.ts";

export const useEmployers = () => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { customFetch } = useFetch();

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { employers, isLoading };
};
