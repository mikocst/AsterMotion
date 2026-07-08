import React, {useState} from 'react'
import { useToast } from './ToastContext'
import Toast from './Toast'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from 'src/lib/utils'

interface ToasterProps {
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
    expandedOnHover?: boolean
}

const positionMap: Record<NonNullable<ToasterProps['position']>, string> = {
  "top-left": "top-20 left-0 p-4",
  "top-right": "top-20 right-0 p-4",
  "top-center": "top-20 left-1/2 -translate-x-1/2 p-4",
  "bottom-left": "bottom-0 left-0 p-4",
  "bottom-right": "bottom-0 right-0 p-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 p-4"
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
    className={cn('fixed z-50 w-full max-w-sm pointer-events-none', positionMap[position])}
    onMouseEnter={() => { if (expandedOnHover) setIsHovered(true) }}
    onMouseLeave={() => { if (expandedOnHover) setIsHovered(false) }}
  >
    <div className="relative w-full flex flex-col justify-end items-end">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast, index) => {
          const distanceFromNewest = (toasts.length - 1) - index;

          return(
                  <motion.div
                  key={toast.id}
                  layout
                  initial={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.9 }}
                  animate={{
                    scale: isHovered ? 1 : 1 - distanceFromNewest * 0.05,
                    y: isHovered 
                      ? distanceFromNewest * (isTop ? 64 : -64) 
                      : distanceFromNewest * (isTop ? 10 : -10),
                    opacity: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.85,
                    y: isTop ? -40 : 40 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full absolute left-0 right-0 bottom-0 pointer-events-auto p-2"
                >
                  <Toast
                    id={toast.id}
                    toastType={toast.toastType}
                    description={toast.description}
                    onDismiss={dismissToast}
                    index={index}
                    isHovered={isHovered}
                    isTop={isTop}
                    total={toasts.length}
                  />
                </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  </div>
)
}

export default Toaster