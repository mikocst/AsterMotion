interface PaginationContextValue {
    activePage: number
    totalPages: number
    maxButtons: number
    pagesToRender: (number | string)[]
    onPageChange: (page:number) => void
}

export const generatePaginationRange = (
    activePage: number,
    totalPages: number,
    maxButtons: number
) : (number | string)[] => {
    
    if (totalPages <= maxButtons) {

    }

    const showLeftEllipsis = activePage > maxButtons - 1;
    const showRightEllipsis = activePage < totalPages - (maxButtons -2);

    if(!showLeftEllipsis && showRightEllipsis){

    }

    if (showLeftEllipsis && !showRightEllipsis){
        
    }
}