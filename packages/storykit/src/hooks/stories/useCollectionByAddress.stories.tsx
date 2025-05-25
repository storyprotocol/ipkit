import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseCollectionByAddressOptions, useCollectionByAddress } from "../useCollectionByAddress"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseCollectionByAddressOptions) => {
  const { isLoading, data } = useCollectionByAddress(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return <DataTable fields={["name", "symbol", "totalSupply"]} data={[data]} />
}

const meta = {
  title: "Hooks/useCollectionByAddress",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    contractAddress: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
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
