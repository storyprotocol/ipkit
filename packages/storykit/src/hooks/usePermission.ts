import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { PermissionResponse, getPermission } from "../lib/api/getPermission"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UsePermissionQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UsePermissionOptions = {
  permissionId: Address
  queryOptions?: UsePermissionQueryOptions
}

export function usePermission({ permissionId, queryOptions }: UsePermissionOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getPermission", permissionId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getPermission({ permissionId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<PermissionResponse>
}
