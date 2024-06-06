import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Hero from "./Hero";
import { ComputersCanvas } from "./canvas";
export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >


      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        style={{ y: textY }}
        className="relative z-10 left-0 top-0 w-full h-full flex items-center justify-center"
      >
        <Hero/>
      </motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute w-full sm:w-[70%] h-screen sm:right-[5%] z-30">
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-16 bottom-0 w-full hidden sm:flex justify-center items-center z-40">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-900 flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
