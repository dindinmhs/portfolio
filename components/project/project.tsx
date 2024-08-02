import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { DocumentData } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { More } from "./more";
import { useVisibility } from "@/app/page";

export const Project = () => {
    const [projects, setProjects] = useState<DocumentData[]>()
    const [isSelected, setSelected] = useState<DocumentData>()
    const { setVisible } = useVisibility()
    useEffect(()=>{
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/getproject')
                if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json()
                setProjects(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProjects()
    },[])
    return (
        <motion.section onViewportEnter={()=>setVisible(2)} viewport={{amount:0.5, once : false}} id="project" className="">
            <div className="flex mb-4 gap-4">
                <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                <h2 className="font-black text-5xl gradient-text">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
                {projects?.map(project=>(
                    <div key={project.name}>
                        <button onClick={()=>setSelected(project)} className="bg-gradient h-[15rem] rounded-xl mb-6 w-full">
                            <motion.div className="w-full h-full">    
                                <Image
                                    src={project.images[0]}
                                    alt={project.name}
                                    width={700}
                                    height={700} 
                                    className="h-full scale-75 origin-bottom"
                                />
                            </motion.div>
                        </button>
                        <div className="flex gap-2 items-center">
                            <h2 className="text-nowrap text-xl gradient-text font-bold">{project.name}</h2>
                            <div className="h-[1px] w-full bg-gradient"/>
                            <Link href={project.github}>
                                <FaGithub size={25}/>
                            </Link>
                            <Link href={project.link}>
                                <FiExternalLink size={25}/>
                            </Link>
                        </div>
                        <ul className="flex gap-2 my-3 flex-wrap">
                            {project.tech.map((tech:string, idx:number)=>(
                                <li key={idx} className="px-2 bg-gray-200 dark:bg-neutral-700 rounded-full">{tech}</li>
                            ))}
                        </ul>
                        <p>{project.description[0]}</p>
                    </div>
                ))}
                <AnimatePresence>
                    {isSelected && (<More isSelected={isSelected} setSelected={setSelected}/>)}
                </AnimatePresence>
            </div>
        </motion.section>
    )
};
