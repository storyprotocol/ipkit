import { STORY_IP_ASSETS, STORY_IP_ASSETS_MAP } from "@/stories/data"
import React, { FC } from "react"
import { Address } from "viem"

import { IpProvider } from "../../../providers"
import IpLicenseAccordion from "../IpLicenseAccordion"

type Size = "small" | "medium" | "large"

const Example: FC<{ ipId: Address; size: Size }> = ({
  ipId = STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[0]],
  size = "medium",
}) => {
  return (
    <IpProvider ipId={ipId} options={{ licenseTermsData: true }}>
      <IpLicenseAccordion size={size} />
    </IpProvider>
  )
}

export default Example
