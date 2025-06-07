export type IEventListParams = {
  page?: number;
  pageSize?: number;
};

export type IEvent = {
  id: string;
  name: string;
  teams: number;
  status: string;
  date: string;
};
