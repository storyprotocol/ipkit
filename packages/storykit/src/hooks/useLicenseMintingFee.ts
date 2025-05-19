import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseMintingFeeResponse, getLicenseMintingFee } from "../lib/api/getLicenseMintingFee"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeeQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeeOptions = {
  licenseMintingFeePaidId: Address
  queryOptions?: UseLicenseMintingFeeQueryOptions
}

export function useLicenseMintingFee({ licenseMintingFeePaidId, queryOptions }: UseLicenseMintingFeeOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFee", licenseMintingFeePaidId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFee({ licenseMintingFeePaidId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeeResponse>
}
