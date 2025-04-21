import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetsOptions, useIpAssets } from "../useIpAssets"

const Example = (args: UseIpAssetsOptions) => {
  const { isLoading, data } = useIpAssets(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          ipId
        </th>
      </tr>
      {data?.data?.map((asset) => (
        <tr className="sk-py-0.5" key={asset.id}>
          <td className="sk-px-2">{asset.ipId}</td>
        </tr>
      ))}
    </table>
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
