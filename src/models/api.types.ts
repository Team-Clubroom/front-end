export interface SuccessResponse<T = undefined> {
  message: string;
  data: T;
}

export enum ApiRoutes {
  Register = "register",
  Login = "login",
  Employers = "employers",
  Employer = "employer",
  NameChange = "/employer/name-change",
  SplitRelation = "employer/split",
}
