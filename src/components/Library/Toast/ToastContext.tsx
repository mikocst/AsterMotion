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

export const ToastProvider = ({
    children
} : ToastProviderProps) => {

    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (type: toastType, description: string) => {
        const newToast : Toast = {
            id: crypto.randomUUID(),
            description: description,
            toastType: type
        }

        setToasts(prev => ([...prev, newToast]));
    }

    const dismissToast = (toastId: string) => {
        setToasts(prev => prev.filter((toast) => (
            toast.id !== toastId
        )))
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

const toastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
    const context = useContext(toastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};