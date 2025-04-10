import type { paths } from "@storykit/api-schema"

export type IPAssetResponse = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]
export type IPAsset = IPAssetResponse["data"]
export type IPAssetMetadata =
  paths["/api/v3/assets/{assetId}/metadata"]["get"]["responses"][200]["content"]["application/json"]
