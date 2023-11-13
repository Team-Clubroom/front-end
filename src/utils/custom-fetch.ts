import { SuccessResponse } from "../models/api.types.ts";

export enum ApiRoutes {
  Register = "register",
  Login = "login",
  Employers = "employers",
}

export const customFetch = async <T = undefined>(
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

  const result = await response.json();
  if (response.ok) {
    return result as SuccessResponse<T>;
  } else {
    if ("error" in result) {
      throw Error(result.error);
    } else {
      throw Error(
        `${apiRoute} request failed with status code ${response.status}`,
      );
    }
  }
};
