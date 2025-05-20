import React, { FC } from "react"
import { Address } from "viem"

import { IpProvider, IpProviderOptions, useIpContext } from "../IpProvider"

const Example: FC<{
  ipId: Address
  children?: React.ReactNode
  options?: IpProviderOptions
}> = ({ ipId = "0xE8Cc004498a2a7510F9CFB26D95dFdb7Ac4e7100", children = <ExampleComponent />, options = {} }) => {
  return (
    <IpProvider ipId={ipId} options={options}>
      {children}
    </IpProvider>
  )
}

const ExampleComponent = () => {
  const { nftData, isNftDataLoading } = useIpContext()
  return (
    <>
      {isNftDataLoading && <div>Fetching NFT...</div>}
      {nftData && !isNftDataLoading ? (
        <div className="grid grid-cols-4 gap-4">
          <>
            <div className="col-span-1 text-xs text-gray-600">nft_id</div>
            <div className="col-span-3 text-sm" data-testid="nft-id">
              {nftData.nft_id}
            </div>

            <div className="col-span-1 text-xs text-gray-600">chain</div>
            <div className="col-span-3 text-sm" data-testid="nft-chain">
              {nftData.chain}
            </div>

            <div className="col-span-1 text-xs text-gray-600">contract_address</div>
            <div className="col-span-3 text-sm" data-testid="nft-contract-address">
              {nftData.contract_address}
            </div>

            <div className="col-span-1 text-xs text-gray-600">token_id</div>
            <div className="col-span-3 text-sm" data-testid="nft-token-id">
              {nftData.token_id}
            </div>

            <div className="col-span-1 text-xs text-gray-600">name</div>
            <div className="col-span-3 text-sm" data-testid="nft-name">
              {nftData.name}
            </div>

            <div className="col-span-1 text-xs text-gray-600">description</div>
            <div className="col-span-3 text-sm" data-testid="nft-description">
              {nftData.description}
            </div>
          </>
        </div>
      ) : null}
    </>
  )
}

const AssetComponent = () => {
  const { assetData, isAssetDataLoading } = useIpContext()
  return (
    <>
      {isAssetDataLoading && <div>Fetching Asset...</div>}
      {assetData && !isAssetDataLoading ? (
        <div className="grid grid-cols-4 gap-4">
          <>
            <div className="col-span-1 text-xs text-gray-600">id</div>
            <div className="col-span-3 text-sm" data-testid="asset-id">
              {assetData.id}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.name</div>
            <div className="col-span-3 text-sm" data-testid="asset-nft-name">
              {assetData?.nftMetadata?.name}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.chainId</div>
            <div className="col-span-3 text-sm" data-testid="asset-nft-chain">
              {assetData?.nftMetadata?.chainId}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.tokenContract</div>
            <div className="col-span-3 text-sm" data-testid="asset-nft-token-contract">
              {assetData?.nftMetadata?.tokenContract}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.tokenId</div>
            <div className="col-span-3 text-sm" data-testid="asset-nft-token-id">
              {assetData?.nftMetadata?.tokenId}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.tokenUri</div>
            <div className="col-span-3 text-sm" data-testid="asset-token-uri">
              {assetData?.nftMetadata?.tokenUri}
            </div>

            <div className="col-span-1 text-xs text-gray-600">nftMetadata.imageUrl</div>
            <div className="col-span-3 text-sm" data-testid="asset-nft-image-url">
              {assetData?.nftMetadata?.imageUrl}
            </div>
          </>
        </div>
      ) : null}
    </>
  )
}

const IPLicenseComponent = () => {
  const { ipLicenseData, isipLicenseDataLoading } = useIpContext()
  return (
    <>
      {isipLicenseDataLoading && <div>Fetching IPLicense...</div>}
      {ipLicenseData && !isipLicenseDataLoading ? (
        <div>
          <>
            <ul>
              {ipLicenseData?.map((obj) => (
                <li key={obj.id} className="grid grid-cols-4 gap-4">
                  <p className="col-span-1 text-xs text-gray-600">IPLicense Id</p>
                  <p className="col-span-3 text-sm" data-testid="ipalicense-id">
                    {obj.id}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">ipId</p>
                  <p className="col-span-3 text-sm" data-testid="ipalicense-ip-id">
                    {obj.ipId}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licenseTemplate</p>
                  <p className="col-span-3 text-sm" data-testid="ipalicense-template">
                    {obj.licenseTemplate}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licenseTermsId</p>
                  <p className="col-span-3 text-sm" data-testid="ipalicense-terms-id">
                    {obj.licenseTermsId}
                  </p>
                  <p />
                </li>
              ))}
            </ul>
          </>
        </div>
      ) : null}
    </>
  )
}

const LicenseTermsComponent = () => {
  const { licenseTermsData, isLicenseTermsDataLoading } = useIpContext()
  return (
    <>
      {isLicenseTermsDataLoading && <div>Fetching License Terms...</div>}
      {licenseTermsData && !isLicenseTermsDataLoading ? (
        <div>
          <>
            <ul>
              {(licenseTermsData as unknown as any[])?.map((license) => (
                <li className="grid grid-cols-4 gap-6" key={license.id}>
                  <p className="col-span-1 text-xs text-gray-600">License Id</p>
                  <p className="col-span-3 text-sm" data-testid="license-id">
                    {license.id}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licenseTemplate</p>
                  <p className="col-span-3 text-sm" data-testid="license-template">
                    {license.licenseTemplate}
                  </p>
                  <p className="col-span-4 text-xs text-gray-600">licenseTerms</p>
                  <p className="col-span-1 text-xs text-gray-600">commercialUse</p>
                  <p className="col-span-3 text-sm" data-testid="license-comm-use">
                    {license.licenseTerms.commercialUse.toString()}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">commercialAttribution</p>
                  <p className="col-span-3 text-sm" data-testid="license-comm-attr">
                    {license.licenseTerms.commercialAttribution.toString()}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">commercialRevenueShare</p>
                  <p className="col-span-3 text-sm" data-testid="license-comm-share">
                    {license.licenseTerms.commercialRevenueShare}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">derivativesAllowed</p>
                  <p className="col-span-3 text-sm" data-testid="license-deriv-allow">
                    {license.licenseTerms.derivativesAllowed.toString()}
                  </p>
                  <p />
                </li>
              ))}
            </ul>
          </>
        </div>
      ) : null}
    </>
  )
}

const LicenseComponent = () => {
  const { licenseData, isLicenseDataLoading } = useIpContext()
  return (
    <>
      {isLicenseDataLoading && <div>Fetching License...</div>}
      {licenseData && !isLicenseDataLoading ? (
        <div>
          <>
            <ul>
              {licenseData?.map((obj) => (
                <li key={obj.id} className="grid grid-cols-4 gap-4">
                  <p className="col-span-1 text-xs text-gray-600">License Id</p>
                  <p className="col-span-3 text-sm" data-testid="license-id">
                    {obj.id}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licensorIpId</p>
                  <p className="col-span-3 text-sm" data-testid="license-ipid">
                    {obj.licensorIpId}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licenseTemplate</p>
                  <p className="col-span-3 text-sm" data-testid="license-template">
                    {obj.licenseTemplate}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">licenseTermsId</p>
                  <p className="col-span-3 text-sm" data-testid="license-terms">
                    {obj.licenseTermsId}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">transferable</p>
                  <p className="col-span-3 text-sm" data-testid="license-transfer">
                    {obj.transferable}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">owner</p>
                  <p className="col-span-3 text-sm" data-testid="license-owner">
                    {obj.owner}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">blockTime</p>
                  <p className="col-span-3 text-sm" data-testid="license-minted">
                    {obj.blockTime}
                  </p>
                  <p className="col-span-1 text-xs text-gray-600">burntAt</p>
                  <p className="col-span-3 text-sm" data-testid="license-burnt">
                    {obj.burntAt}
                  </p>
                  <p />
                </li>
              ))}
            </ul>
          </>
        </div>
      ) : null}
    </>
  )
}

const ProviderOptionsComponent = () => {
  const {
    assetData,
    isAssetDataLoading,
    nftData,
    isNftDataLoading,
    ipLicenseData,
    isipLicenseDataLoading,
    licenseTermsData,
    isLicenseTermsDataLoading,
    licenseData,
    isLicenseDataLoading,
  } = useIpContext()
  return (
    <>
      <div>
        {isAssetDataLoading && <div>Fetching Asset...</div>}
        {isNftDataLoading && <div>Fetching NFT...</div>}
        {isipLicenseDataLoading && <div>Fetching IPLicense...</div>}
        {isLicenseTermsDataLoading && <div>Fetching License Terms...</div>}
        {isLicenseDataLoading && <div>Fetching License...</div>}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 text-xs text-gray-600">Asset</div>
          <div className="col-span-3 text-sm" data-testid="asset-id">
            {assetData?.id}
          </div>
          <div className="col-span-1 text-xs text-gray-600">NFT</div>
          <div className="col-span-3 text-sm" data-testid="nft-id">
            {nftData?.nft_id}
          </div>
          <div className="col-span-1 text-xs text-gray-600">IPLicense count</div>
          <div className="col-span-3 text-sm" data-testid="ipap-count">
            {ipLicenseData?.length}
          </div>
          <div className="col-span-1 text-xs text-gray-600">License Terms count</div>
          <div className="col-span-3 text-sm" data-testid="license-terms-count">
            {licenseTermsData?.length}
          </div>
          <div className="col-span-1 text-xs text-gray-600">License count</div>
          <div className="col-span-3 text-sm" data-testid="license-count">
            {licenseData?.length}
          </div>
        </div>
      </div>
    </>
  )
}

export default Example
export { AssetComponent, IPLicenseComponent, LicenseTermsComponent, LicenseComponent, ProviderOptionsComponent }
