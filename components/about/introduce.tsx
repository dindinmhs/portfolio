"use client"
import { useState, useEffect } from "react";

export const Introduce = () => {
    const [about, setAbout] = useState<string[] | undefined>()
    useEffect(()=>{
        const fetchAbout = async () => {
        try {
            const res = await fetch('api/getabout')
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json()
            setAbout(data)
        } catch (error) {
            console.error(error)
        }
        }
        fetchAbout()
    },[])
    return (
        <div className="col-span-2">
            {about?.map((p, index)=>(
                <p className="my-2 text-justify" key={index}>{p}</p>
            ))}
        </div>
    )
};
