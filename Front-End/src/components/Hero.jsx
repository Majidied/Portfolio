import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className={`relative w-full h-screen mx-auto ${isMobile ? 'flex flex-col' : ''}`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915EFF]">zeph1697</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-900`}>
            I build clean & pixel-perfect website <br /> And 3D website also, if
            you ask :&#41;
          </p>
          <p className="absolute bottom-8 text-secondary">
            *Touch the computer to rotate...
          </p>
        </div>
      </div>

        <div className="absolute w-full sm:w-[70%] h-screen sm:right-[5%]">
          <ComputersCanvas />
        </div>

      <div className="absolute xs:bottom-16 bottom-0 w-full hidden sm:flex justify-center items-center">
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
    </section>
  );
};

export default Hero;
