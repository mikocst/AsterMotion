import React from 'react'
import { CheckCircle, Info, TriangleAlert, CircleAlert } from 'lucide-react'

interface ToastProps {
    toastType: "default" | "description" | "success" | "info" | "warning" | "error" | "custom"
    description: string
    id: string
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


const Toast = ({toastType, description, id} : ToastProps) => {

  const variants = toastMap[toastType];

  return (
    <div className = "flex flex-col gap-1">
        <p className = "text-gray-500">{description}</p>
    </div>
  )
}

export default Toast