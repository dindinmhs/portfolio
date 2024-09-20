"use client"
import { useVisibility } from "@/context/select";
import { Hero } from "./hero";
import { Word } from "./word";
import { motion } from "framer-motion";

export const Homepage = () => {
    const {setVisible} = useVisibility()
    return (
        <motion.section id="home" className="grid grid-cols-1 lg:grid-cols-2 h-[50rem] place-items-center">
            <motion.div onViewportEnter={()=>setVisible(0)} viewport={{amount:0.5, once : false}} className="w-fit h-fit items-center order-2 lg:order-1 place-self-start md:place-self-center mx-auto">
                <Word/>
            </motion.div>
            <div className="p-[2rem] lg:p-[8rem] overflow-hidden order-1 lg:order-2 mt-4 lg:my-0">
                <Hero/>
            </div>
        </motion.section>
    )
};
