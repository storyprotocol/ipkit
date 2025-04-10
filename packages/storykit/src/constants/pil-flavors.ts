import { PILTerms, WRAPPED_IP } from "@/types"
import { zeroAddress } from "viem"

export const commercialRemixingLicenseTerms: PILTerms = {
  commercialAttribution: true,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 10000000, // 10%
  commercialUse: true,
  commercializerCheck: "0x0000000000000000000000000000000000000000",
  currency: "0xb132a6b7ae652c974ee1557a3521d53d18f6739f",
  derivativesAllowed: true,
  derivativesApproval: false,
  derivativesAttribution: true,
  derivativesReciprocal: true,
  derivativesRevenueCelling: 0,
  expiration: "never",
  uri: "",
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
  uri: "",
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
  uri: "",
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
  uri: "",
}

export const noLicenseTerms: PILTerms = {
  commercialAttribution: false,
  commercialRevenueCelling: 0,
  commercialRevenueShare: 0,
  commercialUse: false,
  commercializerCheck: "0x",
  currency: "0x",
  derivativesAllowed: false,
  derivativesApproval: false,
  derivativesAttribution: false,
  derivativesReciprocal: false,
  derivativesRevenueCelling: 0,
  expiration: "",
  uri: "",
}
