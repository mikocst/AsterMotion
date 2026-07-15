import React from 'react'
import { cn } from 'src/lib/utils'

interface CardDescriptionProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode
}

const CardDescription = ({children}: CardDescriptionProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default CardDescription