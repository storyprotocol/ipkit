import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTokensOptions, LicenseTokensResponse, getLicenseTokens } from "../lib/api/getLicenseTokens"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTokensOptions = {
  options?: LicenseTokensOptions
  queryOptions?: IpQueryOptions
}

export function useLicenseTokens({ options, queryOptions }: UseLicenseTokensOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTokens", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTokens({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTokensResponse>
}
