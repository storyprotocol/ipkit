import { IpQueryOptions } from "@/types/openapi"
import { License } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getIpAssets } from "../lib/api/getIpAssets"
import { useIpKit } from "../providers/StoryKitProvider"

export type UseIpAssetLicensesOptions = {
  ipId: Address
  queryOptions?: IpQueryOptions
}

export function useIpAssetLicenses({
  ipId,
  queryOptions,
}: UseIpAssetLicensesOptions): UseQueryResult<License[] | null> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    // key consistent with useIpAsset, includeLicenses = true
    queryKey: ["getIpAsset", ipId, true],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds: [ipId], includeLicenses: true, apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0].licenses || null
    },
    enabled: !!ipId.length,
    ...queryOptions,
  })
}
