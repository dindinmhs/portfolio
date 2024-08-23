"use client"
import { useTech } from "@/request/tech";
import { FaCode } from "react-icons/fa6";
import { TbCodeDots } from "react-icons/tb";

export const Techs = () => {
    const {data} = useTech()
    return (
        <div>
            <div className="mb-6">
                <div className="mb-3 flex gap-2">
                    <FaCode size={30} color="#9333ea"/>
                    <h2 className="font-bold text-2xl gradient-text">Common Used</h2>
                </div>
                <ul className="flex gap-2 flex-wrap">
                    {data?.common?.map((tech, index)=>(
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
                    {data?.other?.map((tech, index)=>(
                        <li className="px-4 rounded-full bg-gray-200 dark:bg-neutral-700" key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};