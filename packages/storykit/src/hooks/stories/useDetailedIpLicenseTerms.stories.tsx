import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDetailedIpLicenseTermsOptions, useDetailedIpLicenseTerms } from "../useDetailedIpLicenseTerms"

const Example = (args: UseDetailedIpLicenseTermsOptions) => {
  const { isLoading, data } = useDetailedIpLicenseTerms(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          Id
        </th>
        <th className="sk-px-2" align="left">
          Ip Id
        </th>
        <th className="sk-px-2" align="left">
          License Template Id
        </th>
        <th className="sk-px-2" align="left">
          Derivatives Allowed
        </th>
      </tr>
      {data?.data?.map((asset) => (
        <tr className="sk-py-0.5" key={asset.id}>
          <td className="sk-px-2">{shortenAddress(asset.id || "")}</td>
          <td className="sk-px-2">{shortenAddress(asset.ipId || "")}</td>
          <td className="sk-px-2">{shortenAddress(asset.licenseTemplateId || "")}</td>
          <td className="sk-px-2">{asset.terms?.derivativesAllowed ? "Yes" : "No"}</td>
        </tr>
      ))}
    </table>
  )
}

const meta = {
  title: "Hooks/useDetailedIpLicenseTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipIds: ["0x90b73C8ED8D95997B735C44CBAd04d5A486d46d1", "0x83d9303E110b88481327B979804cFAe3E1012E2b"],
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
