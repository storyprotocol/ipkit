import { STORY_IP_ASSETS, STORY_IP_ASSETS_MAP } from "@/stories/data"
import licenseData from "@/tests/data/0x5FCeDadBbDF710Ac3C528F6Aac9D1bD9ac18D9a8-license.json"
import ipaPolicyData from "@/tests/data/0x195A5B433bbFb6481490cA12d1C95e5594Fb54C4-ipapolicy.json"
import policyData from "@/tests/data/0x195A5B433bbFb6481490cA12d1C95e5594Fb54C4-policy.json"
import assetData from "@/tests/data/0x7907Cec258B28638FCA15d533800B2A13bd1f140-asset.json"
import nftData from "@/tests/data/0x7907Cec258B28638FCA15d533800B2A13bd1f140-nft.json"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, waitFor, within } from "@storybook/test"
import React from "react"

import Example, { AssetComponent, IPLicenseComponent, LicenseComponent, LicenseTermsComponent } from "./Example"

const meta = {
  title: "Providers/IpProvider",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ipId: {
      control: {
        type: "select",
      },
      options: STORY_IP_ASSETS,
      mapping: STORY_IP_ASSETS_MAP,
    },
  },
  args: {
    ipId: STORY_IP_ASSETS[0],
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {},
}
export const Input: Story = {
  argTypes: {
    ipId: { control: "text" },
    children: { control: false },
  },
  args: {
    ipId: STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[0]],
  },
}
export const NFTData: Story = {
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Fetching NFT...")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await waitFor(
      () => {
        expect(canvas.getByTestId("nft-id").textContent).toBe(nftData.nft_id)
        expect(canvas.getByTestId("nft-chain").textContent).toBe(nftData.chain)
        expect(canvas.getByTestId("nft-contract-address").textContent).toBe(nftData.contract_address)
        expect(canvas.getByTestId("nft-token-id").textContent).toBe(nftData.token_id)
        expect(canvas.getByTestId("nft-name").textContent).toBe(nftData.name)
        expect(canvas.getByTestId("nft-description").textContent).toBe(nftData.description)
      },
      { timeout: 10000 }
    )
  },
}
export const AssetData: Story = {
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  args: {
    children: <AssetComponent />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Fetching Asset...")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await waitFor(
      () => {
        expect(canvas.getByTestId("asset-id").textContent).toBe(assetData.data.id)
        expect(canvas.getByTestId("asset-nft-name").textContent).toBe(assetData.data.nftMetadata.name)
        expect(canvas.getByTestId("asset-nft-chain").textContent).toBe(assetData.data.nftMetadata.chainId)
        expect(canvas.getByTestId("asset-nft-token-contract").textContent).toBe(
          assetData.data.nftMetadata.tokenContract
        )
        expect(canvas.getByTestId("asset-nft-token-id").textContent).toBe(assetData.data.nftMetadata.tokenId)
        expect(canvas.getByTestId("asset-token-uri").textContent).toBe(assetData.data.nftMetadata.tokenUri)
        expect(canvas.getByTestId("asset-nft-image-url").textContent).toBe(assetData.data.nftMetadata.imageUrl)
        const rootIps = canvas.getAllByTestId("asset-root-ip").map((el) => el.textContent)
        const expctedRootIps = assetData.data.rootIpIds
        expect(rootIps).toStrictEqual(expctedRootIps)
        const parentIps = canvas.getAllByTestId("asset-parent-ip").map((el) => el.textContent)
        const expctedParentIps = assetData.data.parentIpIds
        expect(parentIps).toStrictEqual(expctedParentIps)
        const childIps = canvas.getAllByTestId("asset-child-ip").map((el) => el.textContent)
        const expctedChildIps = assetData.data.childIpIds
        expect(childIps).toStrictEqual(expctedChildIps)
      },
      { timeout: 10000 }
    )
  },
}
export const IPLicenseData: Story = {
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  args: {
    children: <IPLicenseComponent />,
    options: { licenseTermsData: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Fetching IPLicense...")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await waitFor(
      () => {
        const elements = canvas.getAllByTestId("ipalicense-id")
        expect(elements.length, "Number of IPLicense should be equal to the API's").toBe(ipaPolicyData.data.length)
        for (let i = 0; i < elements.length; i++) {
          expect(elements[i].textContent).toBe(ipaPolicyData.data[i].id)
          expect(canvas.getAllByTestId("ipalicense-ip-id")[i].textContent).toBe(ipaPolicyData.data[i].ipId)
          expect(canvas.getAllByTestId("ipalicense-template")[i].textContent).toBe(
            ipaPolicyData.data[i].licenseTemplate
          )
          expect(canvas.getAllByTestId("ipalicense-terms-id")[i].textContent).toBe(ipaPolicyData.data[i].licenseTermsId)
        }
      },
      { timeout: 10000 }
    )
  },
}
export const LicenseTermsData: Story = {
  argTypes: {},
  args: {
    children: <LicenseTermsComponent />,
    options: { licenseTermsData: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Fetching License Terms...")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await waitFor(
      () => {
        const elements = canvas.getAllByTestId("license-id")
        expect(elements.length, "Number of licenses should be equal to the API's").toBe(policyData.data.length)
        for (let i = 0; i < elements.length; i++) {
          expect(elements[i].textContent).toBe(policyData.data[i].id)
          expect(canvas.getAllByTestId("license-template")[i].textContent).toBe(policyData.data[i].licenseTemplate)
          const terms = policyData.data[i].licenseTerms
          const commUse = terms.find((term) => term.trait_type === "Commercial Use")?.value
          const commAttr = terms.find((term) => term.trait_type === "Commercial Attribution")?.value
          const commShare = terms.find((term) => term.trait_type === "Commercial Revenue Share")?.value.toString()
          const derivAllow = terms.find((term) => term.trait_type === "Derivatives Allowed")?.value
          expect(canvas.getAllByTestId("license-comm-use")[i].textContent).toBe(commUse)
          expect(canvas.getAllByTestId("license-comm-attr")[i].textContent).toBe(commAttr)
          expect(canvas.getAllByTestId("license-comm-share")[i].textContent).toBe(commShare)
          expect(canvas.getAllByTestId("license-deriv-allow")[i].textContent).toBe(derivAllow)
        }
      },
      { timeout: 10000 }
    )
  },
}
export const LicenseData: Story = {
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  args: {
    children: <LicenseComponent />,
    options: { licenseData: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Fetching License...")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await waitFor(
      () => {
        const elements = canvas.getAllByTestId("license-id")
        expect(elements.length, "Number of licenses should be equal to the API's").toBe(licenseData.data.length)
        for (let i = 0; i < elements.length; i++) {
          expect(elements[i].textContent).toBe(licenseData.data[i].id)
          expect(canvas.getAllByTestId("license-ipid")[i].textContent).toBe(licenseData.data[i].licensorIpId)
          expect(canvas.getAllByTestId("license-template")[i].textContent).toBe(licenseData.data[i].licenseTemplate)
          expect(canvas.getAllByTestId("license-terms")[i].textContent).toBe(licenseData.data[i].licenseTermsId)
          expect(canvas.getAllByTestId("license-transfer")[i].textContent).toBe(licenseData.data[i].transferable)
          expect(canvas.getAllByTestId("license-owner")[i].textContent).toBe(licenseData.data[i].owner)
          expect(canvas.getAllByTestId("license-expires")[i].textContent).toBe(licenseData.data[i].expiresAt)
          expect(canvas.getAllByTestId("license-minted")[i].textContent).toBe(licenseData.data[i].mintedAt)
          expect(canvas.getAllByTestId("license-burnt")[i].textContent).toBe(licenseData.data[i].burntAt)
        }
      },
      { timeout: 10000 }
    )
  },
}
