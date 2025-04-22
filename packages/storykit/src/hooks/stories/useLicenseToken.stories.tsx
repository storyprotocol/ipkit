import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTokenOptions, useLicenseToken } from "../useLicenseToken"

const Example = (args: UseLicenseTokenOptions) => {
  const { isLoading, data } = useLicenseToken(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <tr className="sk-bg-slate-100 sk-py-0.5">
          <th className="sk-px-2" align="left">
            ID
          </th>
          <th className="sk-px-2" align="left">
            License Template
          </th>
          <th className="sk-px-2" align="left">
            License Terms ID
          </th>
          <th className="sk-px-2" align="left">
            Licensor IP ID
          </th>
          <th className="sk-px-2" align="left">
            Owner
          </th>
          <th className="sk-px-2" align="left">
            Transferable
          </th>
          <th className="sk-px-2" align="left">
            Burnt At
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
            <td className="sk-px-2">{shortenAddress(data.data.licenseTemplate || "")}</td>
            <td className="sk-px-2">{shortenAddress(data.data.licenseTermsId || "")}</td>
            <td className="sk-px-2">{shortenAddress(data.data.licensorIpId || "")}</td>
            <td className="sk-px-2">{shortenAddress(data.data.owner || "")}</td>
            <td className="sk-px-2">{data.data.transferable ? "Yes" : "No"}</td>
            <td className="sk-px-2">{data.data.burntAt || ""}</td>
            <td className="sk-px-2">{data.data.blockNumber || ""}</td>
            <td className="sk-px-2">{data.data.blockTime || ""}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useLicenseToken",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTokenId: "11264",
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
