"use client"
import Link from "next/link"
import { site } from "@/config/site"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ThemeToggle } from "./themetoggle"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { Menu } from "./menu"
import { useVisibility } from "@/context/select"



export const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false)

    const { visible } = useVisibility()
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious()
        if (prev && !isOpen && latest > prev && latest > 50) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header
            variants={{
                hidden : { y : "-100%"},
                visible : { y : 0},
            }}
            animate={hidden?"hidden":"visible"}
            transition={{ duration : 0.35, ease : "easeInOut" }} 
            className={`flex justify-between px-10 items-center py-2 bg-gray-50 dark:bg-neutral-800 right-0 left-0 z-40 fixed`}
        >
                <Link href="/" className={`text-2xl font-black bg-gradient-to-l from-purple-600 to-pink-600 mask`}>
                    <h1>
                        {site.logo}
                    </h1>
                </Link>
            <nav
                className={`${isOpen?"translate-y-1/2":"-translate-y-[100vh]"} md:translate-y-0 duration-500 text-lg md:inline absolute h-[100vh] left-0 right-0 px-4 md:px-0 md:h-fit md:static pt-16 md:pt-0 bg-gray-50 dark:bg-neutral-800 -z-10 origin-top`}>
                {site.navlink.map((link, idx) => (
                    <Link key={link.name} className={`${visible == idx ? "rounded-full bg-gradient text-fontDark" : "hover-nav"} mx-1 py-2 px-4 block md:inline`} href={link.path}>{link.name}</Link>
                ))}
            </nav>
            <div className="flex items-center md:gap-2">
                <Link className="md:p-3 hover-nav mx-1" href={site.contact.linkedin}><FaLinkedin size={25}/></Link>
                <Link className="md:p-3 hover-nav mx-1" href={site.contact.github}><FaGithub size={25}/></Link>
                <ThemeToggle/>
                <Menu isOpen={isOpen} setOpen={setOpen}/>
            </div>
        </motion.header>
    )
}