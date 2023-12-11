import { useEffect, useState } from "react";
import { Employer, EmployerAction } from "../models/employer.types.ts";
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

  const dispatch = (action: EmployerAction) => {
    switch (action.type) {
      case "Add":
        return setEmployers([...employers, action.payload.newEmployer]);
      case "Delete":
        return setEmployers(
          employers.filter((emp) => emp.id.toString() !== action.payload.id),
        );
      case "Edit":
        return setEmployers(
          employers.map((emp) =>
            emp.id === action.payload.updatedEmployer.id
              ? action.payload.updatedEmployer
              : emp,
          ),
        );
    }
  };

  return { employers, isLoading, employerDispatch: dispatch };
};
