import React from 'react'

interface CarouselContentProps {
    children: React.ReactNode
    ref: React.RefObject<HTMLDivElement | null>
}

const CarouselContent = ({children, ref}: CarouselContentProps) => {
  return (
    <div 
    ref = {ref}
    className = "h-full w-full overflow-hidden">
        <div className = "flex flex-row">
            {children}
        </div>
    </div>
  )
}

export default CarouselContent