import React from 'react'
import type { BreadcrumbItem } from './types'
import { ChevronRight } from 'lucide-react'

interface breadcrumbStandardProps{
    items: BreadcrumbItem[]
    renderItem?: (item:BreadcrumbItem) => React.ReactNode
    separator?: React.ReactNode
}

const BreadcrumbStandard = ({items, renderItem, separator}: breadcrumbStandardProps) => {
  return (
    <>
     {items.map((item, index) => {
            if(index === items.length - 1){
              return(
                <li key = {item.id} aria-current ="page" className = "text-gray-700">
                    {item.title}
                </li>
              )
            }
            return (
              <li key = {item.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">
                {renderItem ? renderItem(item) : <a href = {item.link}>{item.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}
              </li>
            )
          })}
    </>
  )
}

export default BreadcrumbStandard