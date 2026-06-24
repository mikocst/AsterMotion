import { usePagination } from "./PaginationContext"
import { Ellipsis } from "lucide-react"

const PaginationContent = () => {

    const {pagesToRender, activePage, onPageChange} = usePagination()

  return (
    <ul>
        {pagesToRender.map((item, index) => {
            const isActive = item === activePage;
            
            if (typeof item === 'string'){
                return (
                    <li key = {`ellipsis-${index}`}><Ellipsis/></li>
                )
            }
            return (
                <li key = {item}>
                    <button
                    className = {`text-sm font-medium border rounded-md h-9 w-9 ${
                                isActive ? "text-white bg-gray-500" : ""}`}
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