import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTokenResponse, getLicenseToken } from "../lib/api/getLicenseToken"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTokenOptions = {
  licenseTokenId: string
  queryOptions?: IpQueryOptions
}

export function useLicenseToken({ licenseTokenId, queryOptions }: UseLicenseTokenOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseToken", licenseTokenId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseToken({ licenseTokenId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTokenResponse>
}
