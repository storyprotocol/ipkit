"use client"

import IpHeader from "./IpHeader"

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex w-96 max-w-full">
          <div className="flex flex-col gap-4">
            <IpHeader />
          </div>
      </div>
    </div>
  )
}
