import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseSearchOptions, useSearch } from "../useSearch"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseSearchOptions) => {
  const { isLoading, data } = useSearch(args)

  if (isLoading) return <>loading...</>
  if (!data?.data || !args.query.length) return <>none found</>

  return <DataTable fields={["ipId", "title", "description"]} data={data.data} />
}

const meta = {
  title: "Hooks/useSearch",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    query: "art",
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const ImageSearch: Story = {
  args: {
    query: "digital art",
    mediaType: "image",
  },
}

export const VideoSearch: Story = {
  args: {
    query: "music video",
    mediaType: "video",
  },
}
