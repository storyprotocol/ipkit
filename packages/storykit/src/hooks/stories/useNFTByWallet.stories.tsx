import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseNFTByWalletOptions, useNFTByWallet } from "../useNFTByWallet"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseNFTByWalletOptions) => {
  const { isLoading, data } = useNFTByWallet(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <>
      {data?.ownedNfts?.map((nft, index) => (
        <DataTable
          key={index}
          fields={["name", "description", "contract.name"]}
          data={[
            {
              ...nft,
              "contract.name": nft.contract?.name || "",
            },
          ]}
        />
      ))}
    </>
  )
}

const meta = {
  title: "Hooks/useNFTByWallet",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      owner: "0x15A12c93396C059DB70E5D3fa021A2E1B94954c2",
      pageSize: 5,
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
