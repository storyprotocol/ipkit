import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDetailedIpLicenseTermsOptions, useDetailedIpLicenseTerms } from "../useDetailedIpLicenseTerms"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseDetailedIpLicenseTermsOptions) => {
  const { isLoading, data } = useDetailedIpLicenseTerms(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={["id", "ipId", "licenseTemplateId", "derivativesAllowed"]}
      data={data.data.map((asset) => ({
        ...asset,
        derivativesAllowed: asset.terms?.derivativesAllowed ? "Yes" : "No",
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useDetailedIpLicenseTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    ipIds: ["0x90b73C8ED8D95997B735C44CBAd04d5A486d46d1", "0x83d9303E110b88481327B979804cFAe3E1012E2b"],
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
