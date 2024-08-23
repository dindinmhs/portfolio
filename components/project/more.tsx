import { motion, useMotionValue } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ProjectType } from "@/types/type";

const DRAG_BUFFER = 50

interface Props {
    isSelected : ProjectType,
    setSelected : Dispatch<SetStateAction<ProjectType>>|any
}

export const More = ({isSelected, setSelected} : Props) => {
    const [dragging, setDragging] = useState(false)
    const [imgIdx, setImgIdx] = useState(0)
    const dragX = useMotionValue(0)
    const dragEnd = () => {
        setDragging(true)
        const x = dragX.get()
        if (x <= -DRAG_BUFFER && imgIdx < isSelected.images.length - 1) {
            setImgIdx(prev => prev + 1)
        } else if (x >= DRAG_BUFFER && imgIdx > 0) {
            setImgIdx(prev => prev - 1)
        }
    }
    return (
        <div className="fixed inset-0 z-40 backdrop-blur-lg p-6 overflow-y-scroll">
            <div className="text-end">
                <button onClick={()=>setSelected(null)}><IoClose size={25}/></button>
            </div>
            <motion.section 
                initial={{ y : "200%" }}
                animate={{ y : 0 }}
                exit={{ y : "200%" }}
                transition={{ duration : 0.5 }}
                className="max-w-3xl m-auto text-lg overflow-hidden rounded-2xl">
                <motion.div 
                    className="flex cursor-grab active:cursor-grabbing" 
                    dragConstraints={{ left : 0, right : 0 }} 
                    drag="x"
                    onDragStart={()=>setDragging(true)}
                    onDragEnd={dragEnd}
                    style={{ x : dragX }}
                    animate={{ translateX : `-${imgIdx*100}%` }}>
                        {isSelected.images.map((url:string, idx:number) => (
                            <div key={idx} className="shrink-0 w-full relative h-[23rem]">
                                <Image
                                    src={url}
                                    alt={isSelected.name}
                                    width={2000}
                                    height={2000}
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0"></div>
                            </div>
                        ))}
                </motion.div>
                <motion.div
                    className="bg-gray-50 dark:bg-neutral-800 p-6">
                    <div className="flex gap-x-2 w-fit mx-auto mb-6">
                        {isSelected.images.map((img:string, idx:number) => (
                            <button 
                                key={idx} 
                                onClick={()=>setImgIdx(idx)} 
                                className={`${imgIdx === idx ? "dark:bg-neutral-200 bg-gray-700" : "dark:bg-neutral-500 bg-gray-400"} w-2 h-2 rounded-full`}/>
                        ))}
                    </div>
                    <h1 className="text-3xl font-black gradient-text">{isSelected.name}</h1>
                    {isSelected.description.map((par : string, idx:number)=>(
                        <p key={idx} className="text-justify my-2">{par}</p>
                    ))}
                    <h2 className="text-2xl font-bold gradient-text mb-1 mt-6">Features</h2>
                    <ul>
                        {isSelected.features.map((feature, idx)=>(
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-bold gradient-text mb-2 mt-6">Project Links</h2>
                    <div className="flex gap-2">
                        <Link target="_blank" href={isSelected.github} className="flex gap-1 items-center">
                            <FaGithub size={20}/>
                            <p>Source Code</p>
                        </Link>
                        <Link target="_blank" href={isSelected.link} className="flex gap-1 items-center">
                            <FiExternalLink size={20}/>
                            <p>Live Project</p>
                        </Link>
                    </div>
                </motion.div>
            </motion.section>
        </div>
    )
};
