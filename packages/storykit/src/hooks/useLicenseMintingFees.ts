import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import {
  LicenseMintingFeesOptions,
  LicenseMintingFeesResponse,
  getLicenseMintingFees,
} from "../lib/api/getLicenseMintingFees"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeesOptions = {
  options?: LicenseMintingFeesOptions
  queryOptions?: UseLicenseMintingFeesQueryOptions
}

export function useLicenseMintingFees({ options, queryOptions }: UseLicenseMintingFeesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFees", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFees({
        options,
        chainName: chain.name,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeesResponse>
}
