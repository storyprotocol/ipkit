import { WRAPPED_IP } from "@/types/chains"
import { Term } from "@/types/openapi"
import { zeroAddress } from "viem"

export const commercialRemixingLicenseTerms: Term = {
  commercialAttribution: true,
  commercialRevCeiling: 0,
  commercialRevShare: 10000000, // 10%
  commercialUse: true,
  commercializerChecker: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: true,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: true,
  derivativeRevCeiling: 0,
  expiration: 0,
  uri: "https://github.com/piplabs/pil-document/blob/ad67bb632a310d2557f8abcccd428e4c9c798db1/off-chain-terms/CommercialRemix.json",
}

export const commercialUseLicenseTerms: Term = {
  commercialAttribution: true,
  commercialRevCeiling: 0,
  commercialRevShare: 0,
  commercialUse: true,
  commercializerChecker: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: false,
  derivativeRevCeiling: 0,
  expiration: 0,
  uri: "https://github.com/piplabs/pil-document/blob/9a1f803fcf8101a8a78f1dcc929e6014e144ab56/off-chain-terms/CommercialUse.json",
}

export const commercialUseLicenseTermsWithExpiration: Term = {
  commercialAttribution: true,
  commercialRevCeiling: 0,
  commercialRevShare: 0,
  commercialUse: true,
  commercializerChecker: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: false,
  derivativeRevCeiling: 0,
  expiration: 1736866800000,
  uri: "https://github.com/piplabs/pil-document/blob/9a1f803fcf8101a8a78f1dcc929e6014e144ab56/off-chain-terms/CommercialUse.json",
}

export const nonCommercialSocialRemixingLicenseTerms: Term = {
  commercialAttribution: false,
  commercialRevCeiling: 0,
  commercialRevShare: 0,
  commercialUse: false,
  commercializerChecker: zeroAddress,
  currency: zeroAddress,
  derivativesAllowed: true,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: true,
  derivativeRevCeiling: 0,
  expiration: 0,
  uri: "https://github.com/piplabs/pil-document/blob/998c13e6ee1d04eb817aefd1fe16dfe8be3cd7a2/off-chain-terms/NCSR.json",
}

export const noLicenseTerms: Term = {
  commercialAttribution: false,
  commercialRevCeiling: 0,
  commercialRevShare: 0,
  commercialUse: false,
  commercializerChecker: "0x",
  // commercializerCheckerData
  currency: zeroAddress,
  // defaultMintingFee
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: false,
  derivativesReciprocal: false,
  derivativeRevCeiling: 0,
  expiration: 0,
  // royaltyPolicy
  // transferable
  uri: "",
}
