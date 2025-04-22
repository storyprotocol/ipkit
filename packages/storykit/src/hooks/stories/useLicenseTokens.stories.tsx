import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTokensOptions, useLicenseTokens } from "../useLicenseTokens"

const Example = (args: UseLicenseTokensOptions) => {
  const { isLoading, data } = useLicenseTokens(args)
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
        {data?.data?.map((licenseToken) => (
          <tr key={licenseToken.id} className="sk-py-0.5">
            <td className="sk-px-2">{shortenAddress(licenseToken.id || "")}</td>
            <td className="sk-px-2">{shortenAddress(licenseToken.licenseTemplate || "")}</td>
            <td className="sk-px-2">{shortenAddress(licenseToken.licenseTermsId || "")}</td>
            <td className="sk-px-2">{shortenAddress(licenseToken.licensorIpId || "")}</td>
            <td className="sk-px-2">{shortenAddress(licenseToken.owner || "")}</td>
            <td className="sk-px-2">{licenseToken.transferable ? "Yes" : "No"}</td>
            <td className="sk-px-2">{licenseToken.burntAt || ""}</td>
            <td className="sk-px-2">{licenseToken.blockNumber || ""}</td>
            <td className="sk-px-2">{licenseToken.blockTime || ""}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useLicenseTokens",
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
