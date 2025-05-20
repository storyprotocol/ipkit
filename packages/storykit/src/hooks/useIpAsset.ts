import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetResponse, getIpAsset } from "../lib/api/getIpAsset"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetOptions = {
  ipId: Address
  queryOptions?: IpQueryOptions
}

export function useIpAsset({ ipId, queryOptions }: UseIpAssetOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAsset", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAsset({ ipId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetResponse>
}
