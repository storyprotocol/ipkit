import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseCollectionsOptions, useCollections } from "../useCollections"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseCollectionsOptions) => {
  const { isLoading, data } = useCollections(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["collectionAddress", "assetCount", "licensesCount"]} data={data.data} />
}

const meta = {
  title: "Hooks/useCollections",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    collectionAddresses: [],
    options: {
      pagination: { limit: 5, offset: 0 },
      orderBy: "updatedAt",
      orderDirection: "desc",
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
