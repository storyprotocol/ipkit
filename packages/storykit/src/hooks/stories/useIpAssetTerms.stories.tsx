import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetTermsOptions, useIpAssetTerms } from "../useIpAssetTerms"

const Example = (args: UseIpAssetTermsOptions) => {
  const { isLoading, data } = useIpAssetTerms(args)

  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <thead>
        <tr className="sk-bg-slate-100 sk-py-0.5">
          <th className="sk-px-2" align="left">
            Ip Id
          </th>
          <th className="sk-px-2" align="left">
            License Template
          </th>
          <th className="sk-px-2" align="left">
            License Terms Id
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((terms, index) => (
          <tr className="sk-py-0.5" key={index}>
            <td className="sk-px-2">{shortenAddress(terms.ipId || "")}</td>
            <td className="sk-px-2">{shortenAddress(terms.licenseTemplate || "")}</td>
            <td className="sk-px-2">{terms.licenseTermsId || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const meta = {
  title: "Hooks/useIpAssetTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipId: "0xD4128fD30640C8b3822E3A33EB2c672e955B772d",
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
