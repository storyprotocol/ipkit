import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpGroupsData, IpGroupsOptions, getIpGroups } from "../lib/api/getIpGroups"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpGroupsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpGroupsOptions = {
  options?: IpGroupsOptions
  queryOptions?: UseIpGroupsQueryOptions
}

export function useIpGroups({ options, queryOptions }: UseIpGroupsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpGroups", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpGroups({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpGroupsData>
}
