import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("robot_playground.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
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
        object={scene}
        scale={isMobile ? 0.4 : 1}
        position={isMobile ? [0, -3, 1] : [0, -3.25, 0]}
        rotation={[-0.01, 0.5, -0.1]}
      />
    </mesh>
  );
};

export default Computers;
