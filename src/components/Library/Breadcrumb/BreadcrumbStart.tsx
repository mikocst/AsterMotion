import React from 'react'
import type { BreadcrumbItem } from './types'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbStartProps {
    startItems: BreadcrumbItem[]
    renderItem?: (item:BreadcrumbItem) => React.ReactNode
    separator?: React.ReactNode
}

const BreadcrumbStart = ({startItems, renderItem, separator}: BreadcrumbStartProps) => {
  return (
    <>
        {startItems.map((start) =>
              <li key = {start.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">
                {renderItem ? renderItem(start) : <a href = {start.link}>{start.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}
              </li>
            )}
    </>
  )
}

export default BreadcrumbStart