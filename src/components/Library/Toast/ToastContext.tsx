import React, { createContext, useContext, useMemo, useState } from 'react'
import type { toastType } from './types'

interface Toast {
    id:string
    description: string
    toastType: toastType
}

interface ToastContextValue {
    toasts: Toast[]
    addToast: (type: toastType, description:string) => void
    dismissToast: (id:string) => void
}

interface ToastProviderProps {
    children: React.ReactNode
}

const toastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({
    children
} : ToastProviderProps) => {

    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toastId:string, description: string) => {

    }

    const dismissToast = (toastId: string) => {

    }

    return (
        <toastContext.Provider value = {{
            addToast,
            dismissToast,
            toasts
        }}>
            {children}
        </toastContext.Provider>
    )
}