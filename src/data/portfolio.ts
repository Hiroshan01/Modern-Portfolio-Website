import { Project, Skill, SocialLink, Education } from "../types";
import oneImage from "../assets/one.png";
import twoImage from "../assets/two.png";
import threeImage from "../assets/three.png";

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
      "Analytics dashboard for social media metrics with data visualization and reporting features.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Flusk", "Python", "Boostrap", "Mysql"],
    githubUrl:
      "https://github.com/Hiroshan01/AI-Powered-Phishing-Email-Detection-",
    // liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio CMS",
    description:
      "Content management system for portfolio websites with drag-and-drop builder and template system.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
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
    grade: "3A passes",
  },
];
