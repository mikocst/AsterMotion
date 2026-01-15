import React from 'react'

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

const RadioItem = ({id, ...props}: RadioItemProps) => {
  return (
    <div className = "flex flex-row gap-2 cursor-pointer">
        <input
        type = "radio"
        value = {props.value}
        id = {id}
        />
        <label
        >
            {props.value}
        </label>
    </div>
  )
}

export default RadioItem