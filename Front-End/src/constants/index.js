import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ai,
  ae,
  pr,
  ps,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  firebase,
  git,
  figma,
  wordpress,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  cc,
  vsc,
  tiktok,
} from "../assets";

import avt1 from "../assets/avatar1.jpg";
import avt2 from "../assets/avatar2.jpg";
import avt3 from "../assets/avatar3.jfif";
import project1 from "../assets/portfolio1.png";
import project2 from "../assets/portfolio2.png";
import project3 from "../assets/portfolio4.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const categories = [
    {
      title: "Front-end",
      category: "Front-end",
    },
    {
      title: "Back-end",
      category: "Back-end",
    },
    {
      title: "Database",
      category: "database",
    },
    {
      title: "Tools",
      category: "tools",
    },
  ];

//   const technologies = [
//     {
//       name: "HTML 5",
//       icon: html,
//       category: "front-end",
//     },
//     {
//       name: "CSS 3",
//       icon: css,
//       category: "front-end",
//     },
//     {
//       name: "JavaScript",
//       icon: javascript,
//       category: "front-end",
//     },
//     {
//       name: "React JS",
//       icon: reactjs,
//       category: "front-end",
//     },
//     {
//       name: "Redux Toolkit",
//       icon: redux,
//       category: "front-end",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: tailwind,
//       category: "front-end",
//     },
//     {
//       name: "Node JS",
//       icon: nodejs,
//       category: "back-end",
//     },
//     {
//       name: "Firebase",
//       icon: firebase,
//       category: "database",
//     },
//     {
//       name: "Three JS",
//       icon: threejs,
//       category: "front-end",
//     },
//     {
//       name: "git",
//       icon: git,
//       category: "tools",
//     },
//     {
//       name: "Figma",
//       icon: figma,
//       category: "tools",
//     },
//     {
//       name: "WordPress",
//       icon: wordpress,
//       category: "back-end",
//     },
//     {
//       name: "Illustrator",
//       icon: ai,
//       category: "tools",
//     },
//   ];

//   const fetchTechnologies = () => {
//     return $.ajax({
//         url: "http://127.0.0.1:8000/api/skills",
//         method: "GET",
//     });
// };

// const [technologies, setTechnologies] = useState([]);

// useEffect(() => {
//     fetchTechnologies()
//         .done((data) => {
//             setTechnologies(data.technologies);
//         })
//         .fail((error) => {
//             console.error("Error fetching technologies:", error);
//         });
// }, []);


const experiences = [
  {
    title: "Web Application Develop",
    company_name: "React",
    icon: vsc,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Design",
    company_name: "Figma",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Design & organized web applications features using Figma and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Translate designs to code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Illustration Design",
    company_name: "Adobe Creative Cloud",
    icon: cc,
    iconBg: "#E6DEDD",
    date: "2018 - Present",
    points: [
      "Create modern attractive template for website.",
      "Design logo, banners, posters, thumbnails, brand awareness, and everything matched your requirements.",
      "Publications such as pakages, clothes, brochures, etc .",
      "Material, flat, minimalism, abstract design.",
    ],
  },
  {
    title: "Video & Content Edit",
    company_name: "Youtube & Tiktok",
    icon: tiktok,
    iconBg: "#E6DEDD",
    date: "2015 - Present",
    points: [
      "Content edit & management, suitable for any platform.",
      "Create intro & outro perfectly fit your profile.",
      "2D & 3D transition, stunning effects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Professional design, clean and good-looking. Hope for the next co-opporation.",
    name: "Son Anh Nguyen",
    designation: "CFO",
    company: "HA Smart",
    image: avt1,
  },
  {
    testimonial:
      "Awesome works, really cute and modern design! A little bit in a nick of time but the result still worthy.",
    name: "Huyen Trang Nguyen",
    designation: "COO",
    company: "DEF Corp",
    image: avt2,
  },
  {
    testimonial: "Great job! Very nice design, simple but effective.",
    name: "Ly Nguyen",
    designation: "CTO",
    company: "Sunhouse Co., LTD",
    image: avt3,
  },
];

const projects = [
  {
    name: "Restaurant App",
    description:
      "Web-based platform that allows users to search, book, and manage food products, providing a convenient and efficient solution for online food order & delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "googlefirebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/zeph1697/restaurant-app",
    link: "https://zeph1697.github.io/restaurant-app/",
  },
  {
    name: "Portfolio",
    description:
      "Responsive portfolio in flat modern material design showcases my projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/zeph1697/portfolio",
    link: "https://zeph1697.github.io/portfolio/",
  },
  {
    name: "Fitness Website",
    description:
      "A comprehensive website platform that allows users to choose task, training level, and offers curated recommendations for people who wants to keep the shape nicely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/zeph1697/fitness-website",
    link: "https://zeph1697.github.io/fitness-website/",
  },
];



export { categories, experiences, testimonials, projects };
