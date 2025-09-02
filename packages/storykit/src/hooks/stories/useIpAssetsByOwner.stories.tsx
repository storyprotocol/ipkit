import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetsByOwnerOptions, useIpAssetsByOwner } from "../useIpAssetsByOwner"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetsByOwnerOptions) => {
  const { isLoading, data } = useIpAssetsByOwner(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={["ipId", "name", "ownerAddress"]}
      data={data.data.map((asset) => ({
        ...asset,
        name: asset.nftMetadata?.name || asset.title || "",
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useIpAssetsByOwner",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ownerAddress: "0x9474F1E311671b1343118317C7691804c63eCAe6",
    includeLicenses: false,
    moderated: false,
    options: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      pagination: {
        offset: 0,
        limit: 10,
      },
    },
    queryOptions: {
      enabled: true,
    },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
