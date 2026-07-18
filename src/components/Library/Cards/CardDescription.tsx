import React from 'react'
import { cn } from 'src/lib/utils'

interface CardDescriptionProps extends React.ComponentPropsWithRef<"p"> {
  children: React.ReactNode
}

const CardDescription = ({children, ref, className, ...props}: CardDescriptionProps) => {
  return (
    <p className = {cn('text-sm text-gray-500', className)}
    ref = {ref}
    {...props}
    >
        {children}
    </p>
  )
}

export default CardDescription