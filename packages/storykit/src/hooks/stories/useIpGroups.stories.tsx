import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpGroupsOptions, useIpGroups } from "../useIpGroups"

const Example = (args: UseIpGroupsOptions) => {
  const { isLoading, data } = useIpGroups(args)

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
              IP Count
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((group, index) => (
            <tr key={index} className="sk-py-0.5">
              <td className="sk-px-2">{shortenAddress(group.group_id || "")}</td>
              <td className="sk-px-2">{group.ip_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useIpGroups",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: { limit: 5 },
      orderBy: "groupId",
      orderDirection: "desc",
    },
    queryOptions: {
      enabled: true,
    },
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
