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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
      "Developing and maintaining web applications using React.js and other related technologies.",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://react-movie-time-gamma.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/React_Movie_Time",
  },
  {
    name: "Admin Dashboard",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://admin-dashboard-pi-seven.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/admin-dashboard",
  },
  {
    name: "Handle Products",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://handle-products.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/handle_products",
  },
  {
    name: "Blog Web Application",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://blog-application-tawny.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/blog-application",
  },
  {
    name: "Video Chat",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://videochat-three.vercel.app/",
    source_code_link_github: "https://github.com/mohanadhassan1/videochat",
  },
  {
    name: "Jumia Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://jumia-main.vercel.app/",
    source_code_link_github: "https://github.com/mohanadhassan1/jumiaClone",
  },
  {
    name: "Task Management",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view: "https://taskmanagement-nextjs.vercel.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/cool_code_frontend",
  },
  {
    name: "Click Shop",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link_view:
      "https://mohanadhassan-angular-clickshop.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/Angular_Click_Shop",
  },
  {
    name: "TED Talks",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "bootstrap",
        color: "text-violet-500",
      },
    ],
    image: carrent,
    source_code_link_view: "https://mohanadhassan-tedx.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/TED-Responsive-Web-Design",
  },
  {
    name: "Shopify E-Commerce",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "vanilla_javascript",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link_view:
      "https://mohanadhassan-shopify-native-js.netlify.app/",
    source_code_link_github:
      "https://github.com/mohanadhassan1/Native-E-commerce",
  },
  
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
