import { Project, Skill, SocialLink, Education } from "../types";
import oneImage from "../assets/one.png";
import twoImage from "../assets/two.png";
import threeImage from "../assets/three.png";

import oip from "../assets/OIP.webp";
import shopora from "../assets/shopora.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution for cloths selling, payment processing, and admin dashboard.",
    image: oneImage,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "NodeMailer",
      "Tailwind",
      "javascript",
      "Supabase",
    ],
    githubUrl: "https://github.com/Hiroshan01/",

    liveUrl: "https://uh-brand-frontend.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Traveling Web App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and project tracking.",
    image: twoImage,
    technologies: ["React", "Express", "MongoDB", "Sendgrid", "Tailwind"],
    githubUrl: "https://github.com/Hiroshan01/",
    liveUrl: "https://www.traveldream.life/",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Beautiful weather application with forecasts, interactive maps, and location-based alerts.",
    image: threeImage,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Hiroshan01/Portfolio-New-Mode",
    liveUrl: "https://portfolio-new-mode.vercel.app/",
    featured: false,
  },
  {
    id: "4",
    title: "AI-Powered-Phishing-Email-Detection",
    description:
      "AI-powered phishing email detection system using machine learning and deep learning algorithms .",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Flask", "Python", "Bootstrap", "MySQL"],
    githubUrl:
      "https://github.com/Hiroshan01/AI-Powered-Phishing-Email-Detection-",
    // liveUrl: "https://example.com",
    featured: true,
  },
  // {
  //   id: "5",
  //   title: "Youtube Analytics System",
  //   description:
  //     "Youtube analytics system to track video performance, audience engagement, and channel growth metrics.",
  //   image: fourImage,
  //   technologies: ["ReactCorUI", "DRF(Django)", "Knox", "MySQL"],
  //   githubUrl: "",
  //   featured: false,
  //   warning: "Private Repository(POS)",
  // },
  {
    id: "6",
    title: "Malicious-URL-Detection",
    description: "Malicious URL Detection  using machine learning algorithms.",
    image: oip,
    technologies: ["Python", "Colab", "Machine Learning"],
    githubUrl: "https://github.com/Hiroshan01/Malicious-URL-Detection",

    featured: false,
  },
  {
    id: "7",
    title: "DJANGO E-Commerce Web Application",
    description: "Malicious URL Detection  using machine learning algorithms.",
    image: shopora,
    technologies: [
      "Python",
      "Django",
      "HTML",
      "Alpine.js",
      "Tailwind",
      "Poetry",
      "Vanilla JS",
      "Postgresql",
    ],
    githubUrl:
      "https://github.com/Hiroshan01/SHOPORA-E-Commerce-Fullstack-Web-App-Django",
    warning: "Development Stage",
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "CoreUI", category: "frontend" },
  { name: "Django", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "npm", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel, ", category: "tools" },
  { name: "Netlify", category: "tools" },
  { name: "PythonAnywhere", category: "tools" },
  { name: "DigitalOcean", category: "tools" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Hiroshan01", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hiroshan-madushanka-a5a436282/",
    icon: "Linkedin",
  },
  { name: "Twitter", url: "#", icon: "Twitter" },
  { name: "Email", url: "mailto:pmhiroshan@gmail.com", icon: "Mail" },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Horizon Campus",
    degree:
      "Bachelor of Information Technology (Honours) in Networking and Mobile Computing",
    field: "Computer Science and Engineering",
    startDate: "2021",
    endDate: "2025",
    description:
      "Specialized in software engineering and web development, essential concepts like networking principles, wireless technology, mobile app creation.",
    grade: "3.35 GPA",
  },
  {
    id: "2",
    institution: "Univerity of moratuwa",
    certificate: "Web Development",
    field: "Software Development",
    startDate: "2023",
    description:
      "Completed a comprehensive web development course covering front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and database management.",
    grade: "Best",
  },
];
