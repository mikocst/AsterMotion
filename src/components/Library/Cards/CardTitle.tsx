import React from 'react'
import { cn } from 'src/lib/utils'

interface CardTitleProps extends React.ComponentPropsWithRef<"h3"> {
  children: React.ReactNode
}

const CardTitle = ({children, ref, className, ...props}: CardTitleProps) => {
  return (
    <h3 className = {cn('font-semibold leading-none tracking-tight', className)}
    ref = {ref}
    {...props}
    >
      {children}
    </h3>
  )
}

export default CardTitle