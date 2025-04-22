import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTemplateOptions, useLicenseTemplate } from "../useLicenseTemplate"

const Example = (args: UseLicenseTemplateOptions) => {
  const { isLoading, data } = useLicenseTemplate(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          ID
        </th>
        <th className="sk-px-2" align="left">
          Name
        </th>
        <th className="sk-px-2" align="left">
          Metadata URI
        </th>
        <th className="sk-px-2" align="left">
          Block Number
        </th>
        <th className="sk-px-2" align="left">
          Block Time
        </th>
      </tr>
      {data?.data && (
        <tr className="sk-py-0.5">
          <td className="sk-px-2">{shortenAddress(data.data.id || "")}</td>
          <td className="sk-px-2">{data.data.name || ""}</td>
          <td className="sk-px-2">{data.data.metadataUri || ""}</td>
          <td className="sk-px-2">{data.data.blockNumber || ""}</td>
          <td className="sk-px-2">{data.data.blockTime || ""}</td>
        </tr>
      )}
    </table>
  )
}

const meta = {
  title: "Hooks/useLicenseTemplate",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTemplateId: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
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
