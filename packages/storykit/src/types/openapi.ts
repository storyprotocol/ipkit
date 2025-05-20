import { components } from "@storykit/api-schema"
import { type UseQueryOptions } from "@tanstack/react-query"

export type IpQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type IPAsset =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv3.IPAsset"]

export type IPLicenseTerms =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.IPLicenseTerm"]

export type IpAssetMetadata =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.IpAssetMetadata"]

export type IpAssetEdge =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.IpAssetEdge"]

export type LicenseTerms =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.LicenseTerm"]

export type PILTerms =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Term"]

export type LicenseToken =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.LicenseToken"]

export type RoyaltyPay =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.RoyaltyPay"]

export type IPGroup =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv2.IPGroup"]

export type IPGroupEdge =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv2.IPGroupEdge"]

export type DetailedTerms =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv2.DetailedTerms"]

export type Transaction =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Transaction"]

export type Permission =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Permission"]

export type Module =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Module"]

export type LicenseTemplate =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.LicenseTemplate"]

export type LicenseMintingFeePaid =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.LicenseMintingFeePaid"]

export type Dispute =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Dispute"]

export type Collection =
  components["schemas"]["github_com_storyprotocol_protocol-api_api_internal_models_protocolv1.Collection"]
