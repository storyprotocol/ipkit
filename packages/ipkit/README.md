[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://drei.pmnd.rs/) [![Version](https://img.shields.io/npm/v/@story-protocol/ipkit)](https://www.npmjs.com/package/@story-protocol/ipkit)

# IpKit

IpKit provides a number of convenient [tanstack-query](https://tanstack.com/query/latest) hooks using to quickly access access Story's on-chain data, including assets, collections, transactions and more, via the [Protocol V4 API](https://docs.story.foundation/api-reference/protocol/introduction).

## Installation

```bash
pnpm install @story-protocol/ipkit @tanstack/react-query
```

## API Keys

To use IpKit you’ll need a Story Protocol API Key, you can request an API key by completing this [form](https://forms.gle/K6enzJw3cTK5sHYU7).

There is a public API key available in the [API docs](https://docs.story.foundation/api-reference/protocol/introduction) for testing mainnet requests.

## Getting Started

### Providers

To initialize IpKit in your project, you’ll need to wrap your application in `QueryProvider` and `IpKitProvider`. The IpKit provider requires the `apiKey` as a prop. You can also choose to query the Aeneid testnet API by setting `isTestnet` to true.

```tsx
// app/Providers.tsx
"use client"

import { IpKitProvider } from "@story-protocol/ipkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// app/Providers.tsx

// app/Providers.tsx

// app/Providers.tsx

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <IpKitProvider apiKey="YOUR_API_KEY">{children}</IpKitProvider>
    </QueryClientProvider>
  )
}
```

#### Data Hooks

You can now use the IpKit hooks to fetch IP data. Hooks return a [tanstack-query](https://tanstack.com/query/latest) `useQuery` function, in each hook you can pass [useQuery options](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery) via the `queryOptions` property.

For hooks that return lists, for example `useIpAssets`, you can pass the [POST requests body](https://docs.story.foundation/api-reference/protocol-v4/list-ip-assets) options via the `options` parameter.

For convenience, hooks expose the most commonly required body options in their parameters:

```tsx
// simple use case
const { data, isLoading } = useIpAssets()
```

```tsx
// fetch a collections assets
const { data, isLoading } = useIpAssets({ tokenContract: "0x123" })
```

```tsx
// fetch a using options and queryOptions
const { data, isLoading } = useIpAssets({
  queryOptions: {
    enabled: true,
    refetchInterval: 1000,
  },
  options: {
    pagination: {
      limit: 10,
      offset: 0,
    },
    orderBy: "descendantCount",
    where: {
      ownerAddress: "0x123",
    },
  },
})
```

```tsx
// fetch a single asset
const { data, isLoading } = useIpAsset({ ipId: "0x123" })
```

See the storybook for more details for each hook. The full list of hooks are:

- [useCollection]()
- [useCollections]()
- [useDispute]()
- [useDisputes]()
- [useIpAsset]()
- [useIpAssetChildren]()
- [useIpAssetEdges]()
- [useIpAssetLicenses]()
- [useIpAssetParents]()
- [useIpAssets]()
- [useIpAssetsByOwner]()
- [useSearch]()
- [useTransaction]()
- [useTransactions]()

#### useIpKit

You can also use the `useIpKit` hook to access data such as `apiBaseUrl`, `apiClient` (an [openapi-fetch](https://openapi-ts.dev/openapi-fetch/) client) and `chain` which includes chain data such as `id`, `name`, `rpcUrl` and `blockExplorerUrl`. View the full list in [storybook](https://ipkit.vercel.app/?path=/docs/providers-ipkitprovider--docs).

```tsx
const { apiBaseUrl, chain } = useIpKit()
const { id, name, rpcUrl } = chain
```

#### Request functions

IpKit also exposes the functions used by each hook in case you require more flexibility, SSR or want to use a different kind of Tanstack Query hook. Since they're using openapi-fetch, each function requires both `apiKey` and the `apiClient`.

Create an API client with the `createApiClient` or export one for testnet or mainnet from IpKit.

```tsx
import { createApiClient } from "@story-protocol/ipkit"

const client = createApiClient(`https://api.storyapis.com/api/v4/`)
const assets = await getIpAssets({ apiKey: YOUR_API_KEY, apiClient: client })
```

```tsx
import { stagingClient } from "@story-protocol/ipkit"

const assets = await getIpAssets({
  apiKey: YOUR_API_KEY,
  apiClient: stagingClient,
  ipIds: ["0x123"],
})
```

These functions also expose some of the POST request body options as function input for convenience. The full list of exported functions are:

- `getCollections`
- `getDispute`
- `getDisputes`
- `getIpAssetEdges`
- `getIpAssets`
- `getSearch`
- `getTransactions`

#### SSR

If you want to use IpKit in a server component you should import from `@story-protocol/ipkit/server`, this also exports all the api functions and types, but omits hooks and providers which won't work server-side.

#### TypeScript

IpKit uses [OpenAPI](https://www.openapis.org/) and [openapi-typescript](https://openapi-ts.dev/) to ensure up-to-date and consistent types, in-line with the API.

IpKit exports all the IP data types you would expect including:

`IPAsset` `IPAssetEdge` `IPTransaction` `IPSearchResult` `Collection` `CollectionMetadata` `License` `LicenseTerms` `LicensingConfig` `NFTMetadata` `InfringementStatus` `ModerationStatus` `ContractMetadata` `Dispute` `TransactionEventType`

The available options for each hook are exported as `[hookName]Options`, for example `UseIpAssetsOptions`

```ts
type UseIpAssetsOptions = {
  ipIds?: Address[]
  tokenContract?: Address
  includeLicenses?: boolean
  moderated?: boolean
  options?: IpAssetsOptions
  queryOptions?: IpQueryOptions
}
```

The options for each API request are exported as `[nameOfDataType]Options` for example `IpAssetsOptions`.

```ts
type IpAssetsOptions = {
  includeLicenses?: boolean
  moderated?: boolean
  orderBy?: "blockNumber" | "descendantCount" | "createdAt"
  orderDirection?: "desc" | "asc"
  pagination?: { limit: number; offset: number }
  where?: {
    ipIds?: string[] | null
    ownerAddress?: string
    tokenContract?: string
  }
}
```
