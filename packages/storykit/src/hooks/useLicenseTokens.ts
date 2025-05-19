import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTokensOptions, LicenseTokensResponse, getLicenseTokens } from "../lib/api/getLicenseTokens"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTokensQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTokensOptions = {
  options?: LicenseTokensOptions
  queryOptions?: UseLicenseTokensQueryOptions
}

export function useLicenseTokens({ options, queryOptions }: UseLicenseTokensOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTokens", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTokens({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTokensResponse>
}
