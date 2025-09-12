import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsOptions, IpAssetsResponse, getIpAssets } from "../lib/api/getIpAssets"
import { useIpKit } from "../providers/IpKitProvider"

export type UseIpAssetsByOwnerOptions = {
  ownerAddress?: Address
  includeLicenses?: boolean
  moderated?: boolean
  options?: IpAssetsOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetsByOwner({
  ownerAddress,
  includeLicenses,
  moderated,
  options,
  queryOptions,
}: UseIpAssetsByOwnerOptions = {}): UseQueryResult<IpAssetsResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getIpAssets", ownerAddress, includeLicenses, moderated, options],
    queryFn: async () => {
      const { data, error } = await getIpAssets({
        ownerAddress,
        includeLicenses,
        moderated,
        options,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  })
}
