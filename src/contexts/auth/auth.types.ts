import React from "react";
import { SuccessResponse } from "../../models/api.types.ts";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload extends LoginPayload {
  user_first_name: string;
  user_last_name: string;
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface UserLoginResponse {
  email: string;
  jwt: string;
  isAdmin: boolean;
  firstName: string;
  lastName: string;
}

export interface UserAuth extends UserLoginResponse {
  adminPending: boolean;
}

export interface AuthActionFuncs {
  register: RegisterFunc;
  login: LoginFunc;
  logout: (timeout?: true) => void;
  isLoggedIn: () => boolean;
  setAdminPending: () => void;
}

export type RegisterFunc = (
  registrationPayload: RegistrationPayload,
) => Promise<SuccessResponse>;

export type LoginFunc = (loginPayload: LoginPayload) => Promise<void>;

export type AuthState = UserAuth | null | "timeout";
