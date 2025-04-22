import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTermsOptions, useLicenseTerms } from "../useLicenseTerms"

const Example = (args: UseLicenseTermsOptions) => {
  const { isLoading, data } = useLicenseTerms(args)
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
            Block Number
          </th>
          <th className="sk-px-2" align="left">
            Block Time
          </th>
        </tr>
        {data?.data?.map((licenseTerm) => (
          <tr key={licenseTerm.id} className="sk-py-0.5">
            <td className="sk-px-2">{shortenAddress(licenseTerm.id || "")}</td>
            <td className="sk-px-2">{shortenAddress(licenseTerm.licenseTemplate || "")}</td>
            <td className="sk-px-2">{licenseTerm.blockNumber || ""}</td>
            <td className="sk-px-2">{licenseTerm.blockTime || ""}</td>
          </tr>
        ))}
      </table>

      {data?.data?.map(
        (licenseTerm) =>
          licenseTerm.terms && (
            <div key={licenseTerm.id}>
              <h3 className="sk-font-medium sk-mb-2">License Terms for {shortenAddress(licenseTerm.id || "")}</h3>
              <table className="sk-border-spacing-4">
                <tr className="sk-bg-slate-100 sk-py-0.5">
                  <th className="sk-px-2" align="left">
                    Term
                  </th>
                  <th className="sk-px-2" align="left">
                    Value
                  </th>
                </tr>
                {Object.entries(licenseTerm.terms).map(([key, value]) => (
                  <tr key={key} className="sk-py-0.5">
                    <td className="sk-px-2">{key}</td>
                    <td className="sk-px-2">{String(value)}</td>
                  </tr>
                ))}
              </table>
            </div>
          )
      )}
    </div>
  )
}

const meta = {
  title: "Hooks/useLicenseTerms",
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
