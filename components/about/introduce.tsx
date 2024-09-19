"use client"
import { useAbout } from "@/request/about";
import { Reveal } from "../reveal/reveal";

export const Introduce = () => {
    const {data} = useAbout()
    return (
        <div className="col-span-2">
            {data?.map((p, index)=>(
                <Reveal key={index}>
                    <p className="my-2 text-justify">{p}</p>
                </Reveal>
            ))}
        </div>
    )
};
