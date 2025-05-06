import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetTermsOptions, useIpAssetTerms } from "../useIpAssetTerms"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetTermsOptions) => {
  const { isLoading, data } = useIpAssetTerms(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["ipId", "licenseTemplate", "licenseTermsId"]} data={data.data} />
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
