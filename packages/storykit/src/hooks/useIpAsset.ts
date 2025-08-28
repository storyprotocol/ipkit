import { IpQueryOptions } from "@/types/openapi"
import { IPAsset } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getIpAssets } from "../lib/api/getIpAssets"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetOptions = {
  ipId: Address
  queryOptions?: IpQueryOptions
}

export function useIpAsset({ ipId, queryOptions }: UseIpAssetOptions) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAsset", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds: [ipId], apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0] || null
    },
    enabled: !!ipId.length,
    ...queryOptions,
  }) as UseQueryResult<IPAsset>
}
