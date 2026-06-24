import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { usePagination } from './PaginationContext'

const PaginationPrevious = () => {

  const {activePage, onPageChange} = usePagination();

  const isDisabled = activePage === 1;

  return (
    <button
    disabled = {isDisabled}
    className = {`text-sm font-medium border rounded-md h-9 w-9 ${
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
    onClick = {() =>{
            if(isDisabled) {
                return
            }
            else {
                onPageChange(activePage - 1)
            }
        }
    }
    >
        <ChevronLeft size = {'16px'} className = "w-4 h-4 text-gray-500"/>
    </button>
  )
}

export default PaginationPrevious