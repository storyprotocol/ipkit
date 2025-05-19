import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetResponse, getIpAsset } from "../lib/api/getIpAsset"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetOptions = {
  ipId: Address
  queryOptions?: UseIpAssetQueryOptions
}

export function useIpAsset({ ipId, queryOptions }: UseIpAssetOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAsset", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAsset({ ipId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetResponse>
}
