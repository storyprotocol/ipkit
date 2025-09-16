import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTokensOptions, useLicenseTokens } from "../useLicenseTokens"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseTokensOptions) => {
  const { isLoading, data } = useLicenseTokens(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={["id", "owner", "licensorIpId", "licenseTemplate", "licenseTermsId", "transferable"]}
      data={data.data}
    />
  )
}

const meta = {
  title: "Hooks/useLicenseTokens",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ownerAddress: {
      control: "text",
    },
    licensorIpId: {
      control: "text",
    },
  },
  args: {
    ownerAddress: "0x9474F1E311671b1343118317C7691804c63eCAe6",
    licensorIpId: undefined,
    options: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      pagination: {
        offset: 0,
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

export const WithLicensorFilter: Story = {
  args: {
    licensorIpId: "0xE760E4c9486FE0C81E75f1a7e50D82EFD7625E73",
  },
}
