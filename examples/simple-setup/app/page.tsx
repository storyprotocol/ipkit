"use client"

import { IpProvider, IpLicenseAccordion } from "@storyprotocol/storykit"
import IpHeader from "./IpHeader"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex w-96 max-w-full">
        <IpProvider ipId="0xe488c586b78988e384669C7672DAE7EFFA320EfC" options={{ licenseTermsData: true }}>
          <div className="flex flex-col gap-4">
            <IpHeader />
            <IpLicenseAccordion />
          </div>
        </IpProvider>
      </div>
    </div>
  )
}
