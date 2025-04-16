import { getQuery } from "./getQuery"

export function getIpAsset({ ipId, chainName, apiKey }: { ipId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  })
}
