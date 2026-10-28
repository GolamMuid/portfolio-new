export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Next.js & AI" | "Enterprise";
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  backendGithubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}

export interface Skill {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const personalInfo = {
  name: "Md Golam Muid Talukder",
  shortName: "Golam Muid",
  tagline: "Full Stack Web Developer & Software Engineer",
  location: "Belfast, United Kingdom",
  origin: "Dhaka, Bangladesh",
  status: "Open to Full-Time / Contract Roles in the UK & Globally",
  email: "golammuid@gmail.com",
  phone: "+44 07736 429047",
  resumePath: "/Md-Golam-Muid-Talukder-Resume.pdf",
  github: "https://github.com/GolamMuid",
  linkedin: "https://www.linkedin.com/in/golam-muid/",
  summary: `I am a skilled Full Stack Web Developer with 2.5 years of professional experience specializing in modern JavaScript/TypeScript ecosystems, MERN stack, and Next.js. I have a proven track record of architecting robust enterprise websites, modernizing legacy systems, and leading collaborative engineering teams. Currently pursuing an MSc in Computer Science at Ulster University in Belfast, UK, I combine deep academic foundations with hands-on production engineering to deliver scalable, user-centric software solutions.`,
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "ATI Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 - Dec 2024",
    type: "Full-time",
    description: [
      "Led and mentored a cross-functional team of 7 MERN stack developers, improving code quality, Agile sprint workflows and modern development standards.",
      "Architected and deployed high-performance official web platforms for Drug International Limited (leading pharmaceutical company) and KYAMCH Bio-research Services.",
      "Acted as the primary spokesperson and lead developer for a government-funded web development initiative.",
      "Modernized multiple legacy Oracle Forms applications to scalable MERN architectures, drastically cutting page latency, improving UX and simplifying maintainability.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Team Leadership",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "ATI Limited",
    location: "Dhaka, Bangladesh",
    period: "Jun 2022 - Dec 2022",
    type: "Full-time",
    description: [
      "Collaborated with senior software architects to implement intuitive, accessible user interfaces and a modular library of reusable components.",
      "Conducted extensive debugging and frontend profiling, resolving UI bottlenecks, decreasing asset payload sizes and optimizing page load speeds.",
      "Participated in daily standups, code reviews and cross-team design syncs.",
    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Sass",
      "REST APIs",
      "Git",
    ],
  },
];

export const projects: Project[] = [
  // {
  //   id: "edu-ai",
  //   title: "Edu AI",
  //   category: "Next.js & AI",
  //   shortDescription:
  //     "An interactive educational web platform for creating and conversing with AI companions in real time.",
  //   fullDescription:
  //     "Edu AI is a cutting-edge web application enabling learners to create, customize, and converse with specialized AI companions across various academic and professional domains. Integrated with low-latency voice AI, secure user authentication, and persistent cloud storage.",
  //   technologies: [
  //     "TypeScript",
  //     "Next.js",
  //     "Supabase",
  //     "Vapi AI",
  //     "Clerk Auth",
  //     "Tailwind CSS",
  //     "shadcn/ui",
  //   ],
  //   liveUrl: "https://edu-ai-solution.vercel.app/",
  //   githubUrl: "https://github.com/GolamMuid/Edu-AI",
  //   featured: true,
  //   highlights: [
  //     "Real-time voice conversational interaction powered by Vapi AI",
  //     "Robust user authentication and account management with Clerk",
  //     "Cloud database and asset storage leveraging Supabase",
  //     "Modern component architecture with shadcn/ui and responsive design",
  //   ],
  // },
  {
    id: "drug-international",
    title: "Drug International Limited",
    category: "Enterprise",
    shortDescription:
      "Official corporate web portal for one of Bangladesh's leading pharmaceutical manufacturers.",
    fullDescription:
      "Architected and delivered the modern official web presence for Drug International Limited. The platform features an extensive searchable pharmaceutical product repository, corporate news, career portals, and regulatory information built with production-grade performance.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn/ui",
      "REST APIs",
    ],
    liveUrl: "https://www.drug-international.com/",
    githubUrl: "https://github.com/GolamMuid/drug-international",
    featured: true,
    highlights: [
      "Enterprise-grade performance with Next.js App Router and SSR",
      "Fluid interactive transitions powered by Framer Motion",
      "Searchable product catalog with detailed medication monographs",
      "Mobile-optimized responsive design conforming to international accessibility benchmarks",
    ],
  },
  {
    id: "kyamch-bio-research",
    title: "KYAMCH Bio-research Services",
    category: "Enterprise",
    shortDescription:
      "Official digital platform for Khwaja Yunus Ali Medical College & Hospital Bio-research Services.",
    fullDescription:
      "Designed and built the digital portal for KYAMCH Bio-research Services, one of Bangladesh's foremost clinical and bio-research organizations. Features comprehensive research service overviews, scientific trial guidelines, and secure laboratory contact workflows.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://www.kyabrs.org/",
    githubUrl: "https://github.com/GolamMuid/kyabrs-2.0",
    featured: true,
    highlights: [
      "Custom medical and scientific iconography with clean hierarchy",
      "Search-engine optimized structure for clinical research discovery",
      "Smooth micro-interactions and interactive service cards",
      "Zero-downtime deployment with high availability",
    ],
  },
  {
    id: "dev-train",
    title: "DevTrain Bootcamp Platform",
    category: "Full Stack",
    shortDescription:
      "A full-featured MERN stack bootcamp marketplace and course management ecosystem.",
    fullDescription:
      "DevTrain is a comprehensive online bootcamp platform where prospective students can browse, filter, enroll in coding bootcamps, and publish authenticated reviews. Instructors and publishers can create, manage, and price their bootcamps through dedicated dashboard portals.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "Material UI",
      "Redux Toolkit",
      "JWT Auth",
    ],
    liveUrl: "https://dev-train.vercel.app/",
    githubUrl: "https://github.com/GolamMuid/DevTrain",
    backendGithubUrl: "https://github.com/GolamMuid/DevTrain-server",
    featured: true,
    highlights: [
      "Complete REST API with JWT authentication and role-based permissions",
      "Interactive course management and bootcamp review rating system",
      "Geo-location bootcamp searching with Mapbox & Geocoder integration",
      "Comprehensive CRUD operations with MongoDB aggregation pipelines",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description:
      "Modern component-driven SPAs, reactive interfaces, and scalable UI architectures.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Framer Motion", highlight: true },
      { name: "Redux Toolkit", highlight: true },
      { name: "shadcn/ui & Radix UI", highlight: true },
      { name: "Material UI (MUI)", highlight: true },
      { name: "HTML5 & Modern CSS", highlight: true },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    description:
      "Robust server runtimes, RESTful microservices, and secure authentication systems.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "NestJS", highlight: true },
      { name: "RESTful API Architecture", highlight: true },
      { name: "JWT Authentication", highlight: true },
      { name: "Clerk Auth", highlight: true },
      { name: "Python", highlight: true },
    ],
  },
  {
    title: "Databases & ORM",
    icon: "Database",
    description:
      "Relational & NoSQL persistence, data modeling, schema design, and indexing.",
    skills: [
      { name: "MongoDB & Mongoose", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "Schema Design & Modeling", highlight: true },
      { name: "Query Optimization", highlight: true },
    ],
  },
  {
    title: "DevOps & Cloud Tooling",
    icon: "Cpu",
    description:
      "Containerization, automated build workflows, developer tooling, and cloud platforms.",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Docker", highlight: true },
      { name: "CI/CD & Automated Pipelines", highlight: true },
      { name: "Vercel Deployments", highlight: true },
      { name: "Linux / Bash", highlight: true },
      { name: "Postman & API Testing", highlight: true },
      { name: "Vapi AI Voice Integration", highlight: true },
    ],
  },
];

export const educationList: Education[] = [
  {
    degree: "MSc in Computer Science",
    institution: "Ulster University",
    location: "Belfast, United Kingdom",
    year: "2026",
    details:
      "Focusing on advanced computing methodologies, software architecture and distributed systems in the UK.",
  },
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    year: "202",
    details:
      "Rigorous coursework in Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks and Machine Learning.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Safiuddin Sarker Academy & College",
    location: "Dhaka, Bangladesh",
    year: "2015",
    details: "Science major",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Safiuddin Sarker Academy & College",
    location: "Dhaka, Bangladesh",
    year: "2013",
    details: "Science concentration.",
  },
];

export const languages = [
  {
    name: "English",
    proficiency: "Professional Working Proficiency (IELTS 7.5)",
  },
  { name: "Bangla", proficiency: "Native Speaker" },
];
