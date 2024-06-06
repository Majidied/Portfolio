import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { categories } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";
import front from "../assets/front.png";

const ServiceCard = ({ index, image, title, onClick }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                onClick={onClick}
            >
                <img src={image} alt={title} className="w-20 h-20 object-contain rounded" />
                <h3 className="text-white text-[20px] font-bold text-center cursor-default">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const [selectedCategory, setSelectedCategory] = useState("Select a category");

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} cursor-default`}>
                    Introduction
                </p>
                <h2 className={`${styles.sectionHeadText} cursor-default`}>
                    About me.
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a full-stack developer with experience in JavaScript, and expertise
                in frameworks like React, Node.js, and Three.js. I'm a quick learner and
                collaborate closely with clients to create efficient and user-friendly
                solutions. I really appreciate your immediate attention to this matter!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {categories.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        image={service.icon}
                        title={service.title}
                        onClick={() => {
                            setSelectedCategory(service.category)
                        }}
                    />
                ))}
            </div>
            <br />
            <motion.div className="w-full h-full bg-gray-900 rounded-lg shadow-lg p-6"
            variants={fadeIn("", "", 0.1, 1)}
            >
                <h1 className="mt-10 text-2xl font-bold z-10">{selectedCategory}</h1>
                <Tech key={selectedCategory} selectedCategory={selectedCategory} />
            </motion.div>

        </>
    );
};

export default SectionWrapper(About, "about");
