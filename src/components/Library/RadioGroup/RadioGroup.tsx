import React, { useCallback, useId, useState, useMemo } from "react";

interface RadioGroupContextValue {
  value?: string;
  hoveredIndex: number | null;
  direction: 'up' | 'down' | null;
  onValueChange: (value: string) => void;
  onHoverChange: (index: number | null) => void;
  handleRegister: (id:string) => () => void;
  registeredIds: string[]
  name: string;
}

interface RadioGroupProps {
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

const RadioGroup = ({ value, children, name: propName, onValueChange, defaultValue }: RadioGroupProps) => {
  const generatedId = useId();
  const name = propName ?? generatedId;
  
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultValue);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [movement, setMovement] = useState<'up' | 'down' | null>(null);
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);

  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
  };

  const handleHoverChange = (nextIndex: number | null) => {
    if (nextIndex === null || hoveredIndex === null) {
      setMovement(null);
    } else if (nextIndex < hoveredIndex) {
      setMovement('up');
    } else if (nextIndex > hoveredIndex) {
      setMovement('down');
    }
    setHoveredIndex(nextIndex);
  };

  const handleRegister = useCallback((id: string) => {
        setRegisteredIds(prev => {
            if(!prev.includes(id)) return ([...prev,id])

            else {
                return(prev)
            }
        })

        return () => setRegisteredIds(prev => prev.filter(item => item !== id))
  }, []);

  const memoizedValues = useMemo(() => {
      return(
        {
            value: selectedValue,
            onValueChange: handleValueChange,
            hoveredIndex,
            handleRegister,
            registeredIds,
            direction: movement,
            onHoverChange: handleHoverChange,
            name
        }
      )
  },[selectedValue, onValueChange, hoveredIndex, handleRegister, registeredIds, movement, handleHoverChange, name ])

  return (
    <RadioGroupContext.Provider value={memoizedValues}>
      <div 
        role="radiogroup"
        onMouseLeave={() => handleHoverChange(null)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroupContext = () => {
  const context = React.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioItem must be used within a RadioGroup");
  }
  return context;
};

export default RadioGroup;