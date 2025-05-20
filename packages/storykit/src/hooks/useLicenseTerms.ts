import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTermsOptions, LicenseTermsResponse, getLicenseTerms } from "../lib/api/getLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTermsOptions = {
  options?: LicenseTermsOptions
  queryOptions?: IpQueryOptions
}

export function useLicenseTerms({ options, queryOptions }: UseLicenseTermsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTerms", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTerms({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTermsResponse>
}
