import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseTokensResponse = paths["/licenses/tokens"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTokensOptions = Partial<
  paths["/licenses/tokens"]["post"]["requestBody"]["content"]["application/json"]
>

export type GetLicenseTokensOptions = {
  apiClient: ApiClient
  ownerAddress?: Address
  licensorIpId?: Address
  options?: LicenseTokensOptions
  apiKey: string
}

export function getLicenseTokens({ apiClient, ownerAddress, licensorIpId, options, apiKey }: GetLicenseTokensOptions) {
  return listQuery({
    apiClient,
    path: "/licenses/tokens",
    body: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      ...options,
      where: {
        ...options?.where,
        ...(ownerAddress?.length ? { ownerAddress } : {}),
        ...(licensorIpId?.length ? { licensorIpId } : {}),
      },
    },
    apiKey,
  })
}
