import { useIpAsset } from "@/hooks/useIpAsset"
import { useIpAssetEdges } from "@/hooks/useIpAssetEdges"
import { useIpAssetMetadata } from "@/hooks/useIpAssetMetadata"
import { useIpAssetsTerms } from "@/hooks/useIpAssetsTerms"
import { useLicenseTokens } from "@/hooks/useLicenseTokens"
import { LicenseTermResponse, getLicenseTerm } from "@/lib/api/getLicenseTerm"
//
import { getRoyaltiesByIPs } from "@/lib/royalty-graph"
import { STORYKIT_SUPPORTED_CHAIN } from "@/types/chains"
import { IPAsset, IPLicenseTerm, IpAssetEdge, IpAssetMetadata, LicenseTerm, LicenseToken } from "@/types/openapi"
import { RoyaltiesGraph } from "@/types/royalty-graph"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"
import { Address, Hash } from "viem"

import { getMetadataFromIpfs, getResource } from "../../lib/api"
import { getNFTByTokenId } from "../../lib/simplehash"
// import { convertIpfsUriToUrl } from "../../lib/utils"
import { RESOURCE_TYPE } from "../../types/api"
import { NFTMetadata } from "../../types/simplehash"
import { useStoryKitContext } from "../StoryKitProvider"

export interface IpProviderOptions {
  assetData?: boolean
  ipaMetadata?: boolean
  assetParentsData?: boolean
  assetChildrenData?: boolean
  licenseTermsData?: boolean
  licenseData?: boolean

  royaltyGraphData?: boolean
}

const IpContext = React.createContext<{
  chain: STORYKIT_SUPPORTED_CHAIN
  // data
  assetData: IPAsset | undefined
  ipaMetadata: IpAssetMetadata | undefined
  assetParentData: IpAssetEdge[] | undefined
  assetChildrenData: IpAssetEdge[] | undefined
  ipLicenseData: IPLicenseTerm[] | undefined
  licenseTermsData: LicenseTerm[] | undefined
  licenseData: LicenseToken[] | undefined
  //--
  nftData: NFTMetadata | undefined
  royaltyGraphData: RoyaltiesGraph | undefined
  // loading
  isNftDataLoading: boolean
  isAssetDataLoading: boolean
  isAssetParentDataLoading: boolean
  isAssetChildrenDataLoading: boolean
  isIpaMetadataLoading: boolean
  isipLicenseDataLoading: boolean
  isLicenseTermsDataLoading: boolean
  isLicenseDataLoading: boolean
  isRoyaltyGraphDataLoading: boolean
  // refetch
  refetchAssetData: () => void
  refetchAssetParentData: () => void
  refetchAssetChildrenData: () => void
  refetchIpLicenseData: () => void
  refetchLicenseTermsData: () => void
  refetchLicenseData: () => void
  refetchNFTData: () => void
  refetchRoyaltyGraphData: () => void
  // fetched
  isNftDataFetched: boolean
  isAssetDataFetched: boolean
  isAssetParentDataFetched: boolean
  isAssetChildrenDataFetched: boolean
  isIpLicenseDataFetched: boolean
  isLicenseTermsDataFetched: boolean
  isLicenseDataFetched: boolean
  isRoyaltyGraphDataFetched: boolean
} | null>(null)

export const IpProvider = ({
  ipId,
  options = {},
  children,
}: {
  ipId: Address
  options?: IpProviderOptions
  children: React.ReactNode
}) => {
  const queryOptions = {
    assetData: true,
    ipaMetadata: true,
    assetParentsData: true,
    assetChildrenData: true,
    licenseTermsData: true,
    licenseData: true,
    royaltyGraphData: false,
    ...options,
  }

  const { chain, apiKey } = useStoryKitContext()

  // Fetch asset data
  const {
    isLoading: isAssetDataLoading,
    data: assetData,
    refetch: refetchAssetData,
    isFetched: isAssetDataFetched,
  } = useIpAsset({
    ipId,
    queryOptions: {
      enabled: queryOptions.assetData,
    },
  })

  // Fetch IP metadata
  const { isLoading: isIpaMetadataLoading, data: ipaMetadataRaw } = useIpAssetMetadata({
    ipId,
    queryOptions: {
      enabled: queryOptions.assetData,
    },
  })

  // Fetch IP Metadata from IPFS
  const { isLoading: isLoadingFromIpfs, data: metadaFromIpfs } = useQuery({
    queryKey: ["getMetadataFromIpfs", ipId, ipaMetadataRaw?.metadataUri ?? ""],
    queryFn: () => getMetadataFromIpfs(ipaMetadataRaw?.metadataUri ?? ""),
    enabled: queryOptions.ipaMetadata && ipaMetadataRaw != null,
  })

  const ipaMetadata = {
    ...ipaMetadataRaw,
    metadataJson: metadaFromIpfs,
  }

  // Fetch asset parent data

  const {
    isLoading: isAssetParentDataLoading,
    data: assetParentData,
    refetch: refetchAssetParentData,
    isFetched: isAssetParentDataFetched,
  } = useIpAssetEdges({
    options: {
      pagination: {
        limit: 500,
      },
      where: {
        ipId,
      },
    },
    queryOptions: {
      enabled: queryOptions.assetParentsData,
    },
  })

  // Fetch asset children data

  const {
    isLoading: isAssetChildrenDataLoading,
    data: assetChildrenData,
    refetch: refetchAssetChildrenData,
    isFetched: isAssetChildrenDataFetched,
  } = useIpAssetEdges({
    options: {
      pagination: {
        limit: 500,
      },
      where: {
        parentIpId: ipId,
      },
    },
    queryOptions: {
      enabled: queryOptions.assetChildrenData,
    },
  })

  // Fetch IP License Terms data

  const {
    isLoading: isipLicenseDataLoading,
    data: ipLicenseData,
    refetch: refetchIpLicenseData,
    isFetched: isIpLicenseDataFetched,
  } = useIpAssetsTerms({
    options: {
      where: {
        ipId,
      },
    },
    queryOptions: {
      enabled: queryOptions.licenseTermsData,
    },
  })

  // alternative way to fetch IP License Terms data
  // note useIpAssetTerms returns a list response with next/prev pagination but is a GET request

  // const {
  //   isLoading: isipLicenseDataLoading,
  //   data: ipLicenseData,
  //   refetch: refetchIpLicenseData,
  //   isFetched: isIpLicenseDataFetched,
  // } = useIpAssetTerms({
  //   ipId,
  //   queryOptions: {
  //     enabled: queryOptions.licenseTermsData,
  //   },
  // })

  // fetch license terms details

  async function fetchLicenseTermsDetails(data: IPLicenseTerm[]) {
    const uniqueLicenses = data.filter((item) => item.ipId?.toLowerCase() === ipId.toLowerCase())

    const requests: Promise<LicenseTermResponse>[] = uniqueLicenses.map((item) =>
      getLicenseTerm({ licenseTermId: item.licenseTermsId ?? "", chainName: chain.name, apiKey })
    )
    const results = await Promise.all(requests)

    return results.map((result) => (result.data as LicenseTermResponse).data!)

    // TODO: fetch offchain data

    // const termsDetail = results.filter((value) => !!value).map((result) => result.data)

    // const offChainUri = termsDetail.map((detail) => detail.terms.uri)

    // const offChainData = await Promise.all(
    //   offChainUri.map(async (uri) => {
    //     try {
    //       if (uri === "") {
    //         return
    //       }
    //       const ipfsData = await getMetadataFromIpfs(convertIpfsUriToUrl(uri))
    //       console.log("ipfsData", ipfsData)
    //       return ipfsData
    //     } catch (error) {
    //       return
    //     }
    //   })
    // )

    // return termsDetail.map((termDetail, index) => {
    //   return {
    //     ...termDetail,
    //     terms: {
    //       ...termDetail.terms,
    //       offChainData: offChainData[index],
    //     },
    //   }
    // })
  }

  const {
    isLoading: isLicenseTermsDataLoading,
    data: licenseTermsData,
    refetch: refetchLicenseTermsData,
    isFetched: isLicenseTermsDataFetched,
  } = useQuery({
    queryKey: ["fetchLicenseTermsDetails", ipLicenseData?.data],
    queryFn: () => fetchLicenseTermsDetails(ipLicenseData?.data ?? []),
    enabled: Boolean(ipLicenseData) && Boolean(ipLicenseData?.data?.length) && queryOptions.licenseTermsData,
  })

  // Fetch License Data

  const {
    isLoading: isLicenseDataLoading,
    data: licenseData,
    refetch: refetchLicenseData,
    isFetched: isLicenseDataFetched,
  } = useLicenseTokens({
    options: {
      where: {
        licensorIpId: ipId,
      },
    },
    queryOptions: { enabled: queryOptions.licenseData },
  })

  const {
    isLoading: isRoyaltyGraphDataLoading,
    data: royaltyGraphData,
    refetch: refetchRoyaltyGraphData,
    isFetched: isRoyaltyGraphDataFetched,
  } = useQuery<RoyaltiesGraph | undefined>({
    queryKey: ["getRoyaltiesByIPs", ipId],
    queryFn: () => getRoyaltiesByIPs([ipId], chain.name as STORYKIT_SUPPORTED_CHAIN),
    enabled: queryOptions.royaltyGraphData,
  })

  const {
    isLoading: isNftDataLoading,
    data: nftData,
    refetch: refetchNFTData,
    isFetched: isNftDataFetched,
  } = useQuery({
    queryKey: ["getNFTByTokenId", assetData?.data?.nftMetadata?.tokenContract, assetData?.data?.nftMetadata?.tokenId],
    queryFn: () =>
      getNFTByTokenId(
        assetData?.data?.nftMetadata?.tokenContract as Hash,
        assetData?.data?.nftMetadata?.tokenId as string,
        chain.name as STORYKIT_SUPPORTED_CHAIN
      ),
    enabled:
      queryOptions.assetData &&
      Boolean(assetData) &&
      Boolean(assetData?.data?.nftMetadata?.tokenContract) &&
      Boolean(assetData?.data?.nftMetadata?.tokenId),
  })

  return (
    <IpContext.Provider
      value={{
        chain: chain.name as STORYKIT_SUPPORTED_CHAIN,
        // data
        assetData: assetData?.data,
        ipaMetadata: ipaMetadata,
        assetParentData: assetParentData?.data,
        assetChildrenData: assetChildrenData?.data,
        ipLicenseData: ipLicenseData?.data,
        licenseTermsData: licenseTermsData,
        //
        nftData,
        licenseData: licenseData?.data,
        royaltyGraphData,
        // loading
        isAssetDataLoading,
        isNftDataLoading,
        isAssetParentDataLoading,
        isAssetChildrenDataLoading,
        isIpaMetadataLoading: isIpaMetadataLoading || isLoadingFromIpfs,
        isipLicenseDataLoading,
        isLicenseTermsDataLoading,
        isLicenseDataLoading,
        isRoyaltyGraphDataLoading,
        // refetch
        refetchAssetData,
        refetchAssetParentData,
        refetchAssetChildrenData,
        refetchIpLicenseData,
        refetchLicenseTermsData,
        refetchLicenseData,
        refetchRoyaltyGraphData,
        refetchNFTData,
        // fetched
        isAssetDataFetched,
        isNftDataFetched,
        isAssetParentDataFetched,
        isAssetChildrenDataFetched,
        isIpLicenseDataFetched,
        isLicenseTermsDataFetched,
        isLicenseDataFetched,
        isRoyaltyGraphDataFetched,
      }}
    >
      {children}
    </IpContext.Provider>
  )
}

export const useIpContext = () => {
  const context = React.useContext(IpContext)
  if (!context) {
    throw new Error("useAccount must be used within an IpProvider")
  }
  return context
}
