import React from 'react'
import { cn } from 'src/lib/utils'

interface CardHeaderProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode
}

const CardHeader = ({children, ref, className, ...props}: CardHeaderProps) => {
  return (
    <div 
    className = {cn("flex flex-col gap-1.5 pt-[var(--card-py)] px-[var(--card-px)]", className)}
    ref = {ref}
    {...props}
    >
      {children}
    </div>
  )
}

export default CardHeader