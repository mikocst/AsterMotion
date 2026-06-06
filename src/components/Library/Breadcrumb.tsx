import React from 'react'
import { ChevronRight } from 'lucide-react'

export type BreadcrumbItem = {
    id: string,
    title: string,
    link: string
}

interface BreadCrumbProps {
    items: BreadcrumbItem[]
    maxItems?: number
    separator?: React.ReactNode
    renderItem?:(item:BreadcrumbItem) => React.ReactNode
}

const Breadcrumb = ({items, maxItems = 5, separator, renderItem} : BreadCrumbProps) => {

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


  return (
    <nav>
      <ul>
        {items.length <= enforcedMaxItems ? (
          items.map((item, index) => {

            if(index === items.length - 1){
              return(
                <li key = {item.id} aria-current ="page">
                    {item.title}
                </li>
              )
            }
            return (
              <li key = {item.id}>
                {renderItem ? renderItem(item) : <a href = {item.link}>{item.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
              </li>
            )
          })
        ) : (
          <>
            {visibleStart.map((start) =>
              <li key = {start.id}>
                {renderItem ? renderItem(start) : <a href = {start.link}>{start.title}</a>}
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
              </li>
            )}
            <li>
              <button aria-label = "Show missing paths">...</button>
              {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
            </li>
            {visibleEnd.map((endItem, index) => {
              if (index === visibleEnd.length - 1){
                return(
                  <li key = {endItem.id} aria-current ="page">
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