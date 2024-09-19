import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children : JSX.Element;
    style? : string
}

export const Reveal = ({children, style = "w-fit"} : Props) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once : true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if (inView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    },[inView])

    return (
        <div ref={ref} className={`relative overflow-hidden ${style}`}>
            <motion.div
                variants={{
                    hidden : { y : 75, opacity : 0 },
                    visible : { y : 0, opacity : 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration : 0.5, delay : 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden : { left : 0 },
                    visible : { left : "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration : 0.5, ease : "easeIn" }}
                className="absolute top-4 bottom-4 left-0 right-0 bg-gradient z-20"
            />
        </div>
    )
};
