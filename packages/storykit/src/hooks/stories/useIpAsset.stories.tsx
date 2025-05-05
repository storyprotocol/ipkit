import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetOptions, useIpAsset } from "../useIpAsset"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetOptions) => {
  const { isLoading, data } = useIpAsset(args)
  const fields = ["ipId", "name"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={[
        {
          ...data.data,
          name: data.data.nftMetadata?.name || "",
        },
      ]}
    />
  )
}

const meta = {
  title: "Hooks/useIpAsset",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipId: "0xD4128fD30640C8b3822E3A33EB2c672e955B772d",
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
