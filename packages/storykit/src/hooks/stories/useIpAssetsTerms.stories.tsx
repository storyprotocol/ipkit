import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetsTermsOptions, useIpAssetsTerms } from "../useIpAssetsTerms"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpAssetsTermsOptions) => {
  const { isLoading, data } = useIpAssetsTerms(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["ipId", "licenseTemplate", "licenseTermsId"]} data={data.data} />
}

const meta = {
  title: "Hooks/useIpAssetsTerms",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ipIds: {
      control: "object",
    },
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
    ipIds: undefined,
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
