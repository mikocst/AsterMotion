import React from 'react'
import { PaginationProvider } from './PaginationContext'

interface PaginationProps {
    activePage: number
    totalPages: number
    maxButtons?: number
    onPageChange: (page:number) => void
    children: React.ReactNode
}

const Pagination = ({activePage, totalPages, maxButtons = 5, onPageChange, children}: PaginationProps) => {
  return (
    <nav role="navigation" aria-label="pagination" className="flex flex-row items-center justify-center w-full">
      <PaginationProvider
        activePage={activePage}
        totalPages={totalPages}
        maxButtons={maxButtons}
        onPageChange={onPageChange}
      >
        {children}
      </PaginationProvider>
    </nav>
  )
}

export default Pagination