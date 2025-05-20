import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTermResponse, getLicenseTerm } from "../lib/api/getLicenseTerm"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTermQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTermOptions = {
  licenseTermId: string
  queryOptions?: UseLicenseTermQueryOptions
}

export function useLicenseTerm({ licenseTermId, queryOptions }: UseLicenseTermOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTerm", licenseTermId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTerm({ licenseTermId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTermResponse>
}
