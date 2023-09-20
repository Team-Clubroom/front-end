export interface SuccessResponse<T = undefined> {
  message: string;
  data: T;
}
