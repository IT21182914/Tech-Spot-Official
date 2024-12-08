import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";

// Component to render a single model
const Model = ({ modelPath, position, scale, rotation }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

const ThreeScene = () => {
  // Array of models with paths, positions, scales, and rotation
  const models = [
    {
      modelPath: "/models/iphone_16_pro_max.glb",
      position: [-4, 0, 0],
      scale: [2, 2, 2],
      rotation: [0, Math.PI / 4, 0],
    },

    {
      modelPath: "/models/free_iphone_13_pro_2021.glb",
      position: [0, 0, 0],
      scale: [2, 2, 2],
      rotation: [0, Math.PI / 6, 0],
    },
  ];

  return (
    <div className="h-[500px] md:h-screen bg-gradient-to-t from-gray-900 to-black">
      <Canvas>
        {/* Background Stars */}
        <Stars radius={100} depth={50} count={2000} factor={4} fade />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.4}
          penumbra={1}
          intensity={1.2}
        />

        {/* Render Models Dynamically */}
        <Suspense fallback={null}>
          {models.map((model, index) => (
            <Model
              key={index}
              modelPath={model.modelPath}
              position={model.position}
              scale={model.scale}
              rotation={model.rotation}
            />
          ))}
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
