import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetMetadataOptions, useIpAssetMetadata } from "../useIpAssetMetadata"
import { CopyText } from "./(components)/CopyText"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetMetadataOptions) => {
  const { isLoading, data } = useIpAssetMetadata(args)
  const fields = ["id", "metadataUri"]

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={[
        {
          ...data,
          metadataUri: <CopyText label={shortenAddress(data.metadataUri || "", 20)} value={data.metadataUri || ""} />,
        },
      ]}
    />
  )
}

const meta = {
  title: "Hooks/useIpAssetMetadata",
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
