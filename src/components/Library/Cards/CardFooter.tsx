import React, {useRef} from 'react'
import { cn } from 'src/lib/utils'

interface CardFooterProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode
}

const CardFooter = ({children, ref, className, ...props}: CardFooterProps) => {

  return (
    <div 
    className = {cn("pb-[var(--card-py)] px-[var(--card-px)]", className)}
    ref = {ref}
    {...props}
    >
        {children}
    </div>
  )
}

export default CardFooter