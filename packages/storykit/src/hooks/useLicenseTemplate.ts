import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseTemplateResponse, getLicenseTemplate } from "../lib/api/getLicenseTemplate"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTemplateQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTemplateOptions = {
  licenseTemplateId: Address
  queryOptions?: UseLicenseTemplateQueryOptions
}

export function useLicenseTemplate({ licenseTemplateId, queryOptions }: UseLicenseTemplateOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTemplate", licenseTemplateId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTemplate({ licenseTemplateId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTemplateResponse>
}
