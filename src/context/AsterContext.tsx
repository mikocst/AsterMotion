import { createContext, useState, type ReactNode } from "react";

export interface AsterContextType {
    isSearching: boolean;
    setIsSearching: (value: boolean) => void;

    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

interface AsterProviderProps {
    children: ReactNode;
}

const defaultContext: AsterContextType = {
    isSearching: false,
    setIsSearching: () => {},
    isDarkMode: false,
    setIsDarkMode: () => {},
}

const AsterContext = createContext<AsterContextType>(defaultContext);

export function AsterProvider({ children }: AsterProviderProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AsterContext.Provider
      value={{ 
        isSearching,
        setIsSearching,
        isDarkMode,
        setIsDarkMode, }}
    >
      {children}
    </AsterContext.Provider>
  );
}