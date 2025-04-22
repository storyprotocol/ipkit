import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTermOptions, useLicenseTerm } from "../useLicenseTerm"

const Example = (args: UseLicenseTermOptions) => {
  const { isLoading, data } = useLicenseTerm(args)
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
        {data?.data && (
          <tr className="sk-py-0.5">
            <td className="sk-px-2">{shortenAddress(data.data.id || "")}</td>
            <td className="sk-px-2">{shortenAddress(data.data.licenseTemplate || "")}</td>
            <td className="sk-px-2">{data.data.blockNumber || ""}</td>
            <td className="sk-px-2">{data.data.blockTime || ""}</td>
          </tr>
        )}
      </table>

      {data?.data?.terms && (
        <div>
          <h3 className="sk-font-medium sk-mb-2">License Terms</h3>
          <table className="sk-border-spacing-4">
            <tr className="sk-bg-slate-100 sk-py-0.5">
              <th className="sk-px-2" align="left">
                Term
              </th>
              <th className="sk-px-2" align="left">
                Value
              </th>
            </tr>
            {Object.entries(data.data.terms).map(([key, value]) => (
              <tr key={key} className="sk-py-0.5">
                <td className="sk-px-2">{key}</td>
                <td className="sk-px-2">{String(value)}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

const meta = {
  title: "Hooks/useLicenseTerm",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTermId: "3914",
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
