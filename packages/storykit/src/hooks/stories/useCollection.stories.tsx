import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseCollectionOptions, useCollection } from "../useCollection"

const Example = (args: UseCollectionOptions) => {
  const { isLoading, data } = useCollection(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          id
        </th>
        <th className="sk-px-2" align="left">
          assetCount
        </th>
        <th className="sk-px-2" align="left">
          licensesCount
        </th>
      </tr>
      <tr className="sk-py-0.5">
        <td className="sk-px-2">{shortenAddress(data?.data?.id || "")}</td>
        <td className="sk-px-2">{data?.data?.assetCount}</td>
        <td className="sk-px-2">{data?.data?.licensesCount}</td>
      </tr>
    </table>
  )
}

const meta = {
  title: "Hooks/useCollection",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    collectionId: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
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
