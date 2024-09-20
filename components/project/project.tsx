import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { More } from "./more";
import { ProjectType } from "@/types/type";
import { useVisibility } from "@/context/select";
import { Reveal } from "../reveal/reveal";

export const Project = ({projects}:any) => {
    const [isSelected, setSelected] = useState<ProjectType>()
    const { setVisible } = useVisibility()

    useEffect(()=>{
        if (isSelected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    },[isSelected])
    
    return (
        <motion.section onViewportEnter={()=>setVisible(2)} viewport={{amount:0.5, once : false}} id="project" className="pb-16">
            <Reveal style="w-full">
                <div className="flex mb-8 gap-4">
                    <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                    <h2 className="font-black text-5xl gradient-text">Projects</h2>
                </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
                {projects.map((project : ProjectType)=>(
                    <div key={project.name}>
                        <Reveal>
                            <button onClick={()=>setSelected(project)} className="bg-gradient h-[15rem] rounded-xl mb-6 w-full group overflow-hidden">
                                <motion.div className="w-full h-full">    
                                    <Image
                                        src={project.images[0]}
                                        alt={project.name}
                                        width={700}
                                        height={700} 
                                        className="h-full scale-75 origin-bottom group-hover:scale-100 duration-200"
                                    />
                                </motion.div>
                            </button>
                        </Reveal>
                        <Reveal style="w-full">    
                            <div className="flex gap-2 items-center">
                                <h2 className="text-nowrap text-xl gradient-text font-bold">{project.name}</h2>
                                <div className="h-[1px] w-full bg-gradient"/>
                                <Link className="hover:text-purple-500 duration-75" target="_blank" href={project.github}>
                                    <FaGithub size={25}/>
                                </Link>
                                <Link className="hover:text-purple-500 duration-75" target="_blank" href={project.link}>
                                    <FiExternalLink size={25}/>
                                </Link>
                            </div>
                        </Reveal>
                        <Reveal>    
                            <ul className="flex gap-2 my-3 flex-wrap">
                                {project.tech.map((tech:string, idx:number)=>(
                                    <li key={idx} className="px-2 bg-gray-200 dark:bg-neutral-700 rounded-full">{tech}</li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal>
                            <p>{project.description[0]}</p>
                        </Reveal>
                    </div>
                ))}
                <AnimatePresence>
                    {isSelected && (<More isSelected={isSelected} setSelected={setSelected}/>)}
                </AnimatePresence>
            </div>
        </motion.section>
    )
};
