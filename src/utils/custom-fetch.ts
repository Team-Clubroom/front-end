import { SuccessResponse } from "../models/api.types.ts";
import { useAuthActionContext } from "../contexts/auth/auth.context.tsx";

export enum ApiRoutes {
  Register = "register",
  Login = "login",
  Employers = "employers",
}

export const useFetch = () => {
  const authFunctions = useAuthActionContext();

  const customFetch = async <T = undefined>(
    apiRoute: ApiRoutes,
    method: "GET" | "POST",
    jwt: string,
    body?: unknown,
  ): Promise<SuccessResponse<T>> => {
    const requestInit: RequestInit = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method,
    };

    if (body) {
      requestInit.body = JSON.stringify(body);
    }
    const response = await fetch(`/api/${apiRoute}`, requestInit);
    if (response.status === 401) {
      authFunctions?.logout(true);
      throw Error("Session timed out");
    }

    const result = await response.json();

    if (response.ok) {
      return result as SuccessResponse<T>;
    } else {
      if ("error" in result) {
        // Runs when the server uses the standard format for error
        throw Error(result.error);
      } else {
        // runs if the server doesn't use the standard format for error
        throw Error(
          `${apiRoute} request failed with status code ${response.status}`,
        );
      }
    }
  };

  return { customFetch };
};
