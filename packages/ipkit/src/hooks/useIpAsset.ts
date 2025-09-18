import { IpQueryOptions } from "@/types/openapi"
import { IPAsset } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getIpAssets } from "../lib/api/getIpAssets"
import { useIpKit } from "../providers/IpKitProvider"

export type UseIpAssetOptions = {
  ipId: Address
  includeLicenses?: boolean
  queryOptions?: IpQueryOptions
}

export function useIpAsset({ ipId, includeLicenses, queryOptions }: UseIpAssetOptions): UseQueryResult<IPAsset | null> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getIpAsset", ipId, includeLicenses],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds: [ipId], includeLicenses, apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0] || null
    },
    enabled: !!ipId?.length,
    ...queryOptions,
  })
}
