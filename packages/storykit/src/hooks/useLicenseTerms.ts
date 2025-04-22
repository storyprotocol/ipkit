import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseTermsData, LicenseTermsOptions, getLicenseTerms } from "../lib/api/getLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTermsOptions = {
  licenseTermIds?: Address[]
  options?: LicenseTermsOptions
  queryOptions?: UseLicenseTermsQueryOptions
}

export function useLicenseTerms({ licenseTermIds, options, queryOptions }: UseLicenseTermsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTerms", licenseTermIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTerms({ licenseTermIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTermsData>
}
