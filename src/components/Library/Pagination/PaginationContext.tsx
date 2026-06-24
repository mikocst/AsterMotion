import React, { createContext, useContext, useMemo, type ReactNode} from 'react'

interface PaginationContextValue {
    activePage: number
    totalPages: number
    maxButtons: number
    pagesToRender: (number | string)[]
    onPageChange: (page:number) => void
}

interface PaginationProviderProps extends Omit<PaginationContextValue, 'pagesToRender'> {
    children: React.ReactNode
}

const range = (start: number, end:number): number[] => {
    const length = end - start + 1;
    return Array.from({length}, (_, idx) => start + idx)
}

export const generatePaginationRange = (
    activePage: number,
    totalPages: number,
    maxButtons: number
) : (number | string)[] => {
    
    if (totalPages <= maxButtons) {
        return(
           range(1, totalPages)
        )
    }

    const showLeftEllipsis = activePage > maxButtons - 1;
    const showRightEllipsis = activePage < totalPages - (maxButtons -2);

    if(!showLeftEllipsis && showRightEllipsis){
        const leftRange = range(1, maxButtons - 1)
        return (
            [...leftRange, 'ellipsis', totalPages]
        )
    }

    if (showLeftEllipsis && !showRightEllipsis){
        const rightRange = range(totalPages - maxButtons, totalPages)

        return(
            [1, 'ellipsis', ...rightRange]
        )
    }

    if(showLeftEllipsis && showRightEllipsis){
        const middleRange = range(activePage - 1, activePage + 1);
        return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages]
    }

    return []
}

const paginationContext = createContext<PaginationContextValue | undefined>(undefined);

export const PaginationProvider = ({
    children,
    activePage,
    totalPages,
    maxButtons = 5,
    onPageChange,
} : PaginationProviderProps) => {

    const pagesToRender = useMemo(() => {
        return generatePaginationRange(activePage, totalPages, maxButtons)
    }, [activePage, totalPages, maxButtons])

    const value = useMemo(() => ({
        activePage,
        totalPages,
        maxButtons,
        pagesToRender,
        onPageChange,
    }), [activePage, totalPages, maxButtons, pagesToRender, onPageChange]);

    return (
        <paginationContext.Provider value = {value}>
            {children}
        </paginationContext.Provider>
    )
}

export const usePagination = () => {
    const context = useContext(paginationContext)
    if (context === undefined) {
        throw new Error('usePagination must be used within a PaginationProvider')
    }
    return context
}