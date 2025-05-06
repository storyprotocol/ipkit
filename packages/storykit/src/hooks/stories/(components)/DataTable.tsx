import { shortenAddress } from "@/lib"
import React from "react"

import { CopyText } from "./CopyText"

interface DataTableProps {
  fields: string[]
  data: Record<string, any>[]
}

export const DataTable = ({ fields, data }: DataTableProps) => {
  return (
    <div className="sk-p-4 sk-text-sm">
      <table className="sk-border-spacing-4">
        <thead>
          <tr className="sk-bg-slate-100 sk-py-0.5 sk-font-bold">
            {fields.map((field) => (
              <td key={field} className="sk-px-2" align="left">
                {field}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="sk-py-0.5">
                {fields.map((field) => (
                  <td key={field} className="sk-px-2">
                    {item[field] ? (
                      typeof item[field] === "string" && item[field].length > 0 && item[field].startsWith("0x") ? (
                        <CopyText label={shortenAddress(item[field] || "")} value={item[field] || ""} />
                      ) : (
                        item[field] || ""
                      )
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
