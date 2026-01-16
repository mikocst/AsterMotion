import React, { useId, useState } from "react";

interface RadioGroupContextValue {
    value?: string;
    hover?: string;
    direction?: 'up' | 'down' | null;
    onValueChange: (value:string) => void;
    onHoverChange: (value:string, y:number) => void;
    name: string;
}

interface RadioGroupProps {
    children?: React.ReactNode,
    value?: string,
    hover?: string,
    direction?: 'up' | 'down' | null;
    defaultValue?: string,
    onValueChange?: (value:string) => void
    onHoverChange: (value:string, y:number) => void
    name?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

const RadioGroup = ({value, hover, children, name:propName, onValueChange, onHoverChange, defaultValue, direction}: RadioGroupProps) => {
  const generatedId = useId();
  const name = propName ?? generatedId
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);
  const [hoveredValue, setHoveredValue] = useState<string | undefined>(value ?? defaultValue);
  const [movement, setMovement] = useState<typeof direction>(null);
  const [prevY, setPrevY] = useState<number | null>(null);

  const handleValueChange = (newValue:string) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue)
  }

  const handleHoverChange = (newValue:string, y:number) => {
    setHoveredValue(newValue)
    onHoverChange?.(newValue, y)
    if(prevY > y) {
        setMovement('up')
    }
    else if (prevY < y) {
        setMovement('down')
    }
    else if(prevY === undefined) {
        setMovement(null)
    }

    setPrevY(y)
  }

  return (
    <RadioGroupContext.Provider value={{ 
        value: selectedValue,
        onValueChange: handleValueChange,
        hover: hoveredValue,
        direction:movement,
        onHoverChange: handleHoverChange,
        name 
        }}>
            <div role="radiogroup"
            onMouseLeave={() => {setHoveredValue(undefined), setPrevY(null)}}
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