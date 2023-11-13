import React, { useEffect, useState } from "react";
import {
  AuthActionFuncs,
  AuthContextProps,
  AuthState,
  LoginFunc,
  RegisterFunc,
  UserAuth,
} from "./auth.types.ts";
import { ApiRoutes, useFetch } from "../../utils/custom-fetch.ts";

const AuthContext = React.createContext<AuthState>(null);
/**
 * Returns a UserAuth object, null, or "timeout"
 */
export const useAuthContext = () => React.useContext(AuthContext) as UserAuth;

const AuthActionContext = React.createContext<AuthActionFuncs | null>(null);
export const useAuthActionContext = () => React.useContext(AuthActionContext)!;

const USER_STORAGE_KEY = "CELDV_USER_INFO";

function AuthContextProvider({ children }: AuthContextProps) {
  const [userAuth, setUserAuth] = useState<AuthState>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { customFetch } = useFetch();

  useEffect(() => {
    // check local storage for a user object
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      const userObj: UserAuth = JSON.parse(storedUser);
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

    setUserAuth({
      email: loginPayload.email,
      jwt: result.data.jwt,
    });
  };

  const isLoggedIn = () => {
    return userAuth !== null && userAuth !== "timeout";
  };

  const logout = async (timeout?: true) => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUserAuth(timeout ? "timeout" : null);
  };

  return (
    <AuthActionContext.Provider value={{ register, login, logout, isLoggedIn }}>
      <AuthContext.Provider value={userAuth as UserAuth}>
        {/*TODO: add custom loader here*/}
        {isLoading ? <>Loading...</> : children}
      </AuthContext.Provider>
    </AuthActionContext.Provider>
  );
}

export default AuthContextProvider;
