"use client"
import { Nav } from "@/components/navbar/nav";
import { Homepage } from "@/components/home/home";
import { useEffect, useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { About } from "@/components/about/about";
import { Project } from "@/components/project/project";

interface Type {
  visible : number,
  setVisible : Dispatch<SetStateAction<number>>
}

const visibilityContext = createContext<Type>({
  visible : 0,
  setVisible : () => 0
})
export const useVisibility = () => useContext(visibilityContext)

export default function Home() {
  const [visible, setVisible] = useState(0)
  return (
    <>
    <visibilityContext.Provider value={{visible, setVisible}}>
      <Nav/>
      <Homepage/>
      <div className="max-w-[70rem] mx-auto px-6">
        <About/>
        <Project/>
      </div>
    </visibilityContext.Provider>
    </>
  );
}
