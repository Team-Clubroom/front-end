import React from "react";
import { SuccessResponse } from "../../models/api.types.ts";

export interface RegistrationPayload {
  name: string;
  email: string;
  password: string;
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
}

export type RegisterFunc = (
  registrationPayload: RegistrationPayload,
) => Promise<SuccessResponse>;

export type LoginFunc = () => Promise<void>;

export type AuthState = UserAuth | null;
