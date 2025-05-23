import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { PermissionResponse, getPermission } from "../lib/api/getPermission"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UsePermissionOptions = {
  permissionId: Address
  queryOptions?: IpQueryOptions
}

export function usePermission({ permissionId, queryOptions }: UsePermissionOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getPermission", permissionId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getPermission({ permissionId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<PermissionResponse>
}
