import { meta, shopify, etna, lomi, clinic, storewise, oworkers } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  netcore,
  angular,
  bootstrap
} from "../assets/icons";
export const skills = [
  // Frontend
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  // Backend
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: netcore,
    name: "ASP.Netcore",
    type: "Backend",
  },

  // Database
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  // Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];


export const experiences = [
  {
    title: "Etna",
    company_name: "Angular/ASP.Netcore",
    icon: etna,
    iconBg: "#00c9c3 ",
    date: "Feb 2024 - Now",
    points: [
      "Designing and consuming RESTful APIs by creating endpoints in ASP.NET Core within a robust three-layer architecture (data access, business logic, and presentation).",
      "Creating and customizing Razor Pages to build dynamic and responsive views for the admin dashboard..",
      "Connecting Angular frontend with the backend services through efficient HTTP communication.",
      "Implementing responsive design principles to ensure seamless functionality across various devices and screen sizes.",
      "Debugging, and optimizing applications for performance and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Freelance",
    company_name: "React",
    icon: clinic,
    iconBg: "#414141 ",
    date: "Dec 2024 - now",
    points: [
      "Developing and connecting React frontend with the backend services through efficient HTTP communication.",
      "Implementing responsive design principles to ensure seamless functionality across various devices and screen sizes.",
      "Debugging, and optimizing applications for performance and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Storewise",
    company_name: "React Native",
    icon: storewise,
    iconBg: "#ffffff ",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Developed complex animations to enhance the user experience in mobile applications.",
      "Worked on a mobile e-commerce application, integrating the frontend with backend services using efficient HTTP communication.",
      "Implemented responsive design principles to ensure seamless functionality across various devices and screen sizes.",
      "Debugged and optimized applications to enhance performance and ensure smooth cross-platform compatibility.",
    ],
  },
  {
    title: "0Workers",
    company_name: "NextJS / MongoDB / Redis",
    icon: oworkers,
    iconBg: "#a2d2ff ",
    date: "Sep 2023 - Oct 2023",
    points: [
        "Worked as a fullstack developer using Next.js for the frontend and Express.js with MongoDB for the backend.",
        "Designed and implemented RESTful APIs to handle efficient data communication between the client and server.",
        "Ensured database performance and optimized queries with Redis.",
    ],
  },
  {
    title: "Lomi",
    company_name: "Angular/Ionic",
    icon: lomi,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
