// app/context/ThemeContext.js
'use client'; // Menentukan bahwa ini adalah komponen sisi klien
import { createContext, useContext, useState, Dispatch, SetStateAction} from 'react';

interface ThemeContextType {
    isAnimate: boolean;
    setAnimate: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
    isAnimate : false,
    setAnimate : () => {}
});

export function ModeState({ children }:any) {
  const [isAnimate, setAnimate] = useState(false);

  return (
    <ThemeContext.Provider value={{isAnimate, setAnimate}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
