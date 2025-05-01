import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetsTermsOptions, useIpAssetsTerms } from "../useIpAssetsTerms"

const Example = (args: UseIpAssetsTermsOptions) => {
  const { isLoading, data } = useIpAssetsTerms(args)

  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
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
          {data?.data?.map((term, index) => (
            <tr key={index} className="sk-py-0.5">
              <td className="sk-px-2">{shortenAddress(term.ipId || "")}</td>
              <td className="sk-px-2">{shortenAddress(term.licenseTemplate || "")}</td>
              <td className="sk-px-2">{shortenAddress(term.licenseTermsId || "")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useIpAssetsTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ipIds: {
      control: "object",
    },
  },
  args: {
    options: {
      pagination: { limit: 5 },
      orderBy: "blockNumber",
      orderDirection: "desc",
    },
    queryOptions: {
      enabled: true,
    },
    ipIds: undefined,
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
