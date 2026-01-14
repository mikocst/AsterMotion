import {useRef, useCallback} from "react";
import Button from "@components/Button";
import { buttonVariant, buttonCopy } from "@types";

interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    content: string;
    ref?: React.Ref<HTMLDialogElement>
}

const Modal = ({ content, ref, ...props}: DialogProps) => {

  const dialogRef = useRef<HTMLDialogElement>(null);

  const setRefs = useCallback((node:HTMLDialogElement | null) => {
      dialogRef.current = node;

      if(!ref) return;

      if(typeof ref === "function") {
        ref(node)
      }
      else if(ref && typeof ref === "object") {
        (ref as {current: HTMLDialogElement | null}).current = node
      }
  }, [dialogRef, ref])

  const handleOpen = () => {
    console.log("Opening dialog");
    dialogRef.current?.showModal()
  }

  const handleClose = () => {
    dialogRef.current?.close()
  }

  return (
    <div className = "relative">
        <Button
        variant={buttonVariant.Primary}
        buttonCopy={buttonCopy.OPEN_DIALOG}
        onClick={handleOpen}
        />
        <dialog
        ref = {setRefs}
        onCancel={handleClose}
        onClose = {handleClose}
        className = "w-full max-w-md p-6 border border-gray-200 rounded-lg"
        {...props}
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
        </dialog>
    </div>
  )
}

export default Modal