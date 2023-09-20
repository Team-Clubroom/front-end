import React, { useEffect, useState } from "react";

export interface AuthContextProps {
  children: React.ReactNode;
}

interface UserAuth {
  email: string;
  token: string;
}

type AuthState = UserAuth | null;

const AuthContext = React.createContext<AuthState>(null);
const USER_STORAGE_KEY = "CELDV_USER_INFO";

function AuthContextProvider({ children }: AuthContextProps) {
  const [userAuth, setUserAuth] = useState<AuthState>(null);

  useEffect(() => {
    // check local storage for a user object
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (!storedUser) return;
    const userObj: AuthState = JSON.parse(storedUser);
    setUserAuth(userObj);
  }, []);

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
