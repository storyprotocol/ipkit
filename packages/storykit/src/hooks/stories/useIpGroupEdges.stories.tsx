import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpGroupEdgesOptions, useIpGroupEdges } from "../useIpGroupEdges"

const Example = (args: UseIpGroupEdgesOptions) => {
  const { isLoading, data } = useIpGroupEdges(args)

  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <thead>
          <tr className="sk-bg-slate-100 sk-py-0.5">
            <th className="sk-px-2" align="left">
              Group ID
            </th>
            <th className="sk-px-2" align="left">
              IP ID
            </th>
            <th className="sk-px-2" align="left">
              Block Number
            </th>
            <th className="sk-px-2" align="left">
              Block Time
            </th>
            <th className="sk-px-2" align="left">
              Transaction Hash
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((edge, index) => (
            <tr key={index} className="sk-py-0.5">
              <td className="sk-px-2">{shortenAddress(edge.group_id || "")}</td>
              <td className="sk-px-2">{shortenAddress(edge.ip_id || "")}</td>
              <td className="sk-px-2">{edge.block_number}</td>
              <td className="sk-px-2">{edge.block_time}</td>
              <td className="sk-px-2">{shortenAddress(edge.transaction_hash || "")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useIpGroupEdges",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    groupId: {
      control: "text",
    },
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
    groupId: undefined,
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
