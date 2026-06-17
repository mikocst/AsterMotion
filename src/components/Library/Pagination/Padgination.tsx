import React from 'react'

interface PaginationProps {
    activePage: number
    totalPages: number
    maxButtons: number
    onPageChange: () => void
}

const Padgination = ({activePage, totalPages, maxButtons}: PaginationProps) => {
  return (
    <div>Padgination</div>
  )
}

export default Padgination