import {
  frontend,
  backend,
  software,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ITI,
  ain_shams,
  shopify_ecommerce,
  carrent,
  jobit,
  tripguide,
  threejs,
  movieTime,
  videoChat,
  tedClone,
  jumia,
  clickShop,
  blogApplication,
  adminDashboard,
  handleProducts,
  taskManagement,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: software,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "ITI",
    icon: ITI,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Developing and maintaining web applications using MERN stack, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Ain Shams University",
    icon: ain_shams,
    iconBg: "#383E56",
    date: "Sept 2017 - July 2021",
    points: [
      "Study Software Engineer field by taking courses like:",
      "Design Pattern",
      "Data Structure",
      "Object-oriented Programming",
      "System Analysis",
      "Database",
      "Software Engineering",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Time",
    description:
      "A movie streaming platform created with React JS, styled with TailwindCSS for a modern look and feel, providing users with an intuitive interface to browse and watch movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: movieTime,
    source_code_link_view: "https://react-movie-time-gamma.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/React_Movie_Time",
  },
  {
    name: "Admin Dashboard",
    description:
      "An administrative dashboard application developed with ReactJS and Material UI, leveraging Firebase for real-time data synchronization and user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "materialui",
        color: "blue-text-gradient",
      },
    ],
    image: adminDashboard,
    source_code_link_view: "https://admin-dashboard-pi-seven.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/admin-dashboard",
  },
  {
    name: "Handle Products",
    description:
      "An e-commerce management application built with NextJS and Redux Toolkit, styled with TailwindCSS, implementing design patterns for code efficiency, and providing authentication for secure user access.",
    tags: [
      {
        name: "next",
        color: "text-white",
      },
      {
        name: "redux",
        color: "text-violet-500",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "design_pattern",
        color: "pink-text-gradient",
      },
      {
        name: "auth",
        color: "text-red-700",
      },
    ],
    image: handleProducts,
    source_code_link_view: "https://handle-products.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/handle_products",
  },
  {
    name: "Blog Web Application",
    description:
      "A dynamic blog platform developed with NextJS, using Redux Toolkit for state management, styled with Shadcn UI, utilizing JSONplaceholder for dummy data, and featuring lazy loading for optimized performance.",
    tags: [
      {
        name: "next",
        color: "text-white",
      },
      {
        name: "redux",
        color: "text-violet-500",
      },
      {
        name: "shadcnui",
        color: "text-white",
      },
      {
        name: "design_pattern",
        color: "pink-text-gradient",
      },
      {
        name: "auth",
        color: "text-red-700",
      },
    ],
    image: blogApplication,
    source_code_link_view: "https://blog-application-tawny.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/blog-application",
  },
  {
    name: "Video Chat",
    description:
      "A video communication application using NextJS and Shadcn UI, enhanced with TailwindCSS for styling, integrated with Clerk for authentication, and powered by Stream for real-time video chat functionality.",
    tags: [
      {
        name: "next",
        color: "text-white",
      },
      {
        name: "shadcnui",
        color: "text-white",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "stream",
        color: "text-violet-500",
      },
      {
        name: "design_pattern",
        color: "pink-text-gradient",
      },
    ],
    image: videoChat,
    source_code_link_view: "https://videochat-three.vercel.app/",
    source_code_link_github: "https://github.com/mohanadhassan1/videochat",
  },
  {
    name: "Jumia Clone",
    description:
      "An e-commerce platform replicating Jumia, built with ReactJS and Redux Toolkit, styled with TailwindCSS, and powered by NodeJS and MongoDB for efficient and scalable backend support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-500",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "text-gray-400",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "auth",
        color: "text-red-700",
      },
    ],
    image: jumia,
    source_code_link_view: "https://jumia-main.vercel.app/",
    source_code_link_github: "https://github.com/mohanadhassan1/jumiaClone",
  },
  {
    name: "Task Management",
    description:
      "A task management web application using NextJS and NestJS, backed by MongoDB for data storage, and featuring Material UI for a sleek and responsive user interface.",
    tags: [
      {
        name: "next",
        color: "text-white",
      },
      {
        name: "nest",
        color: "text-red-700",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "blue-text-gradient",
      },
    ],
    image: taskManagement,
    source_code_link_view: "https://taskmanagement-nextjs.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/cool_code_frontend",
  },
  {
    name: "Click Shop",
    description:
      "An online shopping platform built with Angular TS and Bootstrap, offering a responsive and user-friendly interface for a seamless shopping experience.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-violet-500",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: clickShop,
    source_code_link_view:
      "https://mohanadhassan-angular-clickshop.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/Angular_Click_Shop",
  },
  {
    name: "TED Talks",
    description:
      "A clone of the TED website using Bootstrap for responsive design, providing a platform for users to browse and view a collection of talks and presentations.",
    tags: [
      {
        name: "bootstrap",
        color: "text-violet-500",
      },
    ],
    image: tedClone,
    source_code_link_view: "https://mohanadhassan-tedx.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/TED-Responsive-Web-Design",
  },
  {
    name: "Shopify E-Commerce",
    description:
      "A shopping platform developed using Vanilla JavaScript, HTML5, and CSS3, providing a fundamental yet effective e-commerce experience for users.",
    tags: [
      {
        name: "vanilla_javascript",
        color: "orange-text-gradient",
      },
    ],
    image: shopify_ecommerce,
    source_code_link_view:
      "https://mohanadhassan-shopify-native-js.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/Native-E-commerce",
  },
];

// "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",

// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",

// "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",

export { services, technologies, experiences, testimonials, projects };
