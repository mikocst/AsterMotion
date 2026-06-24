import React from 'react'
import { PaginationProvider } from './PaginationContext'

interface PaginationProps {
    activePage: number
    totalPages: number
    maxButtons?: number
    onPageChange: (page:number) => void
    children: React.ReactNode
}

const Padgination = ({activePage, totalPages, maxButtons = 5, onPageChange, children}: PaginationProps) => {
  return (
    <nav role="navigation" aria-label="pagination" className="flex justify-center w-full">
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

export default Padgination