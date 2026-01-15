import React, { useId } from 'react'
import { useRadioGroupContext } from './RadioGroup'

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    id: string;
    children: React.ReactNode;
    ref: React.Ref<HTMLInputElement>
}

const RadioItem = ({id, value, children, ref, ...props}: RadioItemProps) => {
    const context = useRadioGroupContext();
    const generatedLocalId = useId();
    const radioItemId = id ?? generatedLocalId;

    const isSelected = context.value === value


  return (
    <div className = "flex flex-row gap-2 items-center">
        <input
        {...props}
        type = "radio"
        ref = {ref}
        id = {radioItemId}
        name = {context.name}
        checked = {isSelected}
        onChange = {() => context.onValueChange(value)}
        />
        <label htmlFor = {radioItemId}>
            {children || value}
        </label>
    </div>
  )
}

export default RadioItem