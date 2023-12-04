import React, { useEffect, useState } from "react";
import {
  AuthActionFuncs,
  AuthContextProps,
  AuthState,
  LoginFunc,
  RegisterFunc,
  UserAuth,
  UserLoginResponse,
} from "./auth.types.ts";
import { useFetch } from "../../models/useFetch.ts";
import { ApiRoutes } from "../../models/api.types.ts";

const AuthContext = React.createContext<AuthState>(null);
/**
 * Returns a UserAuth object, null, or "timeout"
 */
export const useAuthContext = () => React.useContext(AuthContext) as UserAuth;

const AuthActionContext = React.createContext<AuthActionFuncs | null>(null);
export const useAuthActionContext = () => React.useContext(AuthActionContext)!;

const USER_STORAGE_KEY = "CELDV_USER_INFO";
const ADMIN_PENDING_KEY = "ADMIN_PENDING_KEY";

function AuthContextProvider({ children }: AuthContextProps) {
  const [userAuth, setUserAuth] = useState<AuthState>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { customFetch } = useFetch();

  useEffect(() => {
    // check local storage for a user object
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    const adminPending = localStorage.getItem(ADMIN_PENDING_KEY) === "true";
    if (storedUser) {
      const userObj: UserLoginResponse = JSON.parse(storedUser);
      setUserAuth({ ...userObj, adminPending });
    }
    setIsLoading(false);
  }, []);

  const register: RegisterFunc = async (registration) => {
    return await customFetch(ApiRoutes.Register, "POST", registration);
  };

  const login: LoginFunc = async (loginPayload) => {
    const response = await customFetch<UserLoginResponse>(
      ApiRoutes.Login,
      "POST",
      loginPayload,
    );

    let adminPending = false;
    if (response.data.isAdmin) {
      localStorage.removeItem(ADMIN_PENDING_KEY);
    } else {
      adminPending = localStorage.getItem(ADMIN_PENDING_KEY) === "true";
    }

    const user: UserAuth = {
      ...response.data,
      adminPending,
    };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.data));
    setUserAuth(user);
  };

  const isLoggedIn = () => {
    return userAuth !== null && userAuth !== "timeout";
  };

  const logout = async (timeout?: true) => {
    localStorage.removeItem(USER_STORAGE_KEY);
    setUserAuth(timeout ? "timeout" : null);
  };

  const setAdminPending = () => {
    if (typeof userAuth !== "object" || userAuth === null) {
      throw Error("Failed to grant admin permission");
    }
    localStorage.setItem(ADMIN_PENDING_KEY, "true");
    setUserAuth({ ...userAuth, adminPending: true });
  };

  return (
    <AuthActionContext.Provider
      value={{ register, login, logout, isLoggedIn, setAdminPending }}
    >
      <AuthContext.Provider value={userAuth as UserAuth}>
        {/*TODO: add custom loader here*/}
        {isLoading ? <>Loading...</> : children}
      </AuthContext.Provider>
    </AuthActionContext.Provider>
  );
}

export default AuthContextProvider;
