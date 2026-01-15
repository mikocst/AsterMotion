import RadioItem from "./RadioItem"
import React, { useId, useState } from "react";

interface RadioGroupContextValue {
    value?: string;
    onValueChange: (value:string) => void;
    name: string;
}

interface RadioGroupProps {
    children: React.ReactNode,
    value?: string,
    defaultValue?: string,
    onValueChange?: (value:string) => void
    name?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

const RadioGroup = ({value, children, name:propName, onValueChange, defaultValue}: RadioGroupProps) => {
  const generatedId = useId();
  const name = propName ?? generatedId
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);

  const handleValueChange = (newValue:string) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue)
  }

  return (
    <RadioGroupContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange, name }}>
        <div role="radiogroup">
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