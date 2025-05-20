import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpGroupsOptions, IpGroupsResponse, getIpGroups } from "../lib/api/getIpGroups"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpGroupsOptions = {
  groupId?: string
  options?: IpGroupsOptions
  queryOptions?: IpQueryOptions
}

export function useIpGroups({ groupId, options, queryOptions }: UseIpGroupsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpGroups", groupId, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpGroups({ groupId, options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpGroupsResponse>
}
