import {useState} from "react";
import { Button } from "AsterMotion/src/components";
import { buttonVariant, buttonCopy } from "@types";

interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    isOpen?: boolean;
    onClose?: () => void;
    content: string;
    
}

const Modal = ({isOpen, onClose, content, ...props}: DialogProps) => {
  return (
    <dialog
     open
     className = "w-full max-w-md p-6 border border-gray-200 rounded-lg">
        <div>
            <h3 className = "text-lg font-medium mb-4">Confirm Changes</h3>
            <p className = "text-gray-700 mb-6">{content}</p>
            <div className = "flex flex-row justify-end gap-2">
                <Button
                 variant = {buttonVariant.Secondary}
                 buttonCopy = {buttonCopy.CANCEL}
                 />
                <Button
                 variant = {buttonVariant.Primary}
                 buttonCopy = {buttonCopy.CONFIRM}
                 />
            </div>
        </div>
    </dialog>
  )
}

export default Modal