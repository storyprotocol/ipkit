import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetsOptions, useIpAssets } from "../useIpAssets"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetsOptions) => {
  const { isLoading, data } = useIpAssets(args)
  const fields = ["ipId", "name"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={data.data.map((asset) => ({
        ...asset,
        name: asset.nftMetadata?.name || "",
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useIpAssets",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      pagination: {
        after: undefined,
        before: undefined,
        limit: 10,
      },
    },
    ipIds: [],
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
