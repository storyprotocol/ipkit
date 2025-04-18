import { PILTerms, WRAPPED_IP } from "@/types"
import { zeroAddress } from "viem"

export const commercialRemixingLicenseTerms: PILTerms = {
  commercialAttribution: true,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 10000000, // 10%
  commercialUse: true,
  commercializerCheck: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: true,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: true,
  derivativesRevenueCelling: 0,
  expiration: "never",
  uri: "https://github.com/piplabs/pil-document/blob/ad67bb632a310d2557f8abcccd428e4c9c798db1/off-chain-terms/CommercialRemix.json",
}

export const commercialUseLicenseTerms: PILTerms = {
  commercialAttribution: true,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 0,
  commercialUse: true,
  commercializerCheck: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: false,
  derivativesRevenueCelling: 0,
  expiration: "never",
  uri: "https://github.com/piplabs/pil-document/blob/9a1f803fcf8101a8a78f1dcc929e6014e144ab56/off-chain-terms/CommercialUse.json",
}

export const commercialUseLicenseTermsWithExpiration: PILTerms = {
  commercialAttribution: true,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 0,
  commercialUse: true,
  commercializerCheck: "0x0000000000000000000000000000000000000000",
  currency: WRAPPED_IP.address,
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: false,
  derivativesRevenueCelling: 0,
  expiration: "1736866800000",
  uri: "https://github.com/piplabs/pil-document/blob/9a1f803fcf8101a8a78f1dcc929e6014e144ab56/off-chain-terms/CommercialUse.json",
}

export const nonCommercialSocialRemixingLicenseTerms: PILTerms = {
  commercialAttribution: false,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 0,
  commercialUse: false,
  commercializerCheck: zeroAddress,
  currency: zeroAddress,
  derivativesAllowed: true,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: true,
  derivativesRevenueCelling: 0,
  expiration: "0",
  uri: "https://github.com/piplabs/pil-document/blob/998c13e6ee1d04eb817aefd1fe16dfe8be3cd7a2/off-chain-terms/NCSR.json",
}

export const noLicenseTerms: PILTerms = {
  commercialAttribution: false,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 0,
  commercialUse: false,
  commercializerCheck: "0x",
  currency: zeroAddress,
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: false,
  derivativesReciprocal: false,
  derivativesRevenueCelling: 0,
  expiration: "",
  uri: "",
}
