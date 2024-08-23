"use client"
import { useAbout } from "@/request/about";

export const Introduce = () => {
    const {data} = useAbout()
    return (
        <div className="col-span-2">
            {data?.map((p, index)=>(
                <p className="my-2 text-justify" key={index}>{p}</p>
            ))}
        </div>
    )
};
