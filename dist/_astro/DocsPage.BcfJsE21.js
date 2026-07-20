import{j as e}from"./jsx-runtime.u17CrQMm.js";import{c,A as f,B as a,a as g,C as h,b as v,d as b,e as y,f as C,g as l,h as m,i as I,j as w,k as R,I as P,M as N,P as T,l as S,m as D,n as B,R as j,o as d,S as k,T as A,p as M,q as E,u as H,r as u}from"./Toaster.QyQTV1Ma.js";import{a as i}from"./index.DMjfsKZS.js";const O=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],V=c("check",O);const L=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],z=c("copy",L),W=[{name:"What is Aster.motion?",content:"Aster.motion is an open-source component library. Copy, paste, and edit the components for your own projects."},{name:"Is it free to use?",content:"Yes, every component is free to copy, paste, and edit in any project, personal or commercial."},{name:"Does it use Tailwind?",content:"Yes, every component is styled with Tailwind CSS utility classes and animated with Motion."}],G=()=>e.jsx(f,{items:W}),F=()=>e.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[e.jsx(a,{color:"blue",variant:"pill",children:"Default"}),e.jsx(a,{color:"green",variant:"pill",children:"Success"}),e.jsx(a,{color:"red",variant:"pill",children:"Error"}),e.jsx(a,{color:"yellow",variant:"pill",children:"Warning"}),e.jsx(a,{color:"mono",variant:"flat",children:"Mono"})]}),$=[{id:"1",title:"Home",link:"#"},{id:"2",title:"Docs",link:"#"},{id:"3",title:"Components",link:"#"},{id:"4",title:"Breadcrumb",link:"#"}],_=()=>e.jsx(g,{items:$,maxItems:3}),q=()=>e.jsxs(h,{size:"md",variant:"elevated",className:"w-full max-w-sm bg-white border-gray-200 shadow-sm",children:[e.jsxs(v,{children:[e.jsx(b,{children:"Team Plan"}),e.jsx(y,{children:"Everything you need to collaborate with your team."})]}),e.jsx(C,{children:e.jsx(l,{buttonCopy:I.SELECT_PLAN,variant:m.Primary})})]}),Y=["Slide One","Slide Two","Slide Three"],K=()=>e.jsx("div",{className:"w-full h-40",children:e.jsx(w,{children:Y.map(t=>e.jsx(R,{id:t,item:t},t))})}),X=()=>{const[t,r]=i.useState("");return e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(P,{label:"Email",error:!1,placeholder:"you@example.com",value:t,onChange:o=>r(o.target.value)})})},U=()=>e.jsx(N,{content:"This action cannot be undone. Are you sure you want to continue?"}),J=()=>{const[t,r]=i.useState(1);return e.jsxs(T,{activePage:t,totalPages:12,onPageChange:r,children:[e.jsx(S,{}),e.jsx(D,{}),e.jsx(B,{})]})},Q=()=>e.jsxs(j,{defaultValue:"monthly",name:"billing-cycle",children:[e.jsx(d,{value:"monthly",children:"Monthly"}),e.jsx(d,{value:"yearly",children:"Yearly"})]}),Z=()=>e.jsx(k,{}),ee=()=>e.jsx(A,{}),re=()=>{const{addToast:t}=H();return e.jsx(l,{variant:m.Primary,onClick:()=>t("success","Changes saved successfully."),children:"Show Toast"})},te=()=>e.jsxs(M,{children:[e.jsx(re,{}),e.jsx(E,{position:"top-right",expandedOnHover:!0})]}),ne=`import { ChevronLeft } from "lucide-react";\r
import {AnimatePresence, motion} from 'motion/react';\r
import { useState, useId, useRef } from "react";\r
\r
interface AccordionProps {\r
    items: Array<{\r
        name: string\r
        content: string\r
    }>\r
}\r
\r
const MotionDiv = motion.create('div');\r
const MotionChevronLeft = motion.create(ChevronLeft);\r
\r
const Accordion = ({ items}: AccordionProps) => {\r
  const generatedId = useId();\r
  const [activeIndex, setActiveIndex] = useState<number | null>(null);\r
  const buttonRefs = useRef<HTMLButtonElement[]>([])\r
\r
  const toggleAccordionItem = (index:number) => {\r
    if(activeIndex === index) {\r
        setActiveIndex(null);\r
    } else {\r
        setActiveIndex(index);\r
    }\r
}\r
\r
const handleKeyDown = (e: React.KeyboardEvent, index:number) => {\r
    let nextIndex = 0;\r
    if(e.key === 'ArrowUp'){\r
        e.preventDefault();\r
        nextIndex = (index - 1 + items.length) % items.length\r
        buttonRefs.current[nextIndex].focus();\r
    }\r
\r
    else if (e.key === 'ArrowDown'){\r
         e.preventDefault();\r
         nextIndex = (index + 1) % items.length\r
         buttonRefs.current[nextIndex].focus();\r
    }\r
}\r
\r
  return (\r
    <div className = "flex flex-col gap-2">\r
        {items.map((item, index) => {\r
            const triggerId = \`\${generatedId}-trigger-\${index}\`\r
            const contentId = \`\${generatedId}-content-\${index}\`\r
    \r
            return (\r
            <div \r
             key = {triggerId}\r
             className = "flex flex-col justify-between py-2 border-b border-gray-200"\r
             >\r
                <button \r
                ref={(el) => { if (el) buttonRefs.current[index] = el; }}\r
                aria-controls = {contentId}\r
                id = {triggerId}\r
                aria-expanded = {activeIndex === index ? true : false}\r
                onKeyDown={(e) => handleKeyDown(e, index)}\r
                className = "flex flex-row justify-between py-1 focus-visible:rounded-md cursor-pointer"\r
                onClick = {() => toggleAccordionItem(index)}\r
                >\r
                    <p className = "text-gray-700 font-medium min-w-0 text-left">{item.name}</p>\r
                    <MotionChevronLeft\r
                        animate = {{rotate: activeIndex === index ? -90 : 0}}\r
                        transition = {{ease: 'easeOut', duration: 0.2}}\r
                        className="text-gray-400 w-[20px] h-[20px]"\r
                    >\r
                    </MotionChevronLeft>\r
                </button>\r
                <AnimatePresence>\r
                    {activeIndex === index && (\r
                    <MotionDiv\r
                    role="region"\r
                     id = {contentId}\r
                     aria-labelledby= {triggerId}   \r
                     initial = {{height: 0}}\r
                     animate = {{height: 'auto'}}\r
                     exit={{ height: 0 }}\r
                     transition={{ duration: 0.2, ease: "easeOut" }}\r
                     className = "overflow-hidden"\r
                     >\r
                        <div className = "py-2">\r
                            <p className = "text-gray-600">\r
                            {item.content}\r
                            </p>\r
                        </div>\r
                    </MotionDiv>\r
                )}\r
                </AnimatePresence>\r
            </div>\r
            )\r
        })}\r
    </div>\r
  )\r
}\r
\r
export default Accordion`,oe=`import React from 'react'\r
import { cn } from 'src/lib/utils';\r
\r
const variantBadgeStyles = {\r
    pill: 'rounded-md',\r
    monoPill: 'rounded-md',\r
    flat: 'rounded-sm'\r
} as const;\r
\r
const badgeColors = {\r
    blue: 'text-blue-500 bg-blue-100/60 border border-blue-300',\r
    mono: 'text-gray-500 bg-gray-100/60 border-gray-300',\r
    red: 'text-red-500 bg-red-100/60 border-red-300',\r
    green: 'text-green-500 bg-green-100/60 border-green-300',\r
    yellow: 'text-yellow-500 bg-yellow-100/60 border-yellow-300'\r
} as const;\r
\r
interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {\r
    color: keyof typeof badgeColors\r
    variant: keyof typeof variantBadgeStyles\r
}\r
\r
const Badge = ({color, variant, children, ...rest}: BadgeProps) => {\r
  return (\r
    <div \r
    className = {\r
        cn('inline-flex items-center px-2 text-sm font-medium',\r
        badgeColors[color],\r
        variantBadgeStyles[variant]\r
        )}\r
    {...rest}    \r
    >\r
       {children}\r
    </div>\r
  )\r
}\r
\r
export default Badge`,ae=`import { motion} from 'motion/react';\r
import { useState } from "react";\r
\r
const MotionDiv = motion.create('div');\r
\r
const Switch = () => {\r
\r
const [isOn, setIsOn] = useState(true);\r
\r
const toggleSwitch = () => {\r
    setIsOn(!isOn);\r
}\r
\r
  return (\r
    <MotionDiv\r
    className = "w-10 h-5 rounded-full flex items-center cursor-pointer relative p-1"\r
    onClick={toggleSwitch}\r
    animate = {{backgroundColor: isOn ? '#0f327c' : '#e5e7eb'}}\r
    >\r
            <MotionDiv \r
                initial = {{translateX: 20}}\r
                animate = {{translateX: isOn ? 20 : 0}}\r
                transition = {{type: 'spring', stiffness: 300, damping: 30}}\r
                className = "bg-white w-5 h-5 rounded-full absolute left-0"\r
            />\r
        </MotionDiv>\r
  )\r
}\r
\r
export default Switch`,se=`import {AnimatePresence, motion} from 'motion/react';
import { useState } from "react";

const MotionDiv = motion.create('div');

export interface TabItem {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  tabs?: TabItem[]
}

const defaultTabs: TabItem[] = [
  {
    title: "Draft Tab",
    content: "Content here is a draft and not finalized."
  },
  {
    title: "Low-Fi Tab",
    content: "Content here is low-fidelity and may change."
  },
  {
    title: "Hi-Fi Tab",
    content: "Content here is high-fidelity and close to final."
  }
]

const Tabs = ({ tabs = defaultTabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className = "flex flex-col gap-1">
       <div className = "flex flex-row gap-4 py-2 overflow-x-auto border-b border-gray-200 relative">
            {tabs.map((tab, index) => (
            <div key={index}
                onClick={() => setActiveTab(index)}
                className = "flex flex-col relative z-20 flex-shrink-0 cursor-pointer"
                >
                {activeTab === index && (
                    <MotionDiv
                        layoutId = "pill"
                        layout
                        transition = {{ ease: 'easeInOut', duration: 0.3 }}
                        className = "absolute inset-0 h-auto bg-blue-200 rounded-md z-10 w-full"
                    />
                    )}
                    <h3 className = {activeTab === index ? "text-blue-800 font-medium relative z-20 px-2 whitespace-nowrap" : "text-gray-400 relative z-20 px-2 whitespace-nowrap hover:font-medium"}>
                        {tab.title}
                    </h3>

            </div>
        ))}
       </div>
       <AnimatePresence
       mode='wait'
       >
         {tabs[activeTab] && (
            <MotionDiv
             key = {activeTab}
             initial = {{opacity: 0}}
             animate = {{opacity: 1}}
             exit = {{opacity: 0}}
             transition = {{duration: 0.2, ease: "easeOut"}}
            >
                <div>{tabs[activeTab].content}</div>
            </MotionDiv>
         )}
       </AnimatePresence>
    </div>
  )
}

export default Tabs`,ie=`import { cn } from "src/lib/utils"\r
import { useId } from "react"\r
\r
\r
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {\r
    label: string;\r
    error: string | boolean;\r
    ref: React.Ref<HTMLInputElement>;\r
}\r
\r
const variantInputStyles = {\r
    error: 'border-red-500 focus:ring-2 focus-ring-red-300',\r
    normal: 'border-gray-200 focus:ring-2 focus-ring-blue-300',\r
    disabled: 'bg-gray-50 border-gray-100 cursor-not-allowed text-gray-100'\r
}\r
\r
const Input = ({label, error, ref, ...props}: InputProps) => {\r
\r
    const generatedId = useId();\r
    const inputId = props.id || generatedId;\r
\r
    function getInputStyles() {\r
        const styles = [];\r
        if (props.disabled) {\r
            styles.push(variantInputStyles.disabled);\r
        }\r
        else if (error) {\r
             styles.push(variantInputStyles.error);\r
        }\r
        else {\r
             styles.push(variantInputStyles.normal);\r
        }\r
        return styles.join(' ');\r
    }\r
\r
  return (\r
    <div className = "flex flex-col gap-1">\r
        <label\r
        className = "font-medium text-gray-700"\r
        htmlFor={inputId}\r
        >\r
            {label}\r
        </label>\r
        <input\r
        {...props}\r
        ref={ref}\r
        id={inputId}\r
        aria-invalid = {!!error}\r
        aria-describedby= {error ? \`\${inputId}-error\` : undefined}\r
        className = {cn("w-full px-3 py-2 rounded-md border",\r
            getInputStyles())}\r
        />\r
        {error && typeof error === 'string' && (\r
            <p\r
            className = "text-sm text-red-600 mt-1"\r
            id = {\`\${inputId}-error\`}\r
            >\r
                {error}\r
            </p> \r
        )}\r
    </div>\r
  )\r
}\r
\r
export default Input`,de=`import {useEffect, useRef, useState} from "react";\r
import {AnimatePresence, motion} from 'motion/react';\r
import {type HTMLMotionProps } from 'motion/react'\r
import Button from "@components/Button";\r
import { buttonVariant, buttonCopy } from "@types";\r
import useMergedRefs from "src/lib/utils/mergedRefs";\r
\r
interface DialogProps extends HTMLMotionProps<"dialog"> {\r
    content: string;\r
    ref?: React.Ref<HTMLDialogElement>\r
    isOpen?: boolean\r
}\r
\r
const Modal = ({ content, ref, isOpen: externalOpen, ...props}: DialogProps) => {\r
\r
const dialogRef = useRef<HTMLDialogElement>(null);\r
const mergedRefs = useMergedRefs(ref, dialogRef);\r
const [dialogOpen, setIsDialogOpen] = useState(false);\r
\r
const isOpen = externalOpen ?? dialogOpen;\r
\r
const handleOpen = () => setIsDialogOpen(true)\r
const handleClose = (e?: React.SyntheticEvent) => {\r
    if(e) {\r
      e.preventDefault()\r
    }\r
    setIsDialogOpen(false)\r
}\r
\r
const handleClick = (e?: React.MouseEvent<HTMLDialogElement>) => {\r
  const dialog = dialogRef.current;\r
  if (!dialog) return;\r
\r
  const rect = dialog.getBoundingClientRect();\r
\r
  if(!e) return\r
  \r
  const outsideClick = (\r
    e.clientX < rect.left || e.clientX > rect.right ||\r
    e.clientY < rect.top || e.clientY > rect.bottom\r
  )\r
\r
  if(outsideClick) {\r
    handleClose();\r
  }\r
}\r
\r
useEffect(() => {\r
  const dialog = dialogRef.current;\r
  if(!dialog || !isOpen) return;\r
\r
  if(!dialog.open) {\r
    dialog.showModal()\r
  }\r
}, [isOpen])\r
\r
useEffect(() => {\r
  if(isOpen) {\r
    document.body.style.overflow = 'hidden'\r
  }\r
  else {\r
    document.body.style.overflow = 'unset'\r
  }\r
\r
  return () => {\r
    document.body.style.overflow = 'unset'\r
  }\r
}, [isOpen])\r
\r
  return (\r
    <div className = "relative">\r
        <Button\r
        variant={buttonVariant.Primary}\r
        buttonCopy={buttonCopy.OPEN_DIALOG}\r
        onClick={handleOpen}\r
        />\r
        <AnimatePresence>\r
          {isOpen === true && (\r
            <motion.dialog\r
              {...props}\r
              ref = {mergedRefs}\r
              onCancel={handleClose}\r
              onClose={handleClose}\r
              onClick = {handleClick}\r
              initial = {{opacity: 0}}\r
              animate = {{opacity: 1}}\r
              exit = {{opacity: 0}}\r
              transition = {{ease: 'easeOut', duration: 0.2}}\r
              onAnimationComplete = {(definition) => {\r
                if(definition === "exit" && dialogRef.current?.open) {dialogRef.current.close()}\r
              }}\r
              className = "w-[calc(100%-2rem)] max-w-md p-6 border border-gray-200 rounded-lg"\r
              >\r
                  <div>\r
                      <h3 className = "mb-4 text-lg font-medium">Confirm Changes</h3>\r
                      <p className = "mb-6 text-gray-700">{content}</p>\r
                      <div className = "flex flex-row flex-wrap justify-end gap-2">\r
                          <Button\r
                          variant = {buttonVariant.Secondary}\r
                          buttonCopy = {buttonCopy.CANCEL}\r
                          onClick={handleClose}\r
                          />\r
                          <Button\r
                          variant = {buttonVariant.Primary}\r
                          buttonCopy = {buttonCopy.CONFIRM}\r
                          />\r
                      </div>\r
                  </div>\r
            </motion.dialog>\r
          )}\r
        </AnimatePresence>\r
    </div>\r
  )\r
}\r
\r
export default Modal`,ce=`import React from 'react'\r
import { ChevronRight, Ellipsis } from 'lucide-react'\r
import { useState, useEffect, useRef } from 'react'\r
import CollapsedMenu from './CollapsedMenu'\r
import type { BreadcrumbItem } from './types'\r
import { AnimatePresence, motion } from 'motion/react'\r
import BreadcrumbStandard from './BreadcrumbStandard'\r
import BreadcrumbStart from './BreadcrumbStart'\r
import BreadcrumbEnd from './BreadcrumbEnd'\r
\r
interface BreadCrumbProps {\r
    items: BreadcrumbItem[]\r
    maxItems?: number\r
    separator?: React.ReactNode\r
    renderItem?:(item:BreadcrumbItem) => React.ReactNode\r
}\r
\r
const Breadcrumb = ({items, maxItems = 5, separator, renderItem} : BreadCrumbProps) => {\r
\r
    const [isExpanded, setIsExpanded] = useState<boolean>(false);\r
    const elipsisRef = useRef<HTMLButtonElement>(null);\r
\r
    const enforcedMaxItems = Math.max(maxItems, 3);\r
    const listItemCount = enforcedMaxItems - 2;\r
\r
    let visibleStart: BreadcrumbItem[] = [];\r
    let elipsesItems: BreadcrumbItem[] = [];\r
    let visibleEnd: BreadcrumbItem[] = [];\r
    \r
    if(items.length > enforcedMaxItems) {\r
      visibleStart = items.slice(0, 1);\r
      visibleEnd = items.slice(items.length - listItemCount, items.length);\r
      elipsesItems = items.slice(1, items.length - listItemCount)\r
    }\r
\r
    const handleButtonClick = () => {\r
      setIsExpanded(prev => !prev)\r
    }\r
\r
    useEffect(() => {\r
      const clickObserver = (e:MouseEvent) => {\r
        if(!isExpanded) return;\r
        \r
        if(e.target instanceof Node){\r
          if(elipsisRef.current && !elipsisRef.current.contains(e.target)){\r
            setIsExpanded(false)\r
          }\r
        }\r
      }\r
      window.addEventListener('click', clickObserver)\r
      return () => {\r
        window.removeEventListener('click', clickObserver)\r
      }\r
    }, [isExpanded])\r
\r
\r
  return (\r
    <nav>\r
      <ul className='flex flex-row flex-wrap items-center gap-1'>\r
        {items.length <= enforcedMaxItems ? (        \r
            <BreadcrumbStandard\r
            items = {items}\r
            renderItem={renderItem}\r
            separator = {separator}\r
            />\r
        ) : (\r
          <>\r
            <BreadcrumbStart\r
            startItems={visibleStart}\r
            renderItem = {renderItem}\r
            separator = {separator}\r
            />\r
            <li className = "relative flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
              <button\r
               ref = {elipsisRef}\r
               aria-label = "Show missing paths"\r
               onClick = {handleButtonClick}\r
               className = "p-1 rounded-md hover:bg-gray-200/70"\r
               >\r
                <Ellipsis className = "text-gray-500" size = {'16px'}/>\r
              </button>\r
              <AnimatePresence mode='popLayout'>\r
                {isExpanded === true && (\r
                  <motion.div\r
                  className = "absolute flex flex-col w-48 gap-1 bg-white border border-gray-200 rounded-md shadow-sm top-7"\r
                  initial = {{opacity: 0, scale: 0.95, y: -2}}\r
                  animate = {{opacity: 1, scale: 1, y: 0}}\r
                  exit = {{opacity: 0, scale: 0.95, y: -2}}\r
                  transition={{ease: 'easeOut', duration: 0.2}}\r
                  >\r
                    <CollapsedMenu\r
                     collapsedList={elipsesItems}\r
                     renderItem={renderItem}\r
                    /> \r
                  </motion.div>\r
                )}\r
              </AnimatePresence>\r
              {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}\r
            </li>\r
            <BreadcrumbEnd\r
            endItems = {visibleEnd}\r
            renderItem={renderItem}\r
            separator = {separator}\r
            />\r
          </>\r
        )}\r
      </ul>\r
    </nav>\r
  )\r
}\r
\r
export default Breadcrumb`,le=`import React from 'react'\r
import type { BreadcrumbItem } from './types'\r
import { ChevronRight } from 'lucide-react'\r
\r
interface BreadcrumbStartProps {\r
    startItems: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbStart = ({startItems, renderItem, separator}: BreadcrumbStartProps) => {\r
  return (\r
    <>\r
        {startItems.map((start) =>\r
              <li key = {start.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
                {renderItem ? renderItem(start) : <a href = {start.link}>{start.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}\r
              </li>\r
            )}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbStart`,me=`import React from 'react'\r
import type { BreadcrumbItem } from './types'\r
import { ChevronRight } from 'lucide-react'\r
\r
interface breadcrumbStandardProps{\r
    items: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbStandard = ({items, renderItem, separator}: breadcrumbStandardProps) => {\r
  return (\r
    <>\r
     {items.map((item, index) => {\r
            if(index === items.length - 1){\r
              return(\r
                <li key = {item.id} aria-current ="page" className = "text-gray-700">\r
                    {item.title}\r
                </li>\r
              )\r
            }\r
            return (\r
              <li key = {item.id} className = "flex flex-row items-center gap-1 text-gray-500 hover:text-gray-700">\r
                {renderItem ? renderItem(item) : <a href = {item.link}>{item.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-500"/>}\r
              </li>\r
            )\r
          })}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbStandard`,ue=`import type { BreadcrumbItem } from "./types"\r
import { ChevronRight } from "lucide-react"\r
\r
interface BreadcrumbEndProps {\r
    endItems: BreadcrumbItem[]\r
    renderItem?: (item:BreadcrumbItem) => React.ReactNode\r
    separator?: React.ReactNode\r
}\r
\r
const BreadcrumbEnd = ({endItems, renderItem, separator}: BreadcrumbEndProps) => {\r
  return (\r
    <>\r
    {endItems.map((endItem, index) => {\r
              if (index === endItems.length - 1){\r
                return(\r
                  <li key = {endItem.id} aria-current ="page" className = "flex flex-row items-center gap-1 text-gray-700">\r
                    {endItem.title}\r
                </li>\r
                )\r
              }\r
              return (\r
              <li key = {endItem.id}>\r
                {renderItem ? renderItem(endItem) : <a href = {endItem.link}>{endItem.title}</a>}\r
                {separator ? separator : <ChevronRight size = {'16px'} className = "text-gray-400"/>}\r
              </li>\r
            )\r
            })}\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbEnd`,pe=`import { cn } from "src/lib/utils"\r
\r
interface CardCSSProperties extends React.CSSProperties {\r
  "--card-px": string\r
  "--card-py": string\r
}\r
\r
interface CardProps extends React.ComponentPropsWithRef<"div"> {\r
  variant?: keyof typeof cardStyles.variant;\r
  behavior?: keyof typeof cardStyles.behavior;\r
  children: React.ReactNode\r
  size: "sm" | "md" | "lg" | "xl"\r
}\r
\r
const styleMap: Record<CardProps["size"], CardCSSProperties> = {\r
  sm: {\r
        "--card-px": "1rem",\r
        "--card-py": "1rem",\r
      },\r
  md: {\r
      "--card-px": "1.5rem",\r
      "--card-py": "1.5rem",\r
      },\r
  lg: {\r
      "--card-px": "2rem",\r
      "--card-py": "2rem",\r
    },\r
  xl: {\r
    "--card-px": "2.5rem",\r
    "--card-py": "2.5rem",\r
    }\r
};\r
\r
const cardStyles = {\r
  variant: {\r
    bordered: "border border-border bg-card",\r
    flat: "bg-muted/50 border border-transparent",\r
    elevated: "bg-card border border-border/50 shadow-sm"\r
  },\r
  behavior: {\r
    static: "",\r
    interactive: "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"\r
  }\r
};\r
\r
const Card = ({\r
  children,\r
  ref,\r
  className,\r
  style,\r
  size = "md",\r
  variant = "bordered",\r
  behavior = "static",\r
  ...props} : CardProps) => {\r
  return (\r
    <div \r
    className = {cn(cardStyles.variant[variant], cardStyles.behavior[behavior], className)}\r
    style = {{...styleMap[size], ...style}}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </div>\r
  )\r
}\r
\r
export default Card`,xe=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardHeaderProps extends React.ComponentPropsWithRef<"div"> {\r
  children: React.ReactNode\r
}\r
\r
const CardHeader = ({children, ref, className, ...props}: CardHeaderProps) => {\r
  return (\r
    <div \r
    className = {cn("flex flex-col gap-1.5 pt-[var(--card-py)] px-[var(--card-px)]", className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </div>\r
  )\r
}\r
\r
export default CardHeader`,fe=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardTitleProps extends React.ComponentPropsWithRef<"h3"> {\r
  children: React.ReactNode\r
}\r
\r
const CardTitle = ({children, ref, className, ...props}: CardTitleProps) => {\r
  return (\r
    <h3 className = {cn('font-semibold leading-none tracking-tight', className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
      {children}\r
    </h3>\r
  )\r
}\r
\r
export default CardTitle`,ge=`import React from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface CardDescriptionProps extends React.ComponentPropsWithRef<"p"> {\r
  children: React.ReactNode\r
}\r
\r
const CardDescription = ({children, ref, className, ...props}: CardDescriptionProps) => {\r
  return (\r
    <p className = {cn('text-sm text-gray-500', className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
        {children}\r
    </p>\r
  )\r
}\r
\r
export default CardDescription`,he=`import { cn } from 'src/lib/utils'\r
\r
interface CardFooterProps extends React.ComponentPropsWithRef<"div"> {\r
  children: React.ReactNode\r
}\r
\r
const CardFooter = ({children, ref, className, ...props}: CardFooterProps) => {\r
\r
  return (\r
    <div \r
    className = {cn("pb-[var(--card-py)] px-[var(--card-px)]", className)}\r
    ref = {ref}\r
    {...props}\r
    >\r
        {children}\r
    </div>\r
  )\r
}\r
\r
export default CardFooter`,ve=`import Button from "@components/Button";\r
import { buttonVariant } from "@types";\r
import { ArrowLeft, ArrowRight } from "lucide-react";\r
import CarouselContent from "./CarouselContent";\r
import { useState, useRef, useEffect, useCallback, useMemo } from "react";\r
import React from "react";\r
import { CarouselContext } from "./CarouselContext";\r
\r
interface CarouselProps {\r
    children?: React.ReactNode\r
}\r
\r
const Carousel = ({children}: CarouselProps) => {\r
  const [activeIndex, setActiveIndex] = useState(0);\r
  const [itemIds, setItemIds] = useState<string[]>([]);\r
  const [itemWidth, setItemWidth] = useState(0)\r
  const widthRef = useRef<HTMLDivElement>(null);\r
\r
  const handleLeftArrow = () => {\r
        setActiveIndex(Math.max(activeIndex - 1, 0))  \r
  }\r
\r
  const handleRightArrow = () => {\r
        setActiveIndex(Math.min(activeIndex + 1, totalItems - 1)) \r
  }\r
\r
  const totalItems = itemIds.length;\r
\r
   const registerItem = useCallback((newItem: string) => {\r
    setItemIds(prev => {\r
        if(!prev.includes(newItem)) {\r
            return [...prev, newItem]   \r
        }\r
\r
        else {\r
            return prev\r
        }\r
    })\r
  },[]);\r
\r
  const deregisterItem = useCallback((chosenItem: string) => {\r
        setItemIds(prev => {\r
            return prev.filter((item) => item !== chosenItem)\r
        })\r
  }, [])\r
\r
  const contextValues = useMemo(() => {\r
        return {\r
            activeIndex,\r
            setActiveIndex,\r
            registerItem,\r
            deregisterItem,\r
            itemWidth,\r
            itemIds,\r
        }\r
  }, [activeIndex, setActiveIndex, registerItem, deregisterItem, itemWidth, itemIds,])\r
\r
  useEffect(() => {\r
        const observer = new ResizeObserver((entries) => {      \r
        const newWidth = entries[0].contentRect.width;\r
        if (newWidth > 0 && newWidth < 5000) {\r
            setItemWidth(newWidth);\r
            }\r
        })\r
        if(widthRef.current){\r
            observer.observe(widthRef.current)\r
        }\r
        return () => observer.disconnect()\r
  },[])\r
\r
  return (\r
    <CarouselContext value = {contextValues}>\r
        <div className = "grid grid-cols-[auto_1fr_auto] gap-2 justify-center items-center w-full h-full relative overflow-hidden"\r
        >\r
        <Button\r
        variant = {buttonVariant.Icon}\r
        onClick={handleLeftArrow}\r
        >\r
            <ArrowLeft className = "w-4 h-4 text-gray-600"></ArrowLeft>\r
        </Button>\r
             <div ref = {widthRef} className = "h-full self-stretch overflow-hidden ">\r
            <CarouselContent\r
            >\r
            {children}\r
        </CarouselContent>\r
        </div>\r
        <Button\r
        variant = {buttonVariant.Icon}\r
        onClick={handleRightArrow}\r
        >\r
            <ArrowRight className = "w-4 h-4 text-gray-600"></ArrowRight>\r
        </Button>\r
    </div>\r
    </CarouselContext>\r
  )\r
}\r
\r
export default Carousel`,be=`import React from 'react'\r
import { useContext } from 'react';\r
import { CarouselContext } from './CarouselContext';\r
import { motion } from 'motion/react';\r
\r
interface CarouselContentProps {\r
    children: React.ReactNode\r
}\r
\r
const CarouselContent = ({children}: CarouselContentProps) => {\r
\r
  const context = useContext(CarouselContext)\r
  if(!context) return null;\r
\r
  return (\r
    <div \r
    className = "h-full min-w-0 overflow-hidden">\r
        <motion.div \r
        animate = {{x: -(context.activeIndex * context.itemWidth)}}\r
        transition = {context.itemWidth === 0 ? { duration: 0 } : { ease: 'easeOut', duration: 0.3 }}\r
        className = "flex flex-row ">\r
            {children}\r
        </motion.div>\r
    </div>\r
  )\r
}\r
\r
export default CarouselContent`,ye=`import { useContext, useId, useEffect } from 'react';\r
import { CarouselContext } from './CarouselContext';\r
import { motion } from 'motion/react';\r
\r
interface CarouselItemProps {\r
    item: string,\r
    id: string;\r
}\r
\r
const CarouselItem = ({item, id}: CarouselItemProps) => {\r
\r
  const context = useContext(CarouselContext);\r
  if(!context) return null;\r
\r
  const generatedId = useId();\r
  const itemId = id || generatedId\r
\r
  const myIndex = context.itemIds.indexOf(itemId)\r
\r
  useEffect(() => {\r
    context.registerItem(itemId)\r
    return(() => context.deregisterItem(itemId))\r
  }, [])\r
\r
  return (\r
    <motion.div \r
    id = {itemId}\r
    animate = {myIndex === context.activeIndex ? {scale: 1 ,filter: 'blur(0px)'} : {scale: 0.95,filter: 'blur(10px)'}}\r
    transition = {{ease: 'easeInOut', duration: 0.2}}\r
    style={{width: context.itemWidth, minWidth: context.itemWidth}}\r
    className = "flex items-center justify-center flex-shrink-0 h-full p-6 sm:p-12 md:p-24 border border-gray-300 rounded-md">\r
            <p>{item}</p>\r
        </motion.div>\r
  )\r
}\r
\r
export default CarouselItem`,Ce=`import React from 'react'\r
import { PaginationProvider } from './PaginationContext'\r
\r
interface PaginationProps {\r
    activePage: number\r
    totalPages: number\r
    maxButtons?: number\r
    onPageChange: (page:number) => void\r
    children: React.ReactNode\r
}\r
\r
const Pagination = ({activePage, totalPages, maxButtons = 5, onPageChange, children}: PaginationProps) => {\r
  return (\r
    <nav role="navigation" aria-label="pagination" className="flex flex-row items-center justify-center w-full">\r
      <PaginationProvider\r
        activePage={activePage}\r
        totalPages={totalPages}\r
        maxButtons={maxButtons}\r
        onPageChange={onPageChange}\r
      >\r
        {children}\r
      </PaginationProvider>\r
    </nav>\r
  )\r
}\r
\r
export default Pagination`,Ie=`import { usePagination } from "./PaginationContext"\r
import { Ellipsis } from "lucide-react"\r
\r
const PaginationContent = () => {\r
\r
    const {pagesToRender, activePage, onPageChange} = usePagination()\r
\r
  return (\r
    <ul className = "flex flex-row items-center gap-1">\r
        {pagesToRender.map((item, index) => {\r
            const isActive = item === activePage;\r
            \r
            if (typeof item === 'string'){\r
                return (\r
                    <li key = {\`ellipsis-\${index}\`}><Ellipsis size={\`16px\`} className="text-gray-800"/></li>\r
                )\r
            }\r
            return (\r
                <li key = {item}>\r
                    <button\r
                    className = {\`text-sm rounded-md h-7 w-7 text-gray-800 hover:bg-gray-100 \${\r
                                isActive ? " border rounded-md font-medium border-gray-300" : ""}\`}\r
                    aria-current = {isActive ? "page" : undefined}\r
                    onClick = {() => onPageChange(item)}\r
                    >\r
                        {item}\r
                    </button>\r
                </li>\r
            )\r
        })}\r
    </ul>\r
  )\r
}\r
\r
export default PaginationContent`,we=`import React from 'react'\r
import { ChevronLeft } from 'lucide-react'\r
import { usePagination } from './PaginationContext'\r
\r
const PaginationPrevious = () => {\r
\r
  const {activePage, onPageChange} = usePagination();\r
\r
  const isDisabled = activePage === 1;\r
\r
  return (\r
    <button\r
    disabled = {isDisabled}\r
    className = {\`text-sm font-medium rounded-md h-7 w-7 mr-2 flex justify-center items-center \${\r
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}\r
    onClick = {() =>{\r
            if(isDisabled) {\r
                return\r
            }\r
            else {\r
                onPageChange(activePage - 1)\r
            }\r
        }\r
    }\r
    >\r
        <ChevronLeft size = {'16px'} className = {\`text-sm rounded-md h-4 w-4 \${\r
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}/>\r
    </button>\r
  )\r
}\r
\r
export default PaginationPrevious`,Re=`import React from 'react'\r
import { usePagination } from './PaginationContext'\r
import { ChevronRight } from 'lucide-react'\r
\r
const PaginationNext = () => {\r
\r
  const {totalPages, activePage, onPageChange} = usePagination();\r
\r
  const isDisabled = activePage === totalPages\r
\r
  return (\r
    <button\r
    disabled = {isDisabled}\r
    className = {\`text-sm font-medium rounded-md h-7 w-7 flex justify-center items-center ml-2 \${\r
                isDisabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}\r
    onClick = {() =>{\r
            if(isDisabled) {\r
                return\r
            }\r
            else {\r
                onPageChange(activePage + 1)\r
            }\r
        }\r
    }\r
    >\r
        <ChevronRight size = {'16px'} className = {\`text-sm rounded-md h-4 w-4 \${\r
                isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}\`}/>\r
    </button>\r
  )\r
}\r
\r
export default PaginationNext`,Pe=`import React, { useCallback, useId, useState, useMemo } from "react";\r
\r
interface RadioGroupContextValue {\r
  value?: string;\r
  hoveredIndex: number | null;\r
  direction: 'up' | 'down' | null;\r
  onValueChange: (value: string) => void;\r
  onHoverChange: (index: number | null) => void;\r
  handleRegister: (id:string) => () => void;\r
  registeredIds: string[]\r
  name: string;\r
}\r
\r
interface RadioGroupProps {\r
  children?: React.ReactNode;\r
  value?: string;\r
  defaultValue?: string;\r
  onValueChange?: (value: string) => void;\r
  name?: string;\r
}\r
\r
const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)\r
\r
const RadioGroup = ({ value, children, name: propName, onValueChange, defaultValue }: RadioGroupProps) => {\r
  const generatedId = useId();\r
  const name = propName ?? generatedId;\r
  \r
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);\r
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);\r
  const [movement, setMovement] = useState<'up' | 'down' | null>(null);\r
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);\r
\r
  const handleValueChange = (newValue: string) => {\r
    setSelectedValue(newValue);\r
    onValueChange?.(newValue);\r
  };\r
\r
  const handleHoverChange = (nextIndex: number | null) => {\r
    if (nextIndex === null || hoveredIndex === null) {\r
      setMovement(null);\r
    } else if (nextIndex < hoveredIndex) {\r
      setMovement('up');\r
    } else if (nextIndex > hoveredIndex) {\r
      setMovement('down');\r
    }\r
    setHoveredIndex(nextIndex);\r
  };\r
\r
  const handleRegister = useCallback((id: string) => {\r
        setRegisteredIds(prev => {\r
            if(!prev.includes(id)) return ([...prev,id])\r
\r
            else {\r
                return(prev)\r
            }\r
        })\r
\r
        return () => setRegisteredIds(prev => prev.filter(item => item !== id))\r
  }, []);\r
\r
  const memoizedValues = useMemo(() => {\r
      return(\r
        {\r
            value: selectedValue,\r
            onValueChange: handleValueChange,\r
            hoveredIndex,\r
            handleRegister,\r
            registeredIds,\r
            direction: movement,\r
            onHoverChange: handleHoverChange,\r
            name\r
        }\r
      )\r
  },[selectedValue, onValueChange, hoveredIndex, handleRegister, registeredIds, movement, handleHoverChange, name ])\r
\r
  return (\r
    <RadioGroupContext.Provider value={memoizedValues}>\r
      <div \r
        role="radiogroup"\r
        onMouseLeave={() => handleHoverChange(null)}\r
      >\r
        {children}\r
      </div>\r
    </RadioGroupContext.Provider>\r
  );\r
};\r
\r
export const useRadioGroupContext = () => {\r
  const context = React.useContext(RadioGroupContext);\r
  if (!context) {\r
    throw new Error("RadioItem must be used within a RadioGroup");\r
  }\r
  return context;\r
};\r
\r
export default RadioGroup;`,Ne=`import React, { useId, useEffect } from 'react';\r
import { useRadioGroupContext } from './RadioGroup';\r
import { AnimatePresence, easeOut, motion } from 'motion/react';\r
import { cn } from 'src/lib/utils';\r
\r
interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {\r
  value: string;\r
  id?: string;\r
  children?: React.ReactNode;\r
  ref?: React.Ref<HTMLInputElement>;\r
}\r
\r
const bubbleVariants = {\r
  initial: (direction: 'up' | 'down' | null) => ({\r
    opacity: 0,\r
    y: direction === null ? 0 : (direction === 'up' ? 6 : -6)\r
  }),\r
  animate: { \r
    opacity: 1, \r
    y: 0,\r
    transition: { ease: easeOut, duration: 0.15 }\r
  },\r
  exit: (direction: 'up' | 'down' | null) => ({\r
    opacity: 0,\r
    y: direction === null ? 0 : (direction === 'up' ? -6 : 6),\r
    transition: { ease: easeOut, duration: 0.15 }\r
  })\r
};\r
\r
const RadioItem = ({ id, value, children, ref, ...props }: RadioItemProps) => {\r
  const context = useRadioGroupContext();\r
  const generatedLocalId = useId();\r
  const radioItemId = id ?? generatedLocalId;\r
\r
  const isSelected = context.value === value;\r
  const currentIndex = context.registeredIds.indexOf(radioItemId)\r
  const isHovered = currentIndex !== -1 && context.hoveredIndex === currentIndex;\r
\r
  useEffect(() => {\r
    return context.handleRegister(radioItemId)\r
  },[radioItemId, context.handleRegister])\r
\r
  return (\r
    <div\r
      onMouseEnter={() => context.onHoverChange(currentIndex)}\r
      onFocus={() => context.onHoverChange(currentIndex)}\r
      className="flex flex-row gap-2 p-2 rounded-md items-center relative has-[:focus-visible]:ring-2"\r
    >\r
      <input\r
        {...props}\r
        type="radio"\r
        ref={ref}\r
        id={radioItemId}\r
        name={context.name}\r
        checked={isSelected}\r
        onChange={() => context.onValueChange(value)}\r
        className="absolute inset-0 z-30 opacity-0 cursor-pointer"\r
      />\r
      <div className="relative z-20 flex items-center justify-center w-4 h-4 border border-gray-300 rounded-lg cursor-pointer">\r
        <AnimatePresence>\r
          {isSelected && (\r
            <motion.div \r
              initial={{ scale: 0.5, opacity: 0 }}\r
              animate={{ scale: 1, opacity: 1 }}\r
              exit={{ scale: 0.5, opacity: 0 }}\r
              transition={{ ease: easeOut, duration: 0.15 }}\r
              className="absolute z-20 w-2 h-2 bg-blue-500 rounded-lg"\r
            />\r
          )}\r
        </AnimatePresence>\r
        \r
        <AnimatePresence custom={context.direction}>\r
          {isHovered && (\r
            <motion.div  \r
              custom={context.direction}   \r
              variants={bubbleVariants} \r
              initial="initial" \r
              animate="animate"\r
              exit="exit"\r
              className="absolute z-10 w-2 h-2 bg-gray-300 rounded-lg"\r
            />\r
          )}\r
        </AnimatePresence>\r
      </div>\r
\r
      <label \r
        htmlFor={radioItemId}\r
        className={cn("font-regular z-20", isSelected ? "text-black" : "text-gray-500")}\r
      >\r
        {children || value}\r
      </label>\r
    </div>\r
  );\r
};\r
\r
export default RadioItem;`,Te=`import { CheckCircle, Info, TriangleAlert, CircleAlert } from 'lucide-react'\r
import type { toastType } from './types'\r
import React, { useEffect } from 'react'\r
import { cn } from 'src/lib/utils'\r
\r
interface ToastProps {\r
    toastType: toastType\r
    description: string\r
    id: string\r
    header?: string\r
    onDismiss: (id:string) => void\r
    isHovered: boolean\r
    index: number\r
    isTop: boolean\r
    total: number\r
}\r
\r
interface ToastVariants {\r
    styles: string,\r
    icon?: React.ReactNode\r
    headerRequired?: boolean\r
}\r
\r
const toastMap : Record<ToastProps['toastType'], ToastVariants> = {\r
    default: {\r
        styles: "border-gray-200 text-gray-500",\r
    },\r
    description: {\r
        styles: "border-gray-200 text-gray-500",\r
        headerRequired: true\r
    } ,\r
    success: {\r
        styles: "bg-green-50 border-green-200 text-green-800",\r
        icon: <CheckCircle className="h-5 w-5" />,\r
        headerRequired: false\r
    } ,\r
    info: {\r
        styles: "border-gray-200 text-gray-500",\r
        icon: <Info className = "h-5 w-5 text-gray-700"/>\r
\r
    } ,\r
    warning: {\r
        styles: "border-gray-200 text-yellow-700",\r
        icon: <TriangleAlert className = "h-5 w-5"/>\r
    } ,\r
    error: {\r
        styles: "border-gray-200 text-red-700",\r
        icon: <CircleAlert className = "h-5 w-5"/>\r
    } ,\r
    custom: {\r
        styles: "border-gray-200 text-gray-500",\r
    } ,\r
\r
}\r
\r
\r
const Toast = ({toastType, description, id, header, onDismiss, isHovered, index, isTop, total} : ToastProps) => {\r
\r
  const variants = toastMap[toastType];\r
  const toastHeader = variants.headerRequired === true;\r
  const toastIcon = variants.icon;\r
\r
  useEffect(() => {\r
        if(isHovered){\r
            return\r
        }\r
\r
       const timer =  setTimeout((\r
            () => onDismiss(id)\r
        ), 4000)\r
\r
        return(\r
           () => clearTimeout(timer)\r
        )\r
  },[isHovered, id, onDismiss])\r
\r
  return (\r
    <div \r
      style={{ \r
        zIndex: 100 + index, \r
        transformOrigin: isTop ? "top center" : "bottom center"\r
      }}\r
      id={id}\r
      className= {cn('p-4 border rounded-lg bg-white', variants.styles)}\r
    >\r
      {toastHeader && <h3>{header}</h3>}\r
      <div className="flex flex-row gap-2 items-start">\r
        {toastIcon && toastIcon}\r
        <p>{description}</p>\r
      </div>\r
    </div>\r
  )\r
}\r
\r
export default Toast`,Se=`import React, { createContext, useContext, useMemo, useState } from 'react'\r
import type { toastType } from './types'\r
\r
interface Toast {\r
    id:string\r
    description: string\r
    toastType: toastType\r
}\r
\r
interface ToastContextValue {\r
    toasts: Toast[]\r
    addToast: (type: toastType, description:string) => void\r
    dismissToast: (id:string) => void\r
}\r
\r
interface ToastProviderProps {\r
    children: React.ReactNode\r
}\r
\r
export const ToastProvider = ({\r
    children\r
} : ToastProviderProps) => {\r
\r
    const [toasts, setToasts] = useState<Toast[]>([]);\r
\r
    const addToast = (toastType: toastType, description: string) => {\r
        const id = crypto.randomUUID();\r
\r
        setToasts(prev => {\r
                const newToast = { id, toastType, description };\r
                \r
                if (prev.length >= 3) {\r
                  return [...prev.slice(1), newToast];\r
                }\r
                return [...prev, newToast];\r
        });\r
    }\r
\r
    const dismissToast = (toastId: string) => {\r
        setToasts(prev => prev.filter((toast) => (\r
            toast.id !== toastId\r
        )))\r
    }\r
\r
    return (\r
        <toastContext.Provider value = {{\r
            addToast,\r
            dismissToast,\r
            toasts\r
        }}>\r
            {children}\r
        </toastContext.Provider>\r
    )\r
}\r
\r
const toastContext = createContext<ToastContextValue | undefined>(undefined);\r
\r
export const useToast = () => {\r
    const context = useContext(toastContext);\r
    if (!context) {\r
        throw new Error('useToast must be used within a ToastProvider');\r
    }\r
    return context;\r
};`,De=`import React, {useState} from 'react'\r
import { useToast } from './ToastContext'\r
import Toast from './Toast'\r
import { motion, AnimatePresence } from 'motion/react'\r
import { cn } from 'src/lib/utils'\r
\r
interface ToasterProps {\r
    position: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"\r
    expandedOnHover?: boolean\r
}\r
\r
const positionMap: Record<NonNullable<ToasterProps['position']>, string> = {\r
  "top-left": "top-20 left-0 p-4",\r
  "top-right": "top-20 right-0 p-4",\r
  "top-center": "top-20 left-1/2 -translate-x-1/2 p-4",\r
  "bottom-left": "bottom-0 left-0 p-4",\r
  "bottom-right": "bottom-0 right-0 p-4",\r
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 p-4"\r
}\r
\r
const Toaster = ({\r
  position = "bottom-right", \r
  expandedOnHover = true\r
}: ToasterProps) => {\r
\r
  const {toasts, dismissToast} = useToast();\r
\r
  const [isHovered, setIsHovered] = useState<boolean>(false);\r
\r
  const isTop = position.startsWith('top');\r
\r
return (\r
  <div \r
    className={cn('fixed z-50 w-full max-w-sm pointer-events-none', positionMap[position])}\r
    onMouseEnter={() => { if (expandedOnHover) setIsHovered(true) }}\r
    onMouseLeave={() => { if (expandedOnHover) setIsHovered(false) }}\r
  >\r
    <div className="relative w-full flex flex-col justify-end items-end">\r
      <AnimatePresence mode="popLayout">\r
        {toasts.map((toast, index) => {\r
          const distanceFromNewest = (toasts.length - 1) - index;\r
\r
          return(\r
                  <motion.div\r
                  key={toast.id}\r
                  layout\r
                  initial={{ opacity: 0, y: isTop ? -20 : 20, scale: 0.9 }}\r
                  animate={{\r
                    scale: isHovered ? 1 : 1 - distanceFromNewest * 0.05,\r
                    y: isHovered \r
                      ? distanceFromNewest * (isTop ? 64 : -64) \r
                      : distanceFromNewest * (isTop ? 10 : -10),\r
                    opacity: 1\r
                  }}\r
                  exit={{ \r
                    opacity: 0, \r
                    scale: 0.85,\r
                    y: isTop ? -40 : 40 \r
                  }}\r
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}\r
                  className="w-full absolute left-0 right-0 bottom-0 pointer-events-auto p-2"\r
                >\r
                  <Toast\r
                    id={toast.id}\r
                    toastType={toast.toastType}\r
                    description={toast.description}\r
                    onDismiss={dismissToast}\r
                    index={index}\r
                    isHovered={isHovered}\r
                    isTop={isTop}\r
                    total={toasts.length}\r
                  />\r
                </motion.div>\r
          )\r
        })}\r
      </AnimatePresence>\r
    </div>\r
  </div>\r
)\r
}\r
\r
export default Toaster`,n=t=>Object.entries(t).map(([r,o])=>`// ${r}
${o.trim()}`).join(`

`),Be=[{slug:"accordion",name:"Accordion",description:"A vertically stacked set of interactive headings that reveal or hide associated content, with keyboard navigation and an animated height transition.",Demo:G,code:n({"Accordion.tsx":ne})},{slug:"badge",name:"Badge",description:"A small label used to highlight status, category, or metadata.",Demo:F,code:n({"Badge.tsx":oe})},{slug:"breadcrumb",name:"Breadcrumb",description:"Displays the path to the current page and collapses long paths behind an expandable menu.",Demo:_,code:n({"Breadcrumb.tsx":ce,"BreadcrumbStart.tsx":le,"BreadcrumbStandard.tsx":me,"BreadcrumbEnd.tsx":ue})},{slug:"card",name:"Card",description:"A container for grouping related content, composed from header, title, description, and footer parts.",Demo:q,code:n({"Card.tsx":pe,"CardHeader.tsx":xe,"CardTitle.tsx":fe,"CardDescription.tsx":ge,"CardFooter.tsx":he})},{slug:"carousel",name:"Carousel",description:"A motion-driven slideshow for cycling through a set of items with previous and next controls.",Demo:K,code:n({"Carousel.tsx":ve,"CarouselContent.tsx":be,"CarouselItem.tsx":ye})},{slug:"input",name:"Input",description:"A labeled text input with built-in error messaging.",Demo:X,code:n({"Input.tsx":ie})},{slug:"modal",name:"Modal",description:"A dialog overlay for confirmations, backed by the native dialog element with an animated fade.",Demo:U,code:n({"Modal.tsx":de})},{slug:"pagination",name:"Pagination",description:"Page controls for navigating long lists of paged content.",Demo:J,code:n({"Pagination.tsx":Ce,"PaginationContent.tsx":Ie,"PaginationPrevious.tsx":we,"PaginationNext.tsx":Re})},{slug:"radio-group",name:"Radio Group",description:"A set of mutually exclusive options with an animated selection and hover indicator.",Demo:Q,code:n({"RadioGroup.tsx":Pe,"RadioItem.tsx":Ne})},{slug:"switch",name:"Switch",description:"A toggle control for switching between two states.",Demo:Z,code:n({"Switch.tsx":ae})},{slug:"tabs",name:"Tabs",description:"Organizes content into panels, switching between them with an animated indicator.",Demo:ee,code:n({"Tabs.tsx":se})},{slug:"toast",name:"Toast",description:"Non-blocking notifications that stack, expand on hover, and auto-dismiss.",Demo:te,code:n({"Toast.tsx":Te,"ToastContext.tsx":Se,"Toaster.tsx":De})}],p=[...Be].sort((t,r)=>t.name.localeCompare(r.name)),je=({code:t,className:r})=>{const[o,s]=i.useState(!1),x=async()=>{await navigator.clipboard.writeText(t),s(!0),setTimeout(()=>s(!1),1500)};return e.jsxs("div",{className:u("overflow-hidden rounded-lg border border-gray-800 bg-[#0d1117]",r),children:[e.jsxs("div",{className:"flex flex-row items-center justify-between px-4 py-2 border-b border-gray-800",children:[e.jsx("p",{className:"text-xs text-gray-400",children:"Code"}),e.jsxs("button",{onClick:x,className:"flex flex-row items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-300 cursor-pointer hover:bg-gray-800",children:[o?e.jsx(V,{className:"w-3.5 h-3.5"}):e.jsx(z,{className:"w-3.5 h-3.5"}),o?"Copied":"Copy"]})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm text-gray-100",children:e.jsx("code",{children:t})})]})},ke=({activeSlug:t})=>e.jsxs("nav",{className:"flex-shrink-0 lg:w-56",children:[e.jsx("p",{className:"px-3 mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase",children:"Components"}),e.jsx("ul",{className:"flex flex-row gap-1 pb-2 overflow-x-auto lg:flex-col lg:overflow-visible",children:p.map(r=>e.jsx("li",{className:"flex-shrink-0",children:e.jsx("a",{href:`/docs/${r.slug}`,className:u("block rounded-md px-3 py-1.5 text-sm whitespace-nowrap",r.slug===t?"bg-primary/10 font-medium text-primary":"text-gray-500 hover:bg-gray-100 hover:text-gray-800"),children:r.name})},r.slug))})]}),He=({slug:t})=>{const r=p.find(s=>s.slug===t);if(!r)return e.jsx("div",{className:"px-4 py-16 sm:px-8",children:e.jsx("p",{className:"text-gray-500",children:"Component not found."})});const o=r.Demo;return e.jsxs("div",{className:"flex flex-col w-full max-w-6xl gap-8 px-4 py-10 mx-auto sm:px-8 lg:flex-row lg:gap-12",children:[e.jsx(ke,{activeSlug:r.slug}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0 gap-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-semibold text-primary",children:r.name}),e.jsx("p",{className:"max-w-[65ch] mt-2 text-gray-500",children:r.description})]}),e.jsx("div",{className:"flex items-center justify-center w-full p-8 overflow-x-auto border border-gray-200 rounded-lg bg-gray-50/50",children:e.jsx(o,{})}),e.jsx(je,{code:r.code})]})]})};export{He as default};
