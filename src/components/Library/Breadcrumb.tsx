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

const Breadcrumb = () => {
  return (
    <div>Breadcrumb</div>
  )
}

export default Breadcrumb