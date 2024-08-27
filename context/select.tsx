import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface Type {
  visible: number;
  setVisible: Dispatch<SetStateAction<number>>;
}

export const visibilityContext = createContext<Type>({
  visible: 0,
  setVisible: () => 0,
});

export const useVisibility = () => useContext(visibilityContext);