import type { IEvent, IEventListParams } from "../../types/IEvents";
import type { IPaginationResponse } from "../../types/IPaginationResponse";
import httpService from "../api";

export const EventsService = {
  getList: async ({
    page = 1,
    pageSize = 10,
  }: IEventListParams): Promise<IPaginationResponse<IEvent[]>> => {
    const { data } = await httpService.get(`/events?page=${page}&pageSize=${pageSize}`);
    return data;
  },
};
