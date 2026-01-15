import React from 'react'

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

const RadioItem = ({id,...props}: RadioItemProps) => {
  return (
    <input
    type = "radio"
    value = {props.value}
    id = {id}
    >
        {props.value}
    </input>
  )
}

export default RadioItem