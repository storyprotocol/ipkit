import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTemplatesOptions, useLicenseTemplates } from "../useLicenseTemplates"

const Example = (args: UseLicenseTemplatesOptions) => {
  const { isLoading, data } = useLicenseTemplates(args)
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
      {data?.data?.map((template) => (
        <tr key={template.id} className="sk-py-0.5">
          <td className="sk-px-2">{shortenAddress(template.id || "")}</td>
          <td className="sk-px-2">{template.name || ""}</td>
          <td className="sk-px-2">{template.metadataUri || ""}</td>
          <td className="sk-px-2">{template.blockNumber || ""}</td>
          <td className="sk-px-2">{template.blockTime || ""}</td>
        </tr>
      ))}
    </table>
  )
}

const meta = {
  title: "Hooks/useLicenseTemplates",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: {
        limit: 5,
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
