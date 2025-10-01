import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetChildrenOptions, useIpAssetChildren } from "../useIpAssetChildren"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetChildrenOptions) => {
  const { isLoading, data } = useIpAssetChildren(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["childIpId", "parentIpId", "licenseTemplate", "licenseTermsId"]} data={data.data} />
}

const meta = {
  title: "Hooks/useIpAssetChildren",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipId: "0xE760E4c9486FE0C81E75f1a7e50D82EFD7625E73",
    options: {
      pagination: { limit: 5, offset: 0 },
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
