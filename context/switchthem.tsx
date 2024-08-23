'use client'; 
import { createContext, useContext, useState, Dispatch, SetStateAction} from 'react';

interface ThemeContextType {
    isAnimate: boolean;
    setAnimate: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
    isAnimate : false,
    setAnimate : () => {}
});

export function ModeState({ children }:{children:React.ReactNode}) {
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
