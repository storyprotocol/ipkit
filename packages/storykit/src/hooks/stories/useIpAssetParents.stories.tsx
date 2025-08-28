import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetParentsOptions, useIpAssetParents } from "../useIpAssetParents"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetParentsOptions) => {
  const { isLoading, data } = useIpAssetParents(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["childIpId", "parentIpId", "licenseTemplate", "licenseTermsId"]} data={data.data} />
}

const meta = {
  title: "Hooks/useIpAssetParents",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipId: "0x8FE1843eCB8c5d6A6427c82Bc0218dF8e5dc3ff0",
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
