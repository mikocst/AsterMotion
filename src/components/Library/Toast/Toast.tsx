import { CheckCircle, Info, TriangleAlert, CircleAlert } from 'lucide-react'
import type { toastType } from './types'
import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { distance } from 'motion'

interface ToastProps {
    toastType: toastType
    description: string
    id: string
    header?: string
    onDismiss: (id:string) => void
    isHovered: boolean
    index: number
    isTop: boolean
    total: number
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


const Toast = ({toastType, description, id, header, onDismiss, isHovered, index, isTop, total} : ToastProps) => {

  const variants = toastMap[toastType];
  const toastHeader = variants.headerRequired === true;
  const toastIcon = variants.icon;
  const effectiveTotal = Math.min(total, 3);
  const distanceFromNewest = (effectiveTotal - 1) - index;
  const isOverflowing = index < (total - 3);

  useEffect(() => {
        if(isHovered){
            return
        }

       const timer =  setTimeout((
            () => onDismiss(id)
        ), 4000)

        return(
           () => clearTimeout(timer)
        )
  },[isHovered, id, onDismiss])

  return (
    <motion.div 
    initial = {{opacity: 0, y: isTop ? -20 : 20, scale: 0.9}}
    animate = {{
        scale: isHovered ? 1 : isOverflowing ? 0.8 : 1 - distanceFromNewest * 0.05,

        y: isHovered 
        ? distanceFromNewest * (isTop ? 64 : -64) 
        : distanceFromNewest * (isTop ? 10 : -10),

        opacity: index > 2 && !isHovered ? 0 : 1
        }}

        exit={{ 
            opacity: 0, 
            scale: 0.95,
            y: isTop ? -40 : 40,
            transition: { duration: 0.05 }
          }}

        style={{ 
            zIndex: 100 + index,
            transformOrigin: isTop ? "top center" : "bottom center"
        }}
        id = {id}
        className = {` p-4 border rounded-lg ${variants.styles}`}
        >
        {toastHeader && (
            <h3>{header}</h3>
        )}
        <div className = "flex flex-row gap-2 items-start">
            {toastIcon && (
                toastIcon
            )}
            <p>{description}</p>
            <p>{index}</p>
        </div>
    </motion.div>
  )
}

export default Toast