import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTemplatesOptions, LicenseTemplatesResponse, getLicenseTemplates } from "../lib/api/getLicenseTemplates"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTemplatesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTemplatesOptions = {
  options?: LicenseTemplatesOptions
  queryOptions?: UseLicenseTemplatesQueryOptions
}

export function useLicenseTemplates({ options, queryOptions }: UseLicenseTemplatesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTemplates", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTemplates({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTemplatesResponse>
}
