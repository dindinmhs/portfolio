"use client"
import { Nav } from "@/components/navbar/nav";
import { Homepage } from "@/components/home/home";
import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { About } from "@/components/about/about";
import { Project } from "@/components/project/project";
import { useProjects } from "@/request/project";
import { Loading } from "./load";
import { Academy } from "@/components/academy/academy";

interface Type {
  visible : number,
  setVisible : Dispatch<SetStateAction<number>>
}

const visibilityContext = createContext<Type>({
  visible : 0,
  setVisible : () => 0
})

export default function Home() {
  const [visible, setVisible] = useState(0)
  
  const { isPending, data } = useProjects()
  
  if (isPending) return <Loading/>
  
  return (
    <>
    <visibilityContext.Provider value={{visible, setVisible}}>
      <Nav/>
      <Homepage/>
      <div className="max-w-[70rem] mx-auto px-6">
        <About/>
        {data && <Project projects={data}/>}
        <Academy/>
      </div>
    </visibilityContext.Provider>
    </>
  );
}

export const useVisibility = () => useContext(visibilityContext)