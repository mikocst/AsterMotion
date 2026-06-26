import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { usePagination } from './PaginationContext'

const PaginationPrevious = () => {

  const {activePage, onPageChange} = usePagination();

  const isDisabled = activePage === 1;

  return (
    <button
    disabled = {isDisabled}
    className = {`text-sm font-medium rounded-md h-7 w-7 mr-2 flex justify-center items-center ${
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
        <ChevronLeft size = {'16px'} className = {`text-sm rounded-md h-4 w-4 ${
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}/>
    </button>
  )
}

export default PaginationPrevious