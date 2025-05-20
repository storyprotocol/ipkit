import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicensesTermsOptions, useLicensesTerms } from "../useLicensesTerms"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicensesTermsOptions) => {
  const { isLoading, data } = useLicensesTerms(args)
  const mainFields = ["id", "licenseTemplate", "commercialAttribution", "commercialUse", "derivativesAllowed"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <div className="sk-space-y-4">
      <DataTable
        fields={mainFields}
        data={data.data.map((term) => ({
          ...term,
          commercialAttribution: term.terms?.commercialAttribution ? "Yes" : "No",
          commercialUse: term.terms?.commercialUse ? "Yes" : "No",
          derivativesAllowed: term.terms?.derivativesAllowed ? "Yes" : "No",
        }))}
      />
    </div>
  )
}

const meta = {
  title: "Hooks/useLicensesTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: {
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
