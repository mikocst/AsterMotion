import React from 'react'

interface CardDescriptionProps {
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