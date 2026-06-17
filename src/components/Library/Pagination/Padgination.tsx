import React from 'react'

interface PaginationProps {
    activePage: number
    totalPages: number
    maxButtons?: number
    pageNumber: number
    onPageChange: (page:number) => void
}

const Padgination = ({activePage, totalPages, maxButtons = 5,}: PaginationProps) => {
  return (
    <div>Padgination</div>
  )
}

export default Padgination