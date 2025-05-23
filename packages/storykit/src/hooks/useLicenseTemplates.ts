import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTemplatesOptions, LicenseTemplatesResponse, getLicenseTemplates } from "../lib/api/getLicenseTemplates"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTemplatesOptions = {
  options?: LicenseTemplatesOptions
  queryOptions?: IpQueryOptions
}

export function useLicenseTemplates({ options, queryOptions }: UseLicenseTemplatesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTemplates", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTemplates({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTemplatesResponse>
}
