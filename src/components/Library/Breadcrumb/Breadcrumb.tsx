import React from 'react'
import { ChevronRight, Ellipsis } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import CollapsedMenu from './CollapsedMenu'
import type { BreadcrumbItem } from './types'

interface BreadCrumbProps {
    items: BreadcrumbItem[]
    maxItems?: number
    separator?: React.ReactNode
    renderItem?:(item:BreadcrumbItem) => React.ReactNode
}

const Breadcrumb = ({items, maxItems = 5, separator, renderItem} : BreadCrumbProps) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const elipsesRef = useRef(null);

    const enforcedMaxItems = Math.max(maxItems, 3);
    const listItemCount = enforcedMaxItems - 2;

    let visibleStart: BreadcrumbItem[] = [];
    let elipsesItems: BreadcrumbItem[] = [];
    let visibleEnd: BreadcrumbItem[] = [];
    
    if(items.length > enforcedMaxItems) {
      visibleStart = items.slice(0, 1);
      visibleEnd = items.slice(items.length - listItemCount, items.length);
      elipsesItems = items.slice(1, items.length - listItemCount)
    }

    const handleButtonClick = () => {
      setIsExpanded(true)
    }


  return (
    <nav>
      <ul className='flex flex-row gap-1'>
        {items.length <= enforcedMaxItems ? (
          items.map((item, index) => {

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
          })
        ) : (
          <>
            {visibleStart.map((start) =>
              <li key = {start.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">
                {renderItem ? renderItem(start) : <a href = {start.link}>{start.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}
              </li>
            )}
            <li className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">
              <button
               ref = {elipsesRef}
               aria-label = "Show missing paths"
               className = "p-1 rounded-md hover:bg-gray-200/70">
                <Ellipsis className = "text-gray-500" size = {'16px'}/>
              </button>
              {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
            </li>
            {visibleEnd.map((endItem, index) => {
              if (index === visibleEnd.length - 1){
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
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumb