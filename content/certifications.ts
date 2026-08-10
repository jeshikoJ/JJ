/* Credentials — professional certification records for Jeshiko J */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "1.1",
    issuer: "IBM Developer Network / SLA Institute",
    title: "DevOps Fundamentals",
    year: "2024",
    credentialId: "Course CD0115EN",
    verified: true,
    skills: [
      "CI/CD Pipeline Automation",
      "Containerization & Docker",
      "Infrastructure Automation & SRE",
    ],
    metric: { value: "CD0115EN", label: "IBM Course ID" },
    fr: {
      title: "Fondamentaux DevOps",
      skills: [
        "Automation de Pipeline CI/CD",
        "Conteneurisation & Docker",
        "Automation d'Infrastructure & SRE",
      ],
      metricLabel: "Code de cours IBM",
    },
  },
  {
    no: "1.2",
    issuer: "E-Max Education",
    title: "Python Full Stack Programming",
    year: "2024",
    credentialId: "Grade A+ (86%)",
    verified: true,
    skills: [
      "Django & Flask Web Frameworks",
      "Database Architecture & Query Optimization",
      "RESTful API Development & React Integration",
    ],
    metric: { value: "86%", label: "Grade A+ Score" },
    fr: {
      title: "Programmation Python Full Stack",
      skills: [
        "Frameworks Web Django & Flask",
        "Architecture de BD & Optimisation SQL",
        "Développement API REST & Intégration React",
      ],
      metricLabel: "Note obtenue A+",
    },
  },
  {
    no: "1.3",
    issuer: "Crescent Infotech",
    title: "Artificial Intelligence Training",
    year: "2024",
    credentialId: "AI-CRESCENT-2024",
    verified: true,
    skills: [
      "Machine Learning & SDLC Integration",
      "AWS Cloud Deployment for AI Models",
      "Database Schema Resiliency",
    ],
    metric: { value: "SDLC", label: "Cloud Deployment" },
    fr: {
      title: "Formation en Intelligence Artificielle",
      skills: [
        "Machine Learning & Intégration SDLC",
        "Déploiement Cloud AWS pour Modèles IA",
        "Résilience de Schémas de BD",
      ],
      metricLabel: "Déploiement Cloud",
    },
  },
  {
    no: "1.4",
    issuer: "Feather Softwares",
    title: "Interaction Design & Prototyping",
    year: "2023",
    credentialId: "FEATHER-ID-2023",
    verified: true,
    skills: [
      "User Interface Design & Wireframing",
      "Interactive Prototyping & Layouts",
      "UX Usability Principles",
    ],
    metric: { value: "UI/UX", label: "Design Systems" },
    fr: {
      title: "Design d'Interaction & Prototypage",
      skills: [
        "Design d'Interface Utilisateur & Wireframes",
        "Prototypage Interactif & Layouts",
        "Principes d'Ergonomie UX",
      ],
      metricLabel: "Systèmes de Design",
    },
  },
  {
    no: "1.5",
    issuer: "NoviTech R&D Pvt. Ltd.",
    title: "Web Development Internship Certification",
    year: "2023",
    credentialId: "NOVITECH-WD-2023",
    verified: true,
    skills: [
      "HTML5, CSS3 & JavaScript ES6+",
      "WCAG Web Accessibility Standards",
      "Cross-Browser Responsive Layouts",
    ],
    metric: { value: "5+ Apps", label: "Shipped Projects" },
    fr: {
      title: "Certification de Stage en Développement Web",
      skills: [
        "HTML5, CSS3 & JavaScript ES6+",
        "Normes d'Accessibilité Web WCAG",
        "Layouts Réactifs Multi-Navigateurs",
      ],
      metricLabel: "Projets Déployés",
    },
  },
  {
    no: "1.6",
    issuer: "VEI Technologies",
    title: "Data Science using Python",
    year: "2023",
    credentialId: "VEI-DS-2023",
    verified: true,
    skills: [
      "Data Analysis & Visualization",
      "NumPy, Pandas & Python Analytics",
      "Statistical Data Modeling",
    ],
    metric: { value: "Python", label: "Analytics Stack" },
    fr: {
      title: "Data Science avec Python",
      skills: [
        "Analyse & Visualisation de Données",
        "NumPy, Pandas & Analytics Python",
        "Modélisation Statistique",
      ],
      metricLabel: "Stack Analytics",
    },
  },
];
