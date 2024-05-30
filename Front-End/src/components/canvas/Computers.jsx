import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';


import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./ninja_brothers_lowpoly/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.20} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [0, -3, 1] : [0, -3.25, 0]}
        rotation={[-0.01, 0.5, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[0.8, 2]}
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={isMobile ? {marginLeft: "100px"} : { width: "calc(100% - 180px)", marginLeft: "250px", paddingBottom: "150px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
