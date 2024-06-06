import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { categories } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";

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
                    About us.
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
            >
                Mohammed Majidi and Haitam Lahlaouti are aspiring software engineers
                with a passion for learning and mastering various programming languages
                and frameworks. Mohammed completed the ALX Software Engineer program,
                excelling in C and Python, while Haitam was admitted to level 08 at
                École 1337, where he currently studies. Both have a strong educational
                background in engineering and mathematics, with proficiency in
                languages like C++, Python, Java, and technologies such as Laravel,
                React, and Spring Boot. Their project experience showcases their
                ability to apply their skills effectively in real-world scenarios,
                making them valuable assets in the field of software development.
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
            <motion.div className="w-full h-full bg-gradient-to-b from-gray-100 to-stone-100 rounded-lg shadow-lg p-6"
                variants={fadeIn("", "", 0.1, 1)}
            >
                <h1 className="mt-10 text-2xl font-bold z-10 text-blue-900">{selectedCategory}</h1>
                <Tech key={selectedCategory} selectedCategory={selectedCategory} />
            </motion.div>


        </>
    );
};

export default SectionWrapper(About, "about");
