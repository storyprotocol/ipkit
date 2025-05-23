import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicensesTermsOptions, LicensesTermsResponse, getLicensesTerms } from "../lib/api/getLicensesTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicensesTermsOptions = {
  options?: LicensesTermsOptions
  queryOptions?: IpQueryOptions
}

export function useLicensesTerms({ options, queryOptions }: UseLicensesTermsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicensesTerms", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicensesTerms({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicensesTermsResponse>
}
