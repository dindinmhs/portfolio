import Image from "next/image";
import { motion, MotionConfig, useAnimate } from "framer-motion"
import { useEffect } from "react";

export const Hero = () => {
    return (
        <div className="relative border-b-8 rounded-3xl border-pink-700">
            <Image
                src={`/dindin.png`}
                alt="dindin"
                priority={true}
                width={1000}
                height={1000}
                className="w-full h-full absolute scale-75 origin-bottom bottom-0 z-10"
            />
            <Image
                src={`/splash.svg`}
                alt="splash"
                priority={true}
                width={300}
                height={300}
                className="w-auto h-auto"
            />
            <MotionConfig transition={{ duration: 5, repeat : Infinity, type : "just" }}>
                <motion.div
                    initial={{ scale : 0.18 }}
                    animate={{
                        y : [-9, 0, -9, 0, -9],
                    }}
                    className="absolute w-full bottom-0 p-2 rounded-full bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 origin-left left-16">
                    <Image
                        src={`/framer-motion-logo.svg`}
                        alt="framer motion"
                        priority={true}
                        width={100}
                        height={100}
                        className="w-auto h-auto scale-[0.6]"
                    />
                </motion.div>
                <motion.div 
                    initial={{ scale : 0.18 }}
                    animate={{
                        y : [-10, 0, -10, 0, -10],
                    }}
                    className="absolute w-full bottom-0 p-2 rounded-full bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 origin-top top-4">
                    <Image
                        src={`/react-logo.svg`}
                        alt="react logo"
                        priority={true}
                        width={800}
                        height={800}
                        className="w-auto h-auto scale-75"
                    />
                </motion.div>
                <motion.div 
                    initial={{ scale : 0.18 }}
                    animate={{
                        y : [-11, 1, -11, 1, -11],
                    }}
                    className="absolute w-full bottom-0 p-2 rounded-full bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 origin-right right-16">
                    <Image
                        src={`/firebase-logo.svg`}
                        alt="firebase"
                        priority={true}
                        width={1000}
                        height={1000}
                        className="w-auto h-auto scale-75"
                    />
                </motion.div>
            </MotionConfig>
        </div>
    )
};
