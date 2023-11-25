"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const Model = () => {
  const gltf = useGLTF("models/backpack/palastine.gltf");
  const modelRef = useRef<Object3D | undefined>();

  useFrame(() => {
    // This function is called on each frame, allowing you to update the scene
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1.8] }} style={{ width: "40%" }}>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={2} />

      <directionalLight position={[5, 10, 5]} intensity={2} />

      <directionalLight position={[-5, 10, -5]} intensity={1} />

      <directionalLight position={[0, 0, 5]} intensity={1} />

      <spotLight position={[0, 5, 5]} angle={30} penumbra={1} intensity={2} />

      <Model />
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={1.3}
        maxDistance={2}
      />
    </Canvas>
  );
};

export default ThreeScene;
