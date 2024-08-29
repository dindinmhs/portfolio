import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useEffect, useRef } from "react";

const Earth = () => {
    const { scene, animations } = useGLTF('/earth_cartoon.glb');
    const { actions } = useAnimations(animations, scene);
    const mixer = useRef(new THREE.AnimationMixer(scene));

    // Set up the animation
    useFrame((state, delta) => {
        mixer.current.update(delta);
    });

    // Play all animations
    useEffect(() => {
        Object.values(actions).forEach((action) => {
        action?.play(); 
        });
    }, [actions]);
    return (
        <primitive object={scene} scale={[2.2, 2.2, 2.2]} />
    )
    
}

export const Model = () => {

  return (
    <Canvas style={{ height: "30rem" }} className="hover:cursor-grab active:cursor-grabbing">
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[15, 15, 15]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        decay={2}
        distance={100}
      />
      <Earth/>
      
    </Canvas>
  );
};

