import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetOptions, useIpAsset } from "../useIpAsset"

const Example = (args: UseIpAssetOptions) => {
  const { isLoading, data } = useIpAsset(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-py-0.5">
        <td className="sk-px-2">{shortenAddress(data?.data?.ipId || "")}</td>
        <td className="sk-px-2">{data?.data?.nftMetadata?.name}</td>
      </tr>
    </table>
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
