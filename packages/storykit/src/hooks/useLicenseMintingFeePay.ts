import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseMintingFeePayData, getLicenseMintingFeePay } from "../lib/api/getLicenseMintingFeePay"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeePayQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeePayOptions = {
  licenseMintingFeePaidId: Address
  queryOptions?: UseLicenseMintingFeePayQueryOptions
}

export function useLicenseMintingFeePay({ licenseMintingFeePaidId, queryOptions }: UseLicenseMintingFeePayOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFeePay", licenseMintingFeePaidId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFeePay({ licenseMintingFeePaidId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeePayData>
}
