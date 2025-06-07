import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { EventsService } from "../../services/events";
import type { IPaginationResponse } from "../../types/IPaginationResponse";
import type { IEvent, IEventListParams } from "../../types/IEvents";

export function useGetListEvents(
  params: IEventListParams,
  options?: Omit<
    UseQueryOptions<IPaginationResponse<IEvent[]>, Error, IPaginationResponse<IEvent[]>>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery<IPaginationResponse<IEvent[]>, Error>({
    queryKey: ["events", params.page, params.pageSize],
    queryFn: async () => {
      return EventsService.getList({
        page: params.page ?? 1,
        pageSize: params.pageSize ?? 10,
      });
    },
    ...options,
  });
}
