import { Github, Linkedin, Mail, Twitter, Code2, Database, Layout, Server, Terminal, Smartphone, Globe } from "lucide-react";

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const heroData = {
    name: "Antigravity User",
    role: ["Full Stack Developer", "UI/UX Engineer", "Software Architect"],
    tagline: "Building digital experiences that defy expectations.",
    subtext: "I craft accessible, pixel-perfect, and performant web applications with a focus on premium aesthetics and seamless user interactions.",
};

export const skillsData = [
    {
        category: "Frontend",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    },
    {
        category: "Backend",
        icon: Server,
        skills: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "Docker", "AWS"],
    },
    {
        category: "Tools & DevOps",
        icon: Terminal,
        skills: ["Git", "CI/CD", "Jest", "Figma", "Linux", "Vercel"],
    },
];

export const experienceData = [
    {
        company: "MADHUBEN AND BHANUBHAI PATEL WOMEN INSTITUTE OF ENGINEERING FOR STUDIES AND RESEARCH IN COMPUTER AND COMMUNICATION TECHNOLOGY-063",
        role: "Bachelor's Degree Student - Information Technology",
        period: "Aug 2025 - Aug 2027",
        description: "Currently pursuing Bachelor's degree in Information Technology with a strong foundation in software development and hands-on experience in full-stack technologies. Building scalable and user-centric software solutions. Actively working on projects including HR management systems (DayFlow) and cybersecurity tools (CyberPulse-Sniffer). Focusing on mastering web development, problem-solving, and preparing for roles in top tech companies.",
        skills: ["React.js", "JavaScript", "Python", "Machine Learning", "Tailwind CSS", "MongoDB", "Git", "Web Development", "Network Security"],
    },
    {
        company: "Southern Alberta Institute of Technology (SAIT)",
        role: "Diploma Student - Software Development",
        period: "Jan 2024 - Aug 2025",
        description: "Completed Diploma of Education in software development, gaining global exposure and enhancing skills in Object-Oriented Programming (OOP), User Experience (UX), and effective presentations. Dropped the course and returned to India to continue education at home institution.",
        skills: ["MongoDB", "Object-Oriented Programming (OOP)", "React.js", "User Experience (UX)", "Android Development", "iOS Development", "Mobile Application Development", "Public Speaking", "Presentation Skills", "Communication", "PHP", "SQL", "Data Management"],
    },
];

export const projectsData = [
    {
        title: "DayFlow",
        description: "A modern, premium Human Resource Management System built with React and Tailwind CSS. It streamlines HR operations including employee management, attendance tracking, leave management, and payroll visibility with a sleek, dark-themed interface.",
        tags: ["React", "Tailwind CSS", "JavaScript", "CSS3"],
        image: "/dayflow.png",
        links: {
            demo: "https://github.com/apurvapatel27/DayFlow",
            github: "https://github.com/apurvapatel27/DayFlow",
        },
    },
    {
        title: "CyberPulse-Sniffer",
        description: "A production-grade Intrusion Detection System (IDS) powered by Machine Learning. This advanced security tool analyzes network traffic patterns to detect and prevent potential cyber threats in real-time.",
        tags: ["Python", "Machine Learning", "Network Security", "Data Analysis"],
        image: "/cyberpulse.png",
        links: {
            demo: "https://github.com/apurvapatel27/CyberPulse-Sniffer",
            github: "https://github.com/apurvapatel27/CyberPulse-Sniffer",
        },
    },
];
