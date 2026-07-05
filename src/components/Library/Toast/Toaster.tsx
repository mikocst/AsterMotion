import React, {useState} from 'react'
import { useToast } from './ToastContext'
import Toast from './Toast'
import { motion, AnimatePresence } from 'motion/react'

interface ToasterProps {
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
    expandedOnHover?: boolean
}

const positionMap: Record<NonNullable<ToasterProps['position']>, string> = {
  "top-left": "top-0 left-0 p-4 items-start",
  "top-right": "top-0 right-0 p-4 items-end",
  "top-center": "top-0 left-1/2 -translate-x-1/2 p-4 items-center",
  "bottom-left": "bottom-0 left-0 p-4 items-start",
  "bottom-right": "bottom-0 right-0 p-4 items-end",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 p-4 items-center"
}

const Toaster = ({
  position = "bottom-right", 
  expandedOnHover = true
}: ToasterProps) => {

  const {toasts, dismissToast} = useToast();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isTop = position.startsWith('top');

  return (
    <div 
    className={`fixed z-50 w-full max-w-sm pointer-events-none ${positionMap[position]}`}
    onMouseEnter={() => { if (expandedOnHover) setIsHovered(true) }}
    onMouseLeave={() => { if (expandedOnHover) setIsHovered(false) }}
    >
        <AnimatePresence mode="popLayout">
                {toasts.map((toast, index) => (
                    <motion.div
                        key={toast.id}
                        layout
                        className={`w-full pointer-events-auto ${!isHovered && index > 0 ? 'absolute inset-0' : 'relative'}`}
                    >
                        <Toast
                            id={toast.id}
                            toastType={toast.toastType}
                            description={toast.description}
                            onDismiss={dismissToast}
                            index={index}
                            isHovered = {isHovered}
                            isTop = {isTop}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
    </div>
  )
}

export default Toaster