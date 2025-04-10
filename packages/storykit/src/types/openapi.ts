import type { paths } from "@storykit/api-schema"

export type Asset = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]["data"]
