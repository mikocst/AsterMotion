import { usePagination } from "./PaginationContext"
import { Ellipsis } from "lucide-react"

const PaginationContent = () => {

    const {pagesToRender, activePage, onPageChange} = usePagination()

  return (
    <ul className = "flex flex-row items-center gap-1">
        {pagesToRender.map((item, index) => {
            const isActive = item === activePage;
            
            if (typeof item === 'string'){
                return (
                    <li key = {`ellipsis-${index}`}><Ellipsis size={`16px`} className="text-gray-800"/></li>
                )
            }
            return (
                <li key = {item}>
                    <button
                    className = {`text-sm rounded-md h-7 w-7 text-gray-800 hover:bg-gray-100 ${
                                isActive ? " border rounded-md font-medium border-gray-300" : ""}`}
                    aria-current = {isActive ? "page" : undefined}
                    onClick = {() => onPageChange(item)}
                    >
                        {item}
                    </button>
                </li>
            )
        })}
    </ul>
  )
}

export default PaginationContent