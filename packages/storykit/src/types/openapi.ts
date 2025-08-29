import { components, operations, paths } from "@/types/schema"

// define QueryObserverOptions here, from @tanstack/query-core, but not exported from @tanstack/react-query

type QueryKey = ReadonlyArray<unknown>

interface QueryObserverOptions<
  TQueryFnData = unknown,
  TError = Error, // eslint-disable-line @typescript-eslint/no-unused-vars
  TData = TQueryFnData, // eslint-disable-line @typescript-eslint/no-unused-vars
  TQueryData = TQueryFnData, // eslint-disable-line @typescript-eslint/no-unused-vars
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = never, // eslint-disable-line @typescript-eslint/no-unused-vars
> {
  queryKey?: TQueryKey
  queryFn?: TQueryFnData
  enabled?: boolean
  refetchInterval?: number
}

// Re-export types from generated schema
export type { components, paths, operations }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IpQueryOptions = Partial<QueryObserverOptions<any, any, any, any>>

// V4 API Types - Updated to use new schema
export type IPAsset = components["schemas"]["EnrichedIPAsset"]

export type IPAssetEdge = components["schemas"]["DerivativeRegisteredEvent"]

export type IPTransaction = components["schemas"]["IPTransaction"]

export type IPSearchResult = components["schemas"]["IPSearchResult"]

export type Collection = components["schemas"]["EnrichedCollection"]

export type CollectionMetadata = components["schemas"]["ContractMetadataByAddressResponse"]

export type License = components["schemas"]["License"]

export type LicenseTerms = components["schemas"]["LicenseTerms"]

export type LicensingConfig = components["schemas"]["LicensingConfig"]

export type NFTMetadata = components["schemas"]["NFTMetadata"]

export type InfringementStatus = components["schemas"]["InfringementStatus"]

export type ModerationStatus = components["schemas"]["ModerationStatus"]

export type ContractMetadata = components["schemas"]["ContractMetadata"]

export type Dispute = components["schemas"]["Dispute"]

export type PILTerms = LicenseTerms
