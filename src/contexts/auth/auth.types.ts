import React from "react";
import { SuccessResponse } from "../../models/api.types.ts";

export interface LoginPayload extends Record<string, string> {
  email: string;
  password: string;
}

export interface RegistrationPayload extends LoginPayload {
  name: string;
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface UserAuth {
  email: string;
  token: string;
}

export interface AuthActionFuncs {
  register: RegisterFunc;
  login: LoginFunc;
  logout: () => void;
}

export type RegisterFunc = (
  registrationPayload: RegistrationPayload,
) => Promise<SuccessResponse>;

export type LoginFunc = (loginPayload: LoginPayload) => Promise<void>;

export type AuthState = UserAuth | null;