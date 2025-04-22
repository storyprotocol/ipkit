import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseTokensData, LicenseTokensOptions, getLicenseTokens } from "../lib/api/getLicenseTokens"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTokensQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTokensOptions = {
  licenseTokenIds?: Address[]
  options?: LicenseTokensOptions
  queryOptions?: UseLicenseTokensQueryOptions
}

export function useLicenseTokens({ licenseTokenIds, options, queryOptions }: UseLicenseTokensOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTokens", licenseTokenIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTokens({ licenseTokenIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTokensData>
}
