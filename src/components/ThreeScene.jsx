import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas className="h-96">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere visible args={[1, 16, 16]} scale={2}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
