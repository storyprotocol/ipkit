import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import {
  DetailedIpLicenseTermsData,
  DetailedIpLicenseTermsOptions,
  getDetailedIpLicenseTerms,
} from "../lib/api/getDetailedIpLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDetailedIpLicenseTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseDetailedIpLicenseTermsOptions = {
  options?: DetailedIpLicenseTermsOptions
  queryOptions?: UseDetailedIpLicenseTermsQueryOptions
}

export function useDetailedIpLicenseTerms({ options, queryOptions }: UseDetailedIpLicenseTermsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDetailedIpLicenseTerms", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDetailedIpLicenseTerms({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DetailedIpLicenseTermsData>
}
