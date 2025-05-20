import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpGroupEdgesOptions, IpGroupEdgesResponse, getIpGroupEdges } from "../lib/api/getIpGroupEdges"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpGroupEdgesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpGroupEdgesOptions = {
  groupId?: Address
  ipAssetIds?: Address[]
  options?: IpGroupEdgesOptions
  queryOptions?: UseIpGroupEdgesQueryOptions
}

export function useIpGroupEdges({ groupId, ipAssetIds, options, queryOptions }: UseIpGroupEdgesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpGroupEdges", groupId, ipAssetIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpGroupEdges({
        groupId,
        ipAssetIds,
        options,
        chainName: chain.name,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpGroupEdgesResponse>
}
