import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpGroupEdgesData, IpGroupEdgesOptions, getIpGroupEdges } from "../lib/api/getIpGroupEdges"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpGroupEdgesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpGroupEdgesOptions = {
  options?: IpGroupEdgesOptions
  queryOptions?: UseIpGroupEdgesQueryOptions
}

export function useIpGroupEdges({ options, queryOptions }: UseIpGroupEdgesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpGroupEdges", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpGroupEdges({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpGroupEdgesData>
}
