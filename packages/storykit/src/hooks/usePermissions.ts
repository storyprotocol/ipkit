import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { PermissionsOptions, PermissionsResponse, getPermissions } from "../lib/api/getPermissions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UsePermissionsOptions = {
  options?: PermissionsOptions
  queryOptions?: IpQueryOptions
}

export function usePermissions({ options, queryOptions }: UsePermissionsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getPermissions", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getPermissions({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<PermissionsResponse>
}
