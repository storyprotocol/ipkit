import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetLicensesOptions, useIpAssetLicenses } from "../useIpAssetLicenses"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetLicensesOptions) => {
  const { isLoading, data } = useIpAssetLicenses(args)

  if (isLoading) return <>loading...</>
  if (!data || !Array.isArray(data) || data.length === 0) return <>none found</>

  return (
    <DataTable
      fields={["licenseTemplateId", "licenseTermsId", "templateName"]}
      data={data.map((license) => ({
        ...license,
        templateName: license.templateName || "Unknown",
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useIpAssetLicenses",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipId: "0xE760E4c9486FE0C81E75f1a7e50D82EFD7625E73",
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
