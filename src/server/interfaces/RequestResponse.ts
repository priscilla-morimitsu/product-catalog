export interface IRequestResponse<T> {
  data: T;
  status: number;
  statusText: string;
}
