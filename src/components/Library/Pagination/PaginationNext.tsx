import React from 'react'
import { usePagination } from './PaginationContext'
import { ChevronRight } from 'lucide-react'

const PaginationNext = () => {

  const {totalPages, activePage, onPageChange} = usePagination();

  const isDisabled = activePage === totalPages

  return (
    <button
    disabled = {isDisabled}
    className = {`text-sm font-medium rounded-md h-7 w-7 flex justify-center items-center ml-2 ${
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
        <ChevronRight size = {'16px'} className = {`text-sm rounded-md h-4 w-4 ${
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}/>
    </button>
  )
}

export default PaginationNext