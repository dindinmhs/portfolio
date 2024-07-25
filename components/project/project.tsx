import Image from "next/image";
import { useState, useEffect } from "react";

export const Project = () => {
    const [project, setProject] = useState<string[] | undefined>()
    useEffect(()=>{
        const fetchProject = async () => {
        try {
            const res = await fetch('/api/getproject')
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json()
            setProject(data)
        } catch (error) {
            console.error(error)
        }
        }
        fetchProject()
    },[])
    useEffect(()=>{
        console.log(project)
    },[project])
    return (
        <section id="project" className="">
            <div className="flex mb-4 gap-4">
                <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                <h2 className="font-black text-5xl gradient-text">Project</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="bg-black h-[15rem]">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-2b753.appspot.com/o/SEA%20Salon%2Fsea-salon.png?alt=media&token=37d65e24-dbd7-4438-bff4-6759d6a3dee6"
                        width={1000}
                        height={1000}
                        alt="image"
                        className="w-full h-full"
                    />
                </div>
                <div className="bg-black h-[15rem]">tes</div>
                <div className="bg-black h-[15rem]">tes</div>
            </div>
        </section>
    )
};
