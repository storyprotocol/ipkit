"use client"

import { IpProvider, IpLicenseAccordion } from "@storyprotocol/storykit"
import IpHeader from "./IpHeader"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex w-96 max-w-full">
        <IpProvider ipId="0xB1D831271A68Db5c18c8F0B69327446f7C8D0A42" options={{ licenseTermsData: true, ownersData: true }}>
          <div className="flex flex-col gap-4">
            <IpHeader />
            <IpLicenseAccordion />
          </div>
        </IpProvider>
      </div>
    </div>

  )
}
