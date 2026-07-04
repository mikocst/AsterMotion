import React from 'react'

interface ToastProps {
    type: "default" | "description" | "success" | "info" | "warning" | "error" | "custom"
    
}

const Toast = () => {
  return (
    <div>Toast</div>
  )
}

export default Toast