import { i } from "maath/dist/index-43782085.esm";
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

import front from "../assets/front.png";
import back from "../assets/back.png";
import database from "../assets/database.png";
import tools from "../assets/tools.png";
import ensak from "../assets/ensak.png";
import e1337 from "../assets/e1337.png";
import jlmek from "../assets/jlmek.png";
import alx from "../assets/alx.jpg";
import gst2 from "../assets/gst2.png";
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
      icon: front,
      category: "Front-end",
    },
    {
      title: "Back-end",
      icon: back,
      category: "Back-end",
    },
    {
      title: "Database",
      icon: database,
      category: "Database",
    },
    {
      title: "Tools",
      icon: tools,
      category: "Tools",
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
      title: "Portfolio",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2024",
      iconBg: "#ffffff",
      icon: ensak, 
      points: [
        "Réalisé en HTML, CSS, PHP avec Laravel, React, et Three.js.",
      ],
    },
    {
      title: "Application dédiée au don de sang",
      company_name: "Club Jeunes Leaders Marocains ENSA Khouribga",
      location: "Khouribga",
      date: "2024",
      iconBg: "#ffffff",
      icon: jlmek,
      points: [
        "Réalisé en Angular, Spring Boot, Java.",
      ],
    },
    {
      title: "Gestion des projets académiques pour les enseignants",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2024",
      iconBg: "#ffffff",
      icon: ensak, 
      points: [
        "Réalisé en Java et JavaFX.",
      ],
    },
    {
      title: "Projet de prédictions de prix de voitures",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2023",
      iconBg: "#ffffff",
      icon: ensak, 
      points: [
        "Réalisé en PYTHON.",
      ],
    },
    {
      title: "Projet de Gestion Bancaire Avancée",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2023",
      iconBg: "#ffffff",
      icon: ensak,
      points: [
        "Réalisé en C++.",
      ],
    },
    {
      title: "Projet de Gestion de Centre de Soutien, Langue et Formation",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2023",
      iconBg: "#ffffff",
      icon: ensak,
      points: [
        "Réalisé avec MERISE, SQL, PHP, JavaScript, HTML et CSS.",
      ],
    },
    {
      title: "Études en Génie Informatique",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      date: "2023 - présent",
      iconBg: "#ffffff",
      icon: ensak,
      points: [
        "Apprentissage de Merise, SQL, C++, PYTHON, Algorithmes avancés.",
        "Programmation Assembleur, JAVA et JavaFX/Swing.",
        "Programmation web : HTML, CSS, PHP, JS.",
        "Systèmes d'exploitation : Linux/Unix, programmation Shell.",
        "Conception logicielle : MVC, Réseaux et protocoles, Analyse de données.",
      ],
    },
    {
      title: "Programme ALX Software Engineer",
      person: "Mohammed Majidi",
      date: "2022 - 2023",
      icon: alx,
      points: [
        "Apprentissage approfondi des langages de programmation C et Python.",
        "Réalisation de plusieurs projets inclus dans le programme.",
      ],
    },
    {
      title: "École 1337",
      person: "Haitam Lahlaouti",
      status: "Admis au level 08, devenu student",
      date: "2022 - 2023",
      iconBg: "#000000",
      icon: e1337,
      points: [
        "Apprentissage approfondi des langages de programmation C et Python.",
        "Réalisation de plusieurs projets inclus dans le programme.",
      ],
    },
    {
      title: "Prépa intégrée",
      company_name: "École Nationale des Sciences Appliquées Khouribga",
      location: "Khouribga",
      date: "2021 - 2023",
      iconBg: "#ffffff",
      icon: ensak,
      points: [
        "Étude de l'algorithmique et des langages de programmation C et Python.",
        "Réalisation de projets de gestion de bibliothèque, gestion des billets d'aéroport, gestion de réservation des bus, et de location de voitures en C.",
        "Projet de traitement d'image en Python en groupe.",
      ],
    },
    {
      title: "Baccalauréat - Sciences Mathématiques B",
      person: "Mohammed Majidi",
      company_name: "Abdellahgunoun",
      location: "Bejaad",
      date: "2020 - 2021",
      iconBg: "#383E56",
      points: [
        "Étude des Sciences Mathématiques B.",
      ],
    },
    {
      title: "Baccalauréat - Sciences Mathématiques B",
      person: "Haitam Lahlaouti",
      company_name: "Groupe Scolaire Tazi 2",
      location: "Casablanca",
      date: "2020 - 2021",
      iconBg: "#ffffff",
      icon: gst2,
      points: [
        "Étude des Sciences Mathématiques B.",
      ],
    },
  ];



  const testimonials = [
    {
      testimonial:
        "Le projet de gestion de centre de soutien, langue et formation a grandement amélioré notre organisation interne. L'équipe a su répondre à nos attentes avec des solutions innovantes.",
      name: "Yassir Rochd",
      designation: "Professeur Enseignement Supérieur",
      company: "École Nationale des Sciences Appliquées Khouribga",
      image: "path_to_image",
    },
    {
      testimonial:
        "L'application dédiée au don de sang a été une véritable révolution pour notre club. La qualité du code et la rapidité de l'exécution étaient exceptionnelles.",
      name: "Association Ataa",
      designation: "Association",
      company: "Club Jeunes Leaders Marocains ENSA Khouribga",
      image: "path_to_image",
    },
    // {
    //   testimonial:
    //     "Les compétences en développement web démontrées dans la réalisation du portfolio sont impressionnantes. Le site est à la fois moderne et fonctionnel.",
    //   name: "",
    //   designation: "Professeur Enseignement Supérieur",
    //   company: "École Nationale des Sciences Appliquées Khouribga",
    //   image: "path_to_image",
    // },
    {
      testimonial:
        "Le projet de prédiction des prix de voitures a apporté une nouvelle perspective à notre recherche en intelligence artificielle. Travail remarquable !",
      name: "Fatima Zohra Ennaji",
      designation: "Professeur Assistant à l'ENSA Khouribga",
      company: "École Nationale des Sciences Appliquées Khouribga",
      image: "path_to_image",
    },
    {
      testimonial:
        "La gestion des projets académiques pour les enseignants a considérablement facilité notre travail quotidien. Une réalisation exemplaire.",
      name: "Imad HAFIDI",
      designation: "Professeur de l'Enseignement Supérieur",
      company: "École Nationale des Sciences Appliquées Khouribga",
      image: "path_to_image",
    },
    {
      testimonial:
        "Le projet de gestion bancaire avancée a été un défi relevé avec brio. L'application est robuste et efficace.",
        name: "Fatima Zohra Ennaji",
        designation: "Professeur Assistant à l'ENSA Khouribga",
      company: "École Nationale des Sciences Appliquées Khouribga",
      image: "path_to_image",
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
