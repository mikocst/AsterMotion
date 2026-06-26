import React from 'react'
import { usePagination } from './PaginationContext'
import { ChevronRight } from 'lucide-react'

const PaginationNext = () => {

  const {totalPages, activePage, onPageChange} = usePagination();

  const isDisabled = activePage === totalPages

  return (
    <button
    disabled = {isDisabled}
    className = {`text-sm font-medium border rounded-md h-7 w-7 flex justify-center items-center ml-2 ${
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
    onClick = {() =>{
            if(isDisabled) {
                return
            }
            else {
                onPageChange(activePage + 1)
            }
        }
    }
    >
        <ChevronRight size = {'16px'} className = "w-4 h-4 text-gray-500"/>
    </button>
  )
}

export default PaginationNext