import React from 'react'
import type { BreadcrumbItem } from './types'

interface CollapseMenuProps {
    collapsedList:BreadcrumbItem[]
}

const CollapsedMenu = ({collapsedList}:CollapseMenuProps) => {
  return (
    <div className = "flex flex-col gap-1">
        {collapsedList.map((item) => (
            <div
            key = {item.id}
            className = "p-1 hover:bg-gray-100"
            >
                <a href = {item.link}>
                    {item.title}
                </a>     
            </div>
        ))}
    </div>
  )
}

export default CollapsedMenu