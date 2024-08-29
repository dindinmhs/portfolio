import { useVisibility } from "@/context/select";
import { MeshWobbleMaterial, OrbitControls, Sphere, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { TorusKnotGeometry } from "three";
import { Model } from "./model";

export const Contact = () => {
    const { setVisible } = useVisibility()
    
    return (
        <motion.section id="contact" onViewportEnter={()=>setVisible(4)} viewport={{amount:0.5, once : false}}>
            <div className="flex mb-4 gap-4">
                <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
                <h2 className="font-black text-5xl gradient-text">Contact</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <ul>
                    <ul>Linked In</ul>
                    <ul>Github</ul>
                    <ul>Email</ul>
                    <ul>Instagram</ul>
                </ul>
                <Model/>
            </div>
        </motion.section>
    )
};
