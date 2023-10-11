import React, { useEffect, useState } from "react";
import {
  AuthActionFuncs,
  AuthContextProps,
  AuthState,
  LoginFunc,
  RegisterFunc,
} from "./auth.types.ts";
import { ApiRoutes, customFetch } from "../../utils/custom-fetch.ts";

const AuthContext = React.createContext<AuthState>(null);
export const useAuthContext = () => React.useContext(AuthContext)!;

const AuthActionContext = React.createContext<AuthActionFuncs | null>(null);
export const useAuthActionContext = () => React.useContext(AuthActionContext)!;

const USER_STORAGE_KEY = "CELDV_USER_INFO";
export const API_URL = `${import.meta.env.VITE_API_HOST}:${
  import.meta.env.VITE_API_PORT
}`;

function AuthContextProvider({ children }: AuthContextProps) {
  const [userAuth, setUserAuth] = useState<AuthState>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // check local storage for a user object
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      const userObj: AuthState = JSON.parse(storedUser);
      setUserAuth(userObj);
    }
    setIsLoading(false);
  }, []);

  const register: RegisterFunc = async (registration) => {
    return await customFetch(ApiRoutes.Register, "POST", registration);
  };

  const login: LoginFunc = async (loginPayload) => {
    const result = await customFetch<{ jwt: string }>(
      ApiRoutes.Login,
      "POST",
      loginPayload,
    );

    localStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify({ email: loginPayload.email, jwt: result.data.jwt }),
    );

    setUserAuth({ email: loginPayload.email, token: result.data.jwt });
  };

  const logout = async () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUserAuth(null);
  };

  return (
    <AuthActionContext.Provider value={{ register, login, logout }}>
      <AuthContext.Provider value={userAuth}>
        {/*TODO: add custom loader here*/}
        {isLoading ? <>Loading...</> : children}
      </AuthContext.Provider>
    </AuthActionContext.Provider>
  );
}

export default AuthContextProvider;
