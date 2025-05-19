import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTermsOptions, LicenseTermsResponse, getLicenseTerms } from "../lib/api/getLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTermsOptions = {
  options?: LicenseTermsOptions
  queryOptions?: UseLicenseTermsQueryOptions
}

export function useLicenseTerms({ options, queryOptions }: UseLicenseTermsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTerms", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTerms({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTermsResponse>
}
