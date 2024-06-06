import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { fadeIn, textVariant } from "../utils/motion";



import { styles } from "../styles";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const toRotate = ['Full stack developers', 'Software engineers', 'Desktop app developers', 'Computer science enthusiasts'];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (charIndex < toRotate[textIndex].length) {
        setDisplayText(prevText => prevText + toRotate[textIndex].charAt(charIndex));
        setCharIndex(prevIndex => prevIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText('');
          setTextIndex(prevIndex => (prevIndex + 1) % toRotate.length);
        }, 2000);
      }
    }, 150);

    return () => clearTimeout(intervalId);
  }, [charIndex, textIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto ${isMobile ? 'flex flex-col' : ''}`}>
      <motion.div
      variants={textVariant()}
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className="flex flex-col items-center lg:items-start">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, We are <span className="text-[#915EFF]">BinaryBros</span>
          </h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-100">Welcome To our <span className="text-cyan-500">Portfolio</span></h1>
            <span className="bg-gradient-to-r from-blue-300 via-gray-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mt-4">
              <span className="text-purple-400">We are </span> {displayText}
            </span>
            <p className="text-lg lg:text-xl text-neutral-300 mt-2">
              with a passion for creating beautiful and functional websites. <br /> We have experience in both front-end and back-end development, <br /> and We am always looking for new challenges to help me grow as a developer.
            </p>
          </div>
          <p className="absolute bottom-8 text-secondary">
            *Touch the computer to rotate...
          </p>
        </div>
      </motion.div>




    </section>
  );
};

export default Hero;
