import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";

const Model = ({
  modelPath,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
}) => {
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
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Stars radius={100} depth={50} count={2000} factor={4} fade />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <hemisphereLight intensity={0.2} />

        <Suspense fallback={null}>
          {models.map(({ modelPath, position, scale, rotation }, index) => (
            <Model
              key={index}
              modelPath={modelPath}
              position={position}
              scale={scale}
              rotation={rotation}
            />
          ))}
        </Suspense>

        <OrbitControls
          enablePan
          enableZoom
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
