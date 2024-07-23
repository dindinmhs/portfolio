"use client"
import { useState, useEffect } from "react";

export const About = () => {
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
        <div>
            {about?.map((p, index)=>(
                <p key={index}>{p}</p>
            ))}
        </div>
    )
};
