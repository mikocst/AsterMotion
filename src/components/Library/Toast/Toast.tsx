import { CheckCircle, Info, TriangleAlert, CircleAlert } from 'lucide-react'
import type { toastType } from './types'
import React, { useEffect } from 'react'
import { useToast } from './ToastContext'

interface ToastProps {
    toastType: toastType
    description: string
    id: string
    header?: string
    onDismiss: (id:string) => void
}

interface ToastVariants {
    styles: string,
    icon?: React.ReactNode
    headerRequired?: boolean
}

const toastMap : Record<ToastProps['toastType'], ToastVariants> = {
    default: {
        styles: "border-gray-200 text-gray-500",
    },
    description: {
        styles: "border-gray-200 text-gray-500",
        headerRequired: true
    } ,
    success: {
        styles: "bg-green-50 border-green-200 text-green-800",
        icon: <CheckCircle className="h-5 w-5" />,
        headerRequired: false
    } ,
    info: {
        styles: "border-gray-200 text-gray-500",
        icon: <Info className = "h-5 w-5 text-gray-700"/>

    } ,
    warning: {
        styles: "border-gray-200 text-yellow-700",
        icon: <TriangleAlert className = "h-5 w-5"/>
    } ,
    error: {
        styles: "border-gray-200 text-red-700",
        icon: <CircleAlert className = "h-5 w-5"/>
    } ,
    custom: {
        styles: "border-gray-200 text-gray-500",
    } ,

}


const Toast = ({toastType, description, id, header, onDismiss} : ToastProps) => {

  const variants = toastMap[toastType];
  const toastHeader = variants.headerRequired === true;
  const toastIcon = variants.icon;

  useEffect(() => {
       const timer =  setTimeout((
            () => onDismiss(id)
        ), 4000)

        return(
           () => clearTimeout(timer)
        )
  },[])

  return (
    <div 
    id = {id}
    className = {`flex flex-col gap-1 p-4 border rounded-lg ${variants.styles}`}>
        {toastHeader && (
            <h3>{header}</h3>
        )}
        <div className = "flex flex-row gap-2 items-start">
            {toastIcon && (
                toastIcon
            )}
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Toast