import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetMetadataOptions, useIpAssetMetadata } from "../useIpAssetMetadata"

const Example = (args: UseIpAssetMetadataOptions) => {
  const { isLoading, data } = useIpAssetMetadata(args)
  if (isLoading) return <>loading...</>
  return (
    <div>
      {data?.metadataUri ? (
        <a href={data?.metadataUri} target="_blank" rel="noopener noreferrer" className="sk-underline">
          {data?.metadataUri}
        </a>
      ) : (
        "no uri found"
      )}
    </div>
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

export const Select: Story = {
  args: {},
}
