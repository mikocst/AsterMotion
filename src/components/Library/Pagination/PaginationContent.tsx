import { usePagination } from "./PaginationContext"
import { Ellipsis } from "lucide-react"

const PaginationContent = () => {

    const {pagesToRender} = usePagination()

  return (
    <ul>
        {pagesToRender.map((item, index) => {
            if (item === 'ellipsis'){
                return (
                    <li key = {`ellipsis-${index}`}><Ellipsis/></li>
                )
            }
            return (
                <li key = {item}>
                    <button className = "text-sm font-medium border rounded-md h-9 w-9">
                        {item}
                    </button>
                </li>
            )
        })}
    </ul>
  )
}

export default PaginationContent