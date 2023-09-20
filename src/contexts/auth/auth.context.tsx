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
export const useAuthContext = () => React.useContext(AuthContext);

const AuthActionContext = React.createContext<AuthActionFuncs | null>(null);
export const useAuthActionContext = () => React.useContext(AuthActionContext)!;

const USER_STORAGE_KEY = "CELDV_USER_INFO";
export const API_URL = `${import.meta.env.VITE_API_HOST}:${
  import.meta.env.VITE_API_PORT
}`;

function AuthContextProvider({ children }: AuthContextProps) {
  const [userAuth, setUserAuth] = useState<AuthState>(null);

  useEffect(() => {
    // check local storage for a user object
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (!storedUser) return;
    const userObj: AuthState = JSON.parse(storedUser);
    setUserAuth(userObj);
  }, []);

  const register: RegisterFunc = async (registration) => {
    return await customFetch(ApiRoutes.Register, "POST", registration);
  };

  const login: LoginFunc = async () => {
    console.log(login);
  };

  return (
    <AuthActionContext.Provider value={{ register, login }}>
      <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
    </AuthActionContext.Provider>
  );
}

export default AuthContextProvider;
