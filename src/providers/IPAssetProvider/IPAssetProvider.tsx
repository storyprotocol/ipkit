import { NFTMetadata } from "@/lib/simplehash/types/simplehash"
import { Asset, IPAPolicy, License, Policy, RESOURCE_TYPE, RoyaltyPolicy } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { Address } from "viem"

import { getResource, listResource } from "../../lib/api"
import { getNFTByTokenId } from "../../lib/simplehash"

const IPAssetContext = React.createContext<{
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  assetData: Asset | undefined
  nftData: NFTMetadata | undefined
  isNftDataLoading: boolean
  isAssetDataLoading: boolean
  ipPolicyData: IPAPolicy[] | undefined
  isIPAPolicyDataLoading: boolean
  policyData: Policy[] | undefined
  isPolicyDataLoading: boolean
  licenseData: License[] | undefined
  isLicenseDataLoading: boolean
  royaltyData: RoyaltyPolicy | undefined
  isRoyaltyDataLoading: boolean
} | null>(null)

export const IPA_CARD_TABS = [
  { id: "overview", label: "Overview" },
  { id: "licensing", label: "Licensing" },
  { id: "derivatives", label: "IP Graph" },
  { id: "royalty", label: "Royalty" },
  // { id: "derivatives", label: "Derivatives" },
]

export const IPAssetProvider = ({ children, ipId }: { children: React.ReactNode; ipId: Address }) => {
  const [activeTab, setActiveTab] = useState(IPA_CARD_TABS[0].id)
  // Fetch asset data
  const { isLoading: isAssetDataLoading, data: assetData } = useQuery({
    queryKey: [RESOURCE_TYPE.ASSET, ipId],
    queryFn: () => getResource(RESOURCE_TYPE.ASSET, ipId),
  })

  const ipaPolicyQueryOptions = {
    pagination: {
      limit: 0,
      offset: 0,
    },
    where: {
      ipId,
    },
  }
  // Fetch IPPolicy data
  const { isLoading: isIPAPolicyDataLoading, data: ipPolicyData } = useQuery({
    queryKey: [RESOURCE_TYPE.IPA_POLICY, ipaPolicyQueryOptions],
    queryFn: () => listResource(RESOURCE_TYPE.IPA_POLICY, ipaPolicyQueryOptions),
  })

  async function fetchPolicyDetails(data: IPAPolicy[]) {
    const requests = data.map((item) => getResource(RESOURCE_TYPE.POLICY, item.policyId))
    const results = await Promise.all(requests)
    return results.reduce((acc, result) => {
      acc.push(result.data)
      return acc
    }, [])
  }

  const { isLoading: isPolicyDataLoading, data: policyData } = useQuery({
    queryKey: ["fetchPolicyDetails", ipPolicyData?.data],
    queryFn: () => fetchPolicyDetails(ipPolicyData?.data),
    enabled: Boolean(ipPolicyData) && Boolean(ipPolicyData.data),
  })

  const licenseQueryOptions = {
    pagination: {
      limit: 0,
      offset: 0,
    },
    where: {
      licensorIpdId: ipId,
    },
  }
  // Fetch License Data
  const { isLoading: isLicenseDataLoading, data: licenseData } = useQuery({
    queryKey: [RESOURCE_TYPE.LICENSE, licenseQueryOptions],
    queryFn: () => listResource(RESOURCE_TYPE.LICENSE, licenseQueryOptions),
  })

  // Fetch Royalty Data
  const { isLoading: isRoyaltyDataLoading, data: royaltyData } = useQuery({
    queryKey: [
      RESOURCE_TYPE.ROYALTY_POLICY,
      {
        pagination: {
          limit: 0,
          offset: 0,
        },
        where: {
          ipId,
        },
      },
    ],
    queryFn: () => getResource(RESOURCE_TYPE.ROYALTY_POLICY, ipId),
  })

  const { isLoading: isNftDataLoading, data: nftData } = useQuery({
    queryKey: ["getNFTByTokenId", assetData?.data?.tokenContract, assetData?.data?.tokenId],
    queryFn: () => getNFTByTokenId(assetData.data.tokenContract, assetData.data.tokenId),
    enabled: Boolean(assetData) && Boolean(assetData.data.tokenContract) && Boolean(assetData.data.tokenId),
  })

  return (
    <IPAssetContext.Provider
      value={{
        activeTab,
        setActiveTab,
        nftData,
        isNftDataLoading,
        assetData: assetData?.data,
        isAssetDataLoading,
        ipPolicyData: ipPolicyData?.data,
        isIPAPolicyDataLoading,
        policyData: policyData,
        isPolicyDataLoading,
        licenseData: licenseData?.data,
        isLicenseDataLoading,
        royaltyData: royaltyData?.data,
        isRoyaltyDataLoading,
      }}
    >
      {children}
    </IPAssetContext.Provider>
  )
}

export const useIPAssetContext = () => {
  const context = React.useContext(IPAssetContext)
  if (!context) {
    throw new Error("useAccount must be used within an IPAssetProvider")
  }
  return context
}
