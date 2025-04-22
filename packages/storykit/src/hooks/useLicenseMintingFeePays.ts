import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import {
  LicenseMintingFeePaysData,
  LicenseMintingFeePaysOptions,
  getLicenseMintingFeePays,
} from "../lib/api/getLicenseMintingFeePays"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeePaysQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeePaysOptions = {
  licenseMintingFeePaidIds?: Address[]
  options?: LicenseMintingFeePaysOptions
  queryOptions?: UseLicenseMintingFeePaysQueryOptions
}

export function useLicenseMintingFeePays({
  licenseMintingFeePaidIds,
  options,
  queryOptions,
}: UseLicenseMintingFeePaysOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFeePays", licenseMintingFeePaidIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFeePays({
        licenseMintingFeePaidIds,
        options,
        chainName: chain.name,
        apiKey,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeePaysData>
}
