import { SuccessResponse } from "../models/api.types.ts";

export enum ApiRoutes {
  Register = "register",
  Login = "login",
  Employers = "employers",
}

const API_URL = import.meta.env.DEV
  ? "/api"
  : "http://capstone-api-env-01.eba-cp4z6h2m.us-east-2.elasticbeanstalk.com";

console.log(API_URL);

export const customFetch = async <T = undefined>(
  apiRoute: ApiRoutes,
  method: "GET" | "POST",
  body?: unknown,
): Promise<SuccessResponse<T>> => {
  const response = await fetch(`${API_URL}/${apiRoute}`, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

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
