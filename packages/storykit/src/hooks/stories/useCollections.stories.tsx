import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseCollectionsOptions, useCollections } from "../useCollections"

const Example = (args: UseCollectionsOptions) => {
  const { isLoading, data } = useCollections(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <tr className="sk-bg-slate-100 sk-py-0.5">
          <th className="sk-px-2" align="left">
            ID
          </th>
          <th className="sk-px-2" align="left">
            Asset Count
          </th>
          <th className="sk-px-2" align="left">
            Licenses Count
          </th>
          <th className="sk-px-2" align="left">
            Block Number
          </th>
          <th className="sk-px-2" align="left">
            Block Timestamp
          </th>
        </tr>
        {data?.data?.map((collection, index) => (
          <tr key={index} className="sk-py-0.5">
            <td className="sk-px-2">{shortenAddress(collection.id || "")}</td>
            <td className="sk-px-2">{collection.assetCount}</td>
            <td className="sk-px-2">{collection.licensesCount}</td>
            <td className="sk-px-2">{collection.blockNumber}</td>
            <td className="sk-px-2">{collection.blockTimestamp}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useCollections",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: { limit: 5 },
      orderBy: "blockNumber",
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
