import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import {
  LicenseMintingFeesData,
  LicenseMintingFeesOptions,
  getLicenseMintingFees,
} from "../lib/api/getLicenseMintingFees"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeesOptions = {
  licenseMintingFeePaidIds?: Address[]
  options?: LicenseMintingFeesOptions
  queryOptions?: UseLicenseMintingFeesQueryOptions
}

export function useLicenseMintingFees({
  licenseMintingFeePaidIds,
  options,
  queryOptions,
}: UseLicenseMintingFeesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFees", licenseMintingFeePaidIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFees({
        licenseMintingFeePaidIds,
        options,
        chainName: chain.name,
        apiKey,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeesData>
}
