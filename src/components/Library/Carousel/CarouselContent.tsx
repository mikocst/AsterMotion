import React from 'react'

interface CarouselContentProps {
    children: React.ReactNode
}

const CarouselContent = ({children}: CarouselContentProps) => {
  return (
    <div className = "w-[480px] h-full flex flex-row overflow-hidden">
        {children}
    </div>
  )
}

export default CarouselContent