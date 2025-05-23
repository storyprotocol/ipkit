import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseMintingFeeResponse, getLicenseMintingFee } from "../lib/api/getLicenseMintingFee"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeeOptions = {
  licenseMintingFeePaidId: Address
  queryOptions?: IpQueryOptions
}

export function useLicenseMintingFee({ licenseMintingFeePaidId, queryOptions }: UseLicenseMintingFeeOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFee", licenseMintingFeePaidId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFee({
        licenseMintingFeePaidId,
        chainName: chain.name,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeeResponse>
}
