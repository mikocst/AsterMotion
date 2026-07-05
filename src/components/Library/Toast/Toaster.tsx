import React from 'react'
import { useToast } from './ToastContext'
import Toast from './Toast'

interface ToasterProps {
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
    onClick: () => void
    visibleToast: boolean
}

const Toaster = () => {

  const {toasts, dismissToast} = useToast();

  return (
    <div className = "flex flex-col">
        {toasts.map((toast) => (
          <Toast
          key = {toast.id}
          id = {toast.id}
          toastType= {toast.toastType}
          description= {toast.description}
          onDismiss={dismissToast}
          />
        ))}
    </div>
  )
}

export default Toaster