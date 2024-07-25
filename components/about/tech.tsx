"use client"
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { TbCodeDots } from "react-icons/tb";

interface Techs {
    common : string[],
    other : string[]
}

export const Techs = () => {
    const [techs, setTechs] = useState<Techs | undefined>()
    useEffect(()=>{
        const fetchTechs = async () => {
        try {
            const res = await fetch('api/gettechs')
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json()
            setTechs(data)
        } catch (error) {
            console.error(error)
        }
        }
        fetchTechs()
    },[])
    return (
        <div>
            <div className="mb-6">
                <div className="mb-3 flex gap-2">
                    <FaCode size={30} color="#9333ea"/>
                    <h2 className="font-bold text-2xl gradient-text">Common Used</h2>
                </div>
                <ul className="flex gap-2 flex-wrap">
                    {techs?.common?.map((tech, index)=>(
                        <li className="px-4 rounded-full bg-gray-200 dark:bg-neutral-700" key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="mb-3 flex gap-2">
                    <TbCodeDots size={30} color="#9333ea"/>
                    <h2 className="font-bold text-2xl gradient-text">Others</h2>
                </div>
                <ul className="flex gap-2 flex-wrap">
                    {techs?.other?.map((tech, index)=>(
                        <li className="px-4 rounded-full bg-gray-200 dark:bg-neutral-700" key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};