import { AcademyType } from "@/types/type";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "../reveal/reveal";

export const Timeline = ({ data }:{ data : AcademyType[] }) => {
    const middleIndex = Math.floor(data.length / 2);
    return (
        <>
            {data.map((academy : AcademyType, idx : number)=>(
                <div key={idx} className={`${idx%2===0?"flex-row-reverse":"flex-row"} flex md:contents text-black dark:text-white`}>
                    <motion.div
                        variants={{
                            rigthpos : { x : -20, opacity : 0 },
                            show : { x : 0, opacity : 1 }
                        }}
                        initial={"rigthpos"} 
                        whileInView={"show"}
                        transition={{ duration : 1 }}
                        viewport={{ once : true }}
                        className={`${idx%2===0?`col-start-1 col-end-5 order-1 border-purple-600`:`order-2 col-start-6 col-end-10 border-pink-600`} dark:bg-neutral-700 bg-gray-200 p-4 rounded-2xl my-4 border-b-8`}
                    >
                        <small className="font-bold">{academy.start_year===academy.end_year?academy.start_year:`${academy.start_year} - ${academy.end_year}`}</small>
                        <h3 className="font-black text-2xl mb-1 gradient-text">{academy.name}</h3>
                        <h4 className="font-semibold text-lg mb-1">{academy.study}</h4>
                        <p className="leading-tight text-justify">{academy.desc}</p>
                    </motion.div>
                    <div className={`order-1 col-start-5 col-end-6 md:mx-auto relative mr-10`}>
                        <motion.div
                            initial={{ height : 0, opacity : 0 }}
                            whileInView={{ height : "100%", opacity : 1 }}
                            transition={{ duration : 1 }}
                            viewport={{ once : true }}
                            className="h-full w-10 flex items-center justify-center"
                        >
                            <div className={`${idx===middleIndex?"bg-gradient-to-b from-purple-600 to-pink-600":idx<middleIndex?"bg-purple-600":"bg-pink-600"} h-full w-1 pointer-events-none`}/>
                        </motion.div>
                        <motion.div
                            initial={{ y : -20, opacity : 0 }}
                            whileInView={{ y : 0, opacity : 1 }}
                            transition={{ duration : 0.5, delay : 0.5 }}
                            viewport={{ once : true }} 
                            className={`${idx===middleIndex?"bg-gradient-to-b from-purple-700 to-pink-700":idx<middleIndex?"bg-purple-700":"bg-pink-700"} w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow-lg p-1`}
                        >
                            <div className="w-full h-full rounded-full p-1 bg-gray-300">
                                <Image
                                    alt={academy.name}
                                    src={academy.logo}
                                    width={500}
                                    height={500}
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </>
    )
};
