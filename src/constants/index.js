import {
  mobile,
  backend,
  creator,
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
  anchor,
  git,
  figma,
  docker,
  python,
  solidity,
  rust,
  nextjs,
  meta,
  starbucks,
  fortune,
  binance,
  dissect,
  tesla,
  shopify,
  carrent,
  zkode,
  smartreviewhub,
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
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
    name: "Rust",
    icon: rust,
  },
  {
    name: "Anchor",
    icon: anchor,
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
    name: "python",
    icon: python,
  },
  {
    name: "solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Research and Development Intern",
    company_name: "Fortune Electric",
    icon: fortune,
    iconBg: "#383E56",
    date: "Feb 2020 - June 2020",
    points: [
      "Using Autocad or Solidwork to design the components of the power plants.",
      "Organize and aggregate customers' information into the cloud with python and excel.",
      "Communicating with clients from different countries.",
    ],
  },
  {
    title: "Prepared Angel(Volunteer)",
    company_name: "Binance",
    icon: binance,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2023",
    points: [
      "Help maintain the Discord community and hold regular events.",
      "Write Discord bots to save human time reading information.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Dissect(NFTFI)",
    icon: dissect,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Help Help build the webpage of the applicaiton.",
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
    name: "ZKode",
    description:
      "Anonymous Github made with zero-knowledge unirep.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: zkode,
    source_code_link: "https://github.com/",
  },
  {
    name: "SmartReviewHub",
    description:
      "A blockchain google map platform, providing a more transparent and better place to share your experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: smartreviewhub,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };