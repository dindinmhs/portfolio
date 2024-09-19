import { useVisibility } from "@/context/select";
import { motion } from "framer-motion";
import { Model } from "./model";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { site } from "@/config/site";
import { Reveal } from "../reveal/reveal";

export const Contact = () => {
    const { setVisible } = useVisibility()
    
    return (
        <motion.section id="contact" onViewportEnter={()=>setVisible(4)} viewport={{amount:0.5, once : false}}>
            <Reveal style="w-full">
                <div className="flex mb-4 gap-4">
                    <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                    <h2 className="font-black text-5xl gradient-text">Contact</h2>
                </div>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
                <div className="dark:bg-neutral-700 bg-gray-200 md:px-4 py-8 rounded-md  md:h-1/2 flex flex-col justify-center">
                    <Reveal>
                        <p className="text-lg text-center">
                            Shoot me an email if you want to connect! You can also find me on <Link href={site.contact.linkedin} className="text-purple-500 hover:text-purple-600">Linkedin</Link> or <Link href={site.contact.instagram} className="text-purple-500 hover:text-purple-600">Instagram</Link> if that's more your   speed.
                            </p>
                    </Reveal>
                    <div className="mt-4 flex items-center gap-2 mx-auto">
                        <Reveal>
                            <MdOutlineEmail size={30}/>
                        </Reveal>
                        <Reveal>
                            <span className="font-bold text-lg md:text-xl break-all">dindinimanudin147@gmail.com</span>
                        </Reveal>
                    </div>       
                </div>
                <Reveal style="w-full">
                    <Model/>
                </Reveal>
            </div>
        </motion.section>
    )
};
