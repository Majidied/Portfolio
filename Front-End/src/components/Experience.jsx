

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff" ,
        animation: "fade-in 0.5s ease-in-out",
        transition: "background 0.5s ease-in-out",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #000" }}
      date={
        <div className="cursor-default text-slate-900">{experience.date}</div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold cursor-default">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold cursor-default"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p
          className="text-gray-400 text-[10px] font-semibold cursor-default"
          style={{ margin: 0 }}
        >
          {experience.person}
        </p>
      </div>


      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center cursor-default`}>
        Our Experiences
        </p>
        <h2 className={`${styles.sectionHeadText} text-center cursor-default`}>
          Experiences.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ff0000">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
