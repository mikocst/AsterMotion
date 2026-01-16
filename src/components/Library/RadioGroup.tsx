import RadioItem from "./RadioItem"
import React, { useId, useState } from "react";

interface RadioGroupContextValue {
    value?: string;
    hover?: string;
    onValueChange: (value:string) => void;
    onHoverChange: (value:string) => void;
    name: string;
}

interface RadioGroupProps {
    children?: React.ReactNode,
    value?: string,
    hover?: string,
    defaultValue?: string,
    onValueChange?: (value:string) => void
    onHoverChange: (value:string) => void
    name?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

const RadioGroup = ({value, hover, children, name:propName, onValueChange, onHoverChange, defaultValue}: RadioGroupProps) => {
  const generatedId = useId();
  const name = propName ?? generatedId
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);
  const [hoveredValue, setHoveredValue] = useState<string | undefined>(value ?? defaultValue)

  const handleValueChange = (newValue:string) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue)
  }

  const handleHoverChange = (newValue:string) => {
    setHoveredValue(newValue)
    onHoverChange?.(newValue)
  }

  return (
    <RadioGroupContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange, hover: hoveredValue, onHoverChange: handleHoverChange, name }}>
        <div role="radiogroup"
        onMouseLeave={() => {setHoveredValue(undefined)}}
        >
            {children}
        </div>
    </RadioGroupContext.Provider>
  )
}

export const useRadioGroupContext = () => {
    const context = React.useContext(RadioGroupContext);
    if (!context) {
        throw new Error("RadioItem must be used within a RadioGroup")
    }
    return context
}

export default RadioGroup