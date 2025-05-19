import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { PermissionsOptions, PermissionsResponse, getPermissions } from "../lib/api/getPermissions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UsePermissionsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UsePermissionsOptions = {
  options?: PermissionsOptions
  queryOptions?: UsePermissionsQueryOptions
}

export function usePermissions({ options, queryOptions }: UsePermissionsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getPermissions", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getPermissions({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<PermissionsResponse>
}
