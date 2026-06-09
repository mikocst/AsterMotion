import type { BreadcrumbItem } from "./types"
import { ChevronRight } from "lucide-react"

interface BreadcrumbEndProps {
    endItems: BreadcrumbItem[]
    renderItem?: (item:BreadcrumbItem) => React.ReactNode
    separator?: React.ReactNode
}

const BreadcrumbEnd = ({endItems, renderItem, separator}: BreadcrumbEndProps) => {
  return (
    <>
    {endItems.map((endItem, index) => {
              if (index === endItems.length - 1){
                return(
                  <li key = {endItem.id} aria-current ="page" className = "flex flex-row items-center gap-1 text-gray-700">
                    {endItem.title}
                </li>
                )
              }
              return (
              <li key = {endItem.id}>
                {renderItem ? renderItem(endItem) : <a href = {endItem.link}>{endItem.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
              </li>
            )
            })}
    </>
  )
}

export default BreadcrumbEnd