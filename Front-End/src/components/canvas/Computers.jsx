import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Preload,
    useGLTF,
    useAnimations,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three"; // Import THREE.js
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const group = useRef();
    const { scene, animations } = useGLTF("./robot_playground.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => {
            action.setLoop(THREE.LoopRepeat, Infinity);
            action.play();
        });
    }, [actions]);

    return (
        <group ref={group}>
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
                scale={isMobile ? 1.5 : 2}
                position={isMobile ? [0, -4, 1] : [1, -3.25, 0]}
                rotation={[-0.01, 0.5, -0.1]}
            />
        </group>
    );
};

const ComputersCanvas = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[0.8, 2]}
            camera={{ position: [20, 3, 10], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            style={
                isMobile
                    ? { marginLeft: "0px" }
                    : {
                        width: "calc(100% - 200px)",
                        marginLeft: "250px",
                        paddingBottom: "100px",
                    }
            }
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
