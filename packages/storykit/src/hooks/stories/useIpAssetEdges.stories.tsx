import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetEdgesOptions, useIpAssetEdges } from "../useIpAssetEdges"

const Example = (args: UseIpAssetEdgesOptions) => {
  const { isLoading, data } = useIpAssetEdges(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-space-y-4">
      <table className="sk-border-spacing-4">
        <thead>
          <tr className="sk-bg-slate-100 sk-py-0.5">
            <th className="sk-px-2" align="left">
              IP ID
            </th>
            <th className="sk-px-2" align="left">
              Parent IP ID
            </th>
            <th className="sk-px-2" align="left">
              License Template
            </th>
            <th className="sk-px-2" align="left">
              License Terms ID
            </th>
            <th className="sk-px-2" align="left">
              Block Number
            </th>
            <th className="sk-px-2" align="left">
              Block Time
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((edge, index) => (
            <tr key={index} className="sk-py-0.5">
              <td className="sk-px-2">{shortenAddress(edge.ipId || "")}</td>
              <td className="sk-px-2">{shortenAddress(edge.parentIpId || "")}</td>
              <td className="sk-px-2">{shortenAddress(edge.licenseTemplate || "")}</td>
              <td className="sk-px-2">{edge.licenseTermsId}</td>
              <td className="sk-px-2">{edge.blockNumber}</td>
              <td className="sk-px-2">{edge.blockTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useIpAssetEdges",
  component: Example,
  parameters: {
    layout: "centered",
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
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
