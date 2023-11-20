import { ApiRoutes, SuccessResponse } from "./api.types.ts";
import {
  useAuthActionContext,
  useAuthContext,
} from "../contexts/auth/auth.context.tsx";

export const useFetch = () => {
  const authFunctions = useAuthActionContext();
  const user = useAuthContext();

  const customFetch = async <T = undefined>(
    apiRoute: ApiRoutes,
    method: "GET" | "POST",
    body?: unknown,
  ): Promise<SuccessResponse<T>> => {
    const requestInit: RequestInit = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user?.jwt || ""}`,
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
