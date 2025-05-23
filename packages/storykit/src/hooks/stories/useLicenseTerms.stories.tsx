import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTermsOptions, useLicenseTerms } from "../useLicenseTerms"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseTermsOptions) => {
  const { isLoading, data } = useLicenseTerms(args)
  const mainFields = ["id", "licenseTemplate", "commercialAttribution", "commercialUse", "derivativesAllowed"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <div className="sk-space-y-4">
      <DataTable
        fields={mainFields}
        data={[
          {
            ...data.data,
            commercialAttribution: data.data.terms?.commercialAttribution ? "Yes" : "No",
            commercialUse: data.data.terms?.commercialUse ? "Yes" : "No",
            derivativesAllowed: data.data.terms?.derivativesAllowed ? "Yes" : "No",
          },
        ]}
      />
    </div>
  )
}

const meta = {
  title: "Hooks/useLicenseTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTermId: "3914",
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
