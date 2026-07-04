import React from 'react'

interface ToasterProps {
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
    onClick: () => void
    visibleToast: boolean
}

const Toaster = () => {
  return (
    <div>Toaster</div>
  )
}

export default Toaster