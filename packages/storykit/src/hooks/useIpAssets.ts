import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsOptions, IpAssetsResponse, getIpAssets } from "../lib/api/getIpAssets"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetsOptions = {
  ipIds?: Address[]
  options?: IpAssetsOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssets({ ipIds, options, queryOptions }: UseIpAssetsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssets", ipIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds, options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetsResponse>
}
