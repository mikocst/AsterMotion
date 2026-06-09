import React from 'react'
import { ChevronRight, Ellipsis } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import CollapsedMenu from './CollapsedMenu'
import type { BreadcrumbItem } from './types'
import { AnimatePresence, motion } from 'motion/react'
import BreadcrumbStandard from './BreadcrumbStandard'
import BreadcrumbStart from './BreadcrumbStart'
import BreadcrumbEnd from './BreadcrumbEnd'

interface BreadCrumbProps {
    items: BreadcrumbItem[]
    maxItems?: number
    separator?: React.ReactNode
    renderItem?:(item:BreadcrumbItem) => React.ReactNode
}

const Breadcrumb = ({items, maxItems = 5, separator, renderItem} : BreadCrumbProps) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const elipsisRef = useRef<HTMLButtonElement>(null);

    const enforcedMaxItems = Math.max(maxItems, 3);
    const listItemCount = enforcedMaxItems - 2;

    let visibleStart: BreadcrumbItem[] = [];
    let elipsesItems: BreadcrumbItem[] = [];
    let visibleEnd: BreadcrumbItem[] = [];
    
    if(items.length > enforcedMaxItems) {
      visibleStart = items.slice(0, 1);
      visibleEnd = items.slice(items.length - listItemCount, items.length);
      elipsesItems = items.slice(1, items.length - listItemCount)
    }

    const handleButtonClick = () => {
      setIsExpanded(prev => !prev)
    }

    useEffect(() => {
      const clickObserver = (e:MouseEvent) => {
        if(!isExpanded) return;
        
        if(e.target instanceof Node){
          if(elipsisRef.current && !elipsisRef.current.contains(e.target)){
            setIsExpanded(false)
          }
        }
      }
      window.addEventListener('click', clickObserver)
      return () => {
        window.removeEventListener('click', clickObserver)
      }
    }, [isExpanded])


  return (
    <nav>
      <ul className='flex flex-row gap-1'>
        {items.length <= enforcedMaxItems ? (        
            <BreadcrumbStandard
            items = {items}
            renderItem={renderItem}
            separator = {separator}
            />
        ) : (
          <>
            <BreadcrumbStart
            startItems={visibleStart}
            renderItem = {renderItem}
            separator = {separator}
            />
            <li className = "relative flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">
              <button
               ref = {elipsisRef}
               aria-label = "Show missing paths"
               onClick = {handleButtonClick}
               className = "p-1 rounded-md hover:bg-gray-200/70"
               >
                <Ellipsis className = "text-gray-500" size = {'16px'}/>
              </button>
              <AnimatePresence mode='popLayout'>
                {isExpanded === true && (
                  <motion.div
                  className = "absolute flex flex-col w-48 gap-1 bg-white border border-gray-200 rounded-md shadow-sm top-7"
                  initial = {{opacity: 0, scale: 0.95, y: -2}}
                  animate = {{opacity: 1, scale: 1, y: 0}}
                  exit = {{opacity: 0, scale: 0.95, y: -2}}
                  transition={{ease: 'easeOut', duration: 0.2}}
                  >
                    <CollapsedMenu
                     collapsedList={elipsesItems}
                     renderItem={renderItem}
                    /> 
                  </motion.div>
                )}
              </AnimatePresence>
              {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}
            </li>
            <BreadcrumbEnd
            endItems = {visibleEnd}
            renderItem={renderItem}
            separator = {separator}
            />
          </>
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumb