import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpGroupsData, IpGroupsOptions, getIpGroups } from "../lib/api/getIpGroups"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpGroupsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpGroupsOptions = {
  groupId?: string
  options?: IpGroupsOptions
  queryOptions?: UseIpGroupsQueryOptions
}

export function useIpGroups({ groupId, options, queryOptions }: UseIpGroupsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpGroups", groupId, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpGroups({ groupId, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpGroupsData>
}
