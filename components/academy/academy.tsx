"use client"
import { motion } from "framer-motion";
import { Timeline } from "./timeline";
import { useVisibility } from "@/context/select";
import { useAcademy } from "@/request/academy";
import { Reveal } from "../reveal/reveal";

export const Academy = () => {
    const { setVisible } = useVisibility()
    const { data } = useAcademy()
    return (
        <section id="academy" className="text-lg mx-auto pb-16">
            <Reveal style="w-full">
                <motion.div className="flex mb-4 gap-4" onViewportEnter={()=>setVisible(3)} viewport={{amount:1, once : false}}>
                    <h2 className="font-black text-5xl gradient-text">Academy</h2>
                    <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                </motion.div>
            </Reveal>
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-6">
                {data && <Timeline data={data}/>}
            </div>
        </section>
    )
};
