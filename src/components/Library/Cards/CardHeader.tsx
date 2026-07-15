import React from 'react'
import { cn } from 'src/lib/utils'

interface CardHeaderProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode
}

const CardHeader = ({children, ...props}: CardHeaderProps) => {
  return (
    <div 
    className = {cn("pt-[var(--card-py)] px-[var(--card-px)]")}
    >
      CardTitle
    </div>
  )
}

export default CardHeader