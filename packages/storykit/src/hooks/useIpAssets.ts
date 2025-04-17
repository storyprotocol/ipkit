import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsData, IpAssetsOptions, getIpAssets } from "../lib/api/getIpAssets"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetsOptions = {
  ipIds?: Address[]
  options?: IpAssetsOptions
  queryOptions?: UseIpAssetsQueryOptions
}

export function useIpAssets({ ipIds, options, queryOptions }: UseIpAssetsOptions = {}) {
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
