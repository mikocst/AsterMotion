import React from 'react'

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
    
    if(items.length > maxItems) {
      visibleStart = items.slice(0, 1);
      visibleEnd = items.slice(items.length - maxItems, items.length);
      elipsesItems = items.slice(1, items.length - listItemCount)
    }


  return (
    <nav>
      <ul>
        <li>hi</li>
      </ul>
    </nav>
  )
}

export default Breadcrumb