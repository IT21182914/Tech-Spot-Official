import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const categories = {
  iPhones: [
    {
      modelPath: "/models/iphone_13_pro.glb",
      name: "iPhone 13 Pro",
      price: "LKR 200,000",
      scale: [3, 3, 3],
    },
  ],
  Chargers: [
    {
      modelPath: "/models/phone_charger.glb",
      name: "Phone Charger",
      price: "LKR 1,500",
    },
    {
      modelPath: "/models/phone_charger_with_usb_cable.glb",
      name: "Charger with USB",
      price: "LKR 2,000",
    },
  ],
  AndroidPhones: [
    {
      modelPath: "/models/samsung_galaxy_s22_ultra.glb",
      name: "Galaxy S23 Ultra",
      price: "LKR 250,000",
      scale: [1, 1, 1],
    },
  ],
};

const Model = ({ modelPath, scale }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale || [0.5, 0.5, 0.5]} />;
};

const Shop = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-3xl text-center py-8">Shop Mobile Accessories</h1>
      {Object.keys(categories).map((category, index) => (
        <div key={index} className="py-8">
          <h2 className="text-2xl text-center mb-4">{category}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {categories[category].map((item, idx) => (
              <div
                key={idx}
                className="w-64 bg-gray-100 bg-opacity-20 rounded-lg p-4"
              >
                <div className="h-64">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                      <Model modelPath={item.modelPath} scale={item.scale} />
                    </Suspense>
                    <OrbitControls
                      autoRotate
                      autoRotateSpeed={2}
                      enableZoom={false}
                    />
                  </Canvas>
                </div>
                <h3 className="text-lg text-center mt-4">{item.name}</h3>
                <p className="text-gray-400 text-center">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
