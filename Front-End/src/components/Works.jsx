import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import $ from "jquery";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from the API
  const fetchProjects = () => {
    return $.ajax({
      url: "http://127.0.0.1:8000/api/projects",
      method: "GET",
    });
  };

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects()
      .done((data) => {
        console.log("Fetched projects:", data);
        if (data && data.projects) {
          setProjects(data.projects);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .fail((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  console.log(projects);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`ml-5 ${styles.sectionSubText} cursor-default`}>My work</p>
        <h2 className={`ml-5 ${styles.sectionHeadText} cursor-default`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 ml-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects give a glimpse into our skills and expertise,
          showcasing real-world examples of our work. With each project,
          we provide brief descriptions along with links to GitHub
          repositories and live demos. This portfolio reflects our
          capability to tackle complex challenges, adapt to various
          technologies, and manage projects efficiently.
        </motion.p>
      </div>

      <div className="mt-20 ml-10 flex flex-wrap gap-7">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={`project-${index}`}>
            <ProjectCard title={project.title} description={project.description} image={project.image} githubLink={project.githubLink} />
          </div>))
        ) : (
          <p className="text-center text-white">No projects found.</p>
        )}
      </div>
    </>
  );};
const ProjectCard = ({
    index,
    title,
  description,
  image,
  githubLink,
  tags = [],

  
}) => {
    console.log(title, description, image, githubLink, tags);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(githubLink)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



export default Works;
