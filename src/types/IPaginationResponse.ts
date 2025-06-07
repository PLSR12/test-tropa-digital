export type IPaginationResponse<T> = {
  data: T;
  page: number;
  pageSize: number;
  total: number;
};
