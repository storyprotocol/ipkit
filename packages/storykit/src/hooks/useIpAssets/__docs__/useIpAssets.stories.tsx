import { shortenAddress } from "@/lib/utils"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpAssetOptions, useIpAssets } from "../index"

const Example = (args: UseIpAssetOptions) => {
  const { data } = useIpAssets(args)
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          ipId
        </th>
        <th className="sk-px-2" align="left">
          Name
        </th>
      </tr>
      {data?.data?.map((asset) => (
        <tr className="sk-py-0.5" key={asset.id}>
          <td className="sk-px-2">{shortenAddress(asset.ipId ?? "")}</td>
          <td className="sk-px-2">{asset.nftMetadata?.name}</td>
        </tr>
      ))}
    </table>
  )
}

const meta = {
  title: "Hooks/useIpAssets",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      control: "object",
      description: "Query options for IP assets",
      table: {
        type: {
          summary: "IP Asset Options",
          detail: `
            {
              ipAssetIds?: string[];
              orderBy?: string;
              orderDirection?: string;
              pagination?: {
                after?: string;
                before?: string;
                limit?: number;
              };
              tokenContractIds?: string[];
              tokenIds?: string[];
              where?: {
                blockNumber?: string;
                blockNumberGte?: string;
                blockNumberLte?: string;
                id?: string;
                ipId?: string;
                tokenContract?: string;
                tokenId?: string;
              };
            }
          `,
        },
      },
    },
    ipIds: {
      control: "object",
      description: "IP IDs to filter by (alternative to options.ipAssetIds)",
      table: {
        type: {
          summary: "string[]",
          detail: "Array of IP IDs to filter assets by",
        },
      },
    },
    queryOptions: {
      control: "object",
      description: "React Query options",
      table: {
        type: {
          summary: "UseQueryOptions",
          detail: "Options for the React Query hook",
        },
      },
    },
  },
  args: {
    options: {
      ipAssetIds: [],
      orderBy: "blockNumber",
      orderDirection: "desc",
      pagination: {
        limit: 10,
      },
    },
    ipIds: [],
    queryOptions: {},
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Story: Story = {
  argTypes: {},
  args: {},
}
