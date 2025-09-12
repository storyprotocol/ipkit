import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetOptions, useIpAsset } from "../useIpAsset"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetOptions) => {
  const { isLoading, data } = useIpAsset(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <DataTable
      fields={["ipId", "name"]}
      data={[
        {
          ...data,
          name: data?.nftMetadata?.name,
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
    ipId: "0xE760E4c9486FE0C81E75f1a7e50D82EFD7625E73",
    includeLicenses: true,
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
