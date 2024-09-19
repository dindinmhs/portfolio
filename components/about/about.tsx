import { useVisibility } from "@/context/select";
import { Introduce } from "./introduce";
import { Techs } from "./tech";
import { motion } from "framer-motion";
import { Reveal } from "../reveal/reveal";

export const About = () => {
    const { setVisible } = useVisibility()
    return (
        <motion.section onViewportEnter={()=>setVisible(1)} viewport={{amount:0.5, once : false}} id="about" className="text-lg mx-auto py-6">
            <Reveal style="w-full">
                <div className="flex mb-4 gap-4">
                    <h2 className="font-black text-5xl gradient-text">About</h2>
                    <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600 w-full"></div>
                </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Introduce/>
                <Techs/>
            </div>
        </motion.section>
    )
};
