import { motion } from "framer-motion"
import { Dispatch,SetStateAction } from "react";

interface type {
    isOpen : boolean,
    setOpen : Dispatch<SetStateAction<boolean>>
}

export const Menu = ({isOpen, setOpen} : type) => {
    return (
        <motion.button className="md:hidden" onClick={()=>setOpen(!isOpen)} animate={isOpen?"open":"close"}>
                    <div className="w-7 flex flex-col gap-1 items-end">    
                        <motion.div
                            style={{
                                width : "100%"
                            }} 
                            variants={{
                                open : {
                                    rotate : "45deg",
                                    y : 8
                                },
                                close : {
                                    rotate : "0deg",
                                }
                            }}
                            className="bg-black dark:bg-fontDark h-1 rounded-full"/>
                        <motion.div
                            style={{
                                width : "75%"
                            }} 
                            variants={{
                                open : {
                                    opacity : 0,
                                },
                                close : {
                                    opacity : 1,
                                }
                            }}
                            className="bg-black dark:bg-fontDark h-1 rounded-full"/>
                        <motion.div
                            style={{
                                width : "50%"
                            }} 
                            variants={{
                                open : {
                                    rotate : "-45deg",
                                    y : "-8px",
                                    width : "100%",
                                },
                                close : {
                                    width : "50%",
                                    rotate : "0deg",
                                }
                            }}
                            className="bg-black dark:bg-fontDark h-1 rounded-full"/>
                    </div>
                </motion.button>
    )
};
