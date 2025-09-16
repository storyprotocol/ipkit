import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseTokensOptions, LicenseTokensResponse, getLicenseTokens } from "../lib/api/getLicenseTokens"
import { useIpKit } from "../providers/IpKitProvider"

export type UseLicenseTokensOptions = {
  ownerAddress: Address
  licensorIpId?: Address
  options?: LicenseTokensOptions
  queryOptions?: IpQueryOptions
}

export function useLicenseTokens({
  ownerAddress,
  licensorIpId,
  options,
  queryOptions,
}: UseLicenseTokensOptions): UseQueryResult<LicenseTokensResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getLicenseTokens", ownerAddress, licensorIpId, options],
    queryFn: async () => {
      const { data, error } = await getLicenseTokens({
        ownerAddress,
        licensorIpId,
        options,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    enabled: !!ownerAddress.length,
    ...queryOptions,
  })
}
