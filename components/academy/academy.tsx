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
        <motion.section onViewportEnter={()=>setVisible(3)} viewport={{amount:0.5, once : false}} id="academy" className="text-lg mx-auto py-6">
            <Reveal style="w-full">
                <div className="flex mb-4 gap-4">
                    <h2 className="font-black text-5xl gradient-text">Academy</h2>
                    <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                </div>
            </Reveal>
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-6">
                {data && <Timeline data={data}/>}
            </div>
        </motion.section>
    )
};
