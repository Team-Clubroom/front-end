import { SuccessResponse } from "../models/api.types.ts";

export enum ApiRoutes {
  Register = "register",
}

export const customFetch = async <Q, T = undefined>(
  apiRoute: ApiRoutes,
  method: "GET" | "POST",
  body: Q,
): Promise<SuccessResponse<T>> => {
  const response = await fetch(`/api/${apiRoute}`, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body: JSON.stringify(body),
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
