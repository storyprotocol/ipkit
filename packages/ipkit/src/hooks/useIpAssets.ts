import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsOptions, IpAssetsResponse, getIpAssets } from "../lib/api/getIpAssets"
import { useIpKit } from "../providers/IpKitProvider"

export type UseIpAssetsOptions = {
  ipIds?: Address[]
  tokenContract?: Address
  includeLicenses?: boolean
  moderated?: boolean
  options?: IpAssetsOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssets({
  ipIds,
  tokenContract,
  includeLicenses,
  moderated,
  options,
  queryOptions,
}: UseIpAssetsOptions = {}): UseQueryResult<IpAssetsResponse> {
  const { apiKey, apiClient, chain } = useIpKit()

  return useQuery({
    queryKey: [chain.id, "getIpAssets", ipIds, tokenContract, includeLicenses, moderated, options],
    queryFn: async () => {
      const { data, error } = await getIpAssets({
        ipIds,
        tokenContract,
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
