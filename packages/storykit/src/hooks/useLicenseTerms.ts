import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTermsResponse, getLicenseTerms } from "../lib/api/getLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTermsOptions = {
  licenseTermId: string
  queryOptions?: IpQueryOptions
}

export function useLicenseTerms({ licenseTermId, queryOptions }: UseLicenseTermsOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTerms", licenseTermId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTerms({ licenseTermId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTermsResponse>
}
