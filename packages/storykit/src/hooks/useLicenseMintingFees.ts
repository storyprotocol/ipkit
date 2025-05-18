import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import {
  LicenseMintingFeesData,
  LicenseMintingFeesOptions,
  getLicenseMintingFees,
} from "../lib/api/getLicenseMintingFees"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeesOptions = {
  options?: LicenseMintingFeesOptions
  queryOptions?: UseLicenseMintingFeesQueryOptions
}

export function useLicenseMintingFees({ options, queryOptions }: UseLicenseMintingFeesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFees", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFees({
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
