import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseModulesOptions, useModules } from "../useModules"

const Example = (args: UseModulesOptions) => {
  const { isLoading, data } = useModules(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <tr className="sk-bg-slate-100 sk-py-0.5">
          <th className="sk-px-2" align="left">
            ID
          </th>
          <th className="sk-px-2" align="left">
            Name
          </th>
          <th className="sk-px-2" align="left">
            Module
          </th>
          <th className="sk-px-2" align="left">
            Module Type
          </th>
          <th className="sk-px-2" align="left">
            Module Type Interface ID
          </th>
          <th className="sk-px-2" align="left">
            Block Number
          </th>
          <th className="sk-px-2" align="left">
            Block Timestamp
          </th>
          <th className="sk-px-2" align="left">
            Transaction Hash
          </th>
          <th className="sk-px-2" align="left">
            Deleted At
          </th>
        </tr>
        {data?.data?.map((module) => (
          <tr key={module.id} className="sk-py-0.5">
            <td className="sk-px-2">{shortenAddress(module.id || "")}</td>
            <td className="sk-px-2">{module.name || ""}</td>
            <td className="sk-px-2">{shortenAddress(module.module || "")}</td>
            <td className="sk-px-2">{module.moduleType || ""}</td>
            <td className="sk-px-2">{shortenAddress(module.moduleTypeInterfaceId || "")}</td>
            <td className="sk-px-2">{module.blockNumber || ""}</td>
            <td className="sk-px-2">{module.blockTimestamp || ""}</td>
            <td className="sk-px-2">{shortenAddress(module.transactionHash || "")}</td>
            <td className="sk-px-2">{module.deletedAt || ""}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useModules",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: {
        limit: 10,
      },
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
