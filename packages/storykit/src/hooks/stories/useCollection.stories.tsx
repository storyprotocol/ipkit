import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseCollectionOptions, useCollection } from "../useCollection"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseCollectionOptions) => {
  const { isLoading, data } = useCollection(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "assetCount", "licensesCount"]} data={[data.data]} />
}

const meta = {
  title: "Hooks/useCollection",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    collectionId: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
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
