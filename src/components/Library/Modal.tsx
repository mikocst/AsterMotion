import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from 'motion/react';
import {type HTMLMotionProps } from 'motion/react'
import Button from "@components/Button";
import { buttonVariant, buttonCopy } from "@types";
import useMergedRefs from "src/lib/utils/mergedRefs";

interface DialogProps extends HTMLMotionProps<"dialog"> {
    content: string;
    ref?: React.Ref<HTMLDialogElement>
    isOpen?: boolean
}

const Modal = ({ content, ref, isOpen: externalOpen, ...props}: DialogProps) => {

const dialogRef = useRef<HTMLDialogElement>(null);
const mergedRefs = useMergedRefs(ref, dialogRef);
const [dialogOpen, setIsDialogOpen] = useState(false);

const isOpen = externalOpen ?? dialogOpen;

const handleOpen = () => setIsDialogOpen(true)
const handleClose = (e?: React.SyntheticEvent) => {
    if(e) {
      e.preventDefault()
    }
    setIsDialogOpen(false)
}

const handleClick = (e?: React.MouseEvent<HTMLDialogElement>) => {
  const dialog = dialogRef.current;
  if (!dialog) return;

  const rect = dialog.getBoundingClientRect();
  
  const outsideClick = (
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top || e.clientY > rect.bottom
  )

  if(outsideClick) {
    handleClose();
  }
}

useEffect(() => {
  const dialog = dialogRef.current;
  if(!dialog || !isOpen) return;

  if(!dialog.open) {
    dialog.showModal()
  }
}, [isOpen])

useEffect(() => {
  if(isOpen) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = 'unset'
  }

  return () => {
    document.body.style.overflow = 'unset'
  }
}, [isOpen])

  return (
    <div className = "relative">
        <Button
        variant={buttonVariant.Primary}
        buttonCopy={buttonCopy.OPEN_DIALOG}
        onClick={handleOpen}
        />
        <AnimatePresence>
          {isOpen === true && (
            <motion.dialog
              {...props}
              ref = {mergedRefs}
              onCancel={handleClose}
              onClose={handleClose}
              onClick = {handleClick}
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              exit = {{opacity: 0}}
              transition = {{ease: 'easeOut', duration: 0.2}}
              onAnimationComplete = {(definition) => {
                if(definition === "exit" && dialogRef.current?.open) {dialogRef.current.close()}
              }}
              className = "w-full max-w-md p-6 border border-gray-200 rounded-lg"
              >
                  <div>
                      <h3 className = "text-lg font-medium mb-4">Confirm Changes</h3>
                      <p className = "text-gray-700 mb-6">{content}</p>
                      <div className = "flex flex-row justify-end gap-2">
                          <Button
                          variant = {buttonVariant.Secondary}
                          buttonCopy = {buttonCopy.CANCEL}
                          onClick={handleClose}
                          />
                          <Button
                          variant = {buttonVariant.Primary}
                          buttonCopy = {buttonCopy.CONFIRM}
                          />
                      </div>
                  </div>
            </motion.dialog>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Modal