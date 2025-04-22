import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseModuleOptions, useModule } from "../useModule"

const Example = (args: UseModuleOptions) => {
  const { isLoading, data } = useModule(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <tr className="sk-bg-slate-100 sk-py-0.5">
          <th className="sk-px-2" align="left">
            Field
          </th>
          <th className="sk-px-2" align="left">
            Value
          </th>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">ID</td>
          <td className="sk-px-2">{shortenAddress(data?.data?.id || "")}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Name</td>
          <td className="sk-px-2">{data?.data?.name || ""}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Module</td>
          <td className="sk-px-2">{shortenAddress(data?.data?.module || "")}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Module Type</td>
          <td className="sk-px-2">{data?.data?.moduleType || ""}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Module Type Interface ID</td>
          <td className="sk-px-2">{shortenAddress(data?.data?.moduleTypeInterfaceId || "")}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Block Number</td>
          <td className="sk-px-2">{data?.data?.blockNumber || ""}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Block Timestamp</td>
          <td className="sk-px-2">{data?.data?.blockTimestamp || ""}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Transaction Hash</td>
          <td className="sk-px-2">{shortenAddress(data?.data?.transactionHash || "")}</td>
        </tr>
        <tr className="sk-py-0.5">
          <td className="sk-px-2 sk-font-medium">Deleted At</td>
          <td className="sk-px-2">{data?.data?.deletedAt || ""}</td>
        </tr>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useModule",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    moduleId: "0x69D3a7aa9edb72Bc226E745A7cCdd50D947b69Ac",
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
