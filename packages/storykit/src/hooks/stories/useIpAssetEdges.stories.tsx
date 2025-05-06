import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetEdgesOptions, useIpAssetEdges } from "../useIpAssetEdges"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetEdgesOptions) => {
  const { isLoading, data } = useIpAssetEdges(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["ipId", "parentIpId", "licenseTemplate", "licenseTermsId"]} data={data.data} />
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
