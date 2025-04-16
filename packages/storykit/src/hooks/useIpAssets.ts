import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsData, IpAssetsOptions, getIpAssets } from "../lib/openAPI/getIpAssets"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetOptions = {
  ipIds?: Address[]
  options?: IpAssetsOptions
  queryOptions?: UseIpAssetQueryOptions
}

export function useIpAssets({ ipIds, options, queryOptions }: UseIpAssetOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssets", ipIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetsData>
}
