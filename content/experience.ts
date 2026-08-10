/* Professional experience — Jeshiko J (DevOps Engineer & Cloud Architect) */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "DevOps & Cloud Engineering",
    role: "DevOps Engineer & Cloud Architect",
    type: "Full-time",
    location: "Chennai, Tamil Nadu",
    period: "Dec – Jun 2026",
    summary:
      "Architecting automated multi-cloud infrastructures on AWS, driving zero-downtime CI/CD pipelines via Docker, Kubernetes, Jenkins, Terraform, and Ansible.",
    achievements: [
      "Engineered automated Jenkins master-slave CI/CD pipelines reducing software release cycles by 70%",
      "Automated cloud infrastructure provisioning using Terraform and Ansible across AWS EC2, VPC, IAM, and Security Groups",
      "Containerized microservices with Docker and Kubernetes, maintaining 99.9% system availability and zero-downtime deployments",
    ],
    outcome: "70% faster deployments & 99.9% cloud infrastructure uptime",
    skills: ["AWS", "DevOps", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Python", "Linux"],
    color: "#141414",
    fg: "light",
    fr: {
      role: "Ingénieur DevOps & Architecte Cloud",
      summary:
        "Conception d'infrastructures multi-cloud automatisées sur AWS, pipelines CI/CD zéro indisponibilité avec Docker, Kubernetes, Jenkins, Terraform et Ansible.",
      outcome: "Déploiements 70% plus rapides & 99,9% de disponibilité cloud",
      achievements: [
        "Ingénierie de pipelines CI/CD Jenkins master-slave réduisant les cycles de livraison de 70%",
        "Automatisation de l'infrastructure cloud avec Terraform et Ansible sur AWS EC2, VPC et IAM",
        "Conteneurisation de microservices avec Docker et Kubernetes garantissant 99,9% de disponibilité",
      ],
    },
  },
  {
    company: "Crescent Infotech",
    role: "Artificial Intelligence Intern",
    type: "Internship",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2024 – Sep 2024",
    summary:
      "Architected and executed SDLC from requirements gathering to production deployment on AWS EC2, achieving a 30% reduction in operational overhead.",
    achievements: [
      "Architected and executed full SDLC from requirements gathering to production cloud deployment on AWS EC2",
      "Engineered resilient database schemas ensuring 100% data integrity and optimized CRUD operations",
      "Orchestrated secure cloud infrastructure using granular IAM roles, Security Groups, and network VPC segmentation",
    ],
    outcome: "30% reduction in operational overhead & 100% data integrity",
    skills: ["AWS EC2", "IAM Roles", "VPC Segmentation", "Security Groups", "Database Design", "SDLC"],
    color: "#FF9900",
    fg: "dark",
    fr: {
      role: "Stagiaire en Intelligence Artificielle & Cloud",
      summary:
        "Architecture et exécution du SDLC de la collecte des besoins au déploiement de production sur AWS EC2, réduisant les coûts opérationnels de 30%.",
      outcome: "Réduction de 30% du surcoût opérationnel & 100% d'intégrité de données",
      achievements: [
        "Conception et exécution du SDLC complet jusqu'au déploiement de production sur AWS EC2",
        "Ingénierie de schémas de base de données résilients garantissant 100% d'intégrité des données",
        "Orchestration d'infrastructure cloud sécurisée avec rôles IAM, Security Groups et segmentation VPC",
      ],
    },
  },
  {
    company: "NoviTech R&D Pvt. Ltd.",
    role: "Web Development Intern",
    type: "Internship",
    location: "Tamil Nadu, India",
    period: "Jun 2023 – Jul 2023",
    summary:
      "Engineered 5+ fully responsive web applications utilizing HTML5, CSS3, and JavaScript frameworks in strict alignment with WCAG accessibility standards.",
    achievements: [
      "Engineered 5+ fully responsive web applications utilizing modern HTML5, CSS3, and JavaScript frameworks",
      "Enforced WCAG accessibility standards across all user interfaces, ensuring high usability across devices",
      "Optimized frontend asset delivery and DOM performance for rapid mobile and desktop page renders",
    ],
    outcome: "5+ WCAG-compliant responsive web applications delivered",
    skills: ["HTML5", "CSS3", "JavaScript", "WCAG Standards", "Responsive Web", "UI Design"],
    color: "#0072E3",
    fg: "light",
    fr: {
      role: "Stagiaire Développement Web",
      summary:
        "Ingénierie de 5+ applications web réactives utilisant HTML5, CSS3 et JavaScript en conformité stricte avec les normes d'accessibilité WCAG.",
      outcome: "5+ applications web réactives conformes WCAG livrées",
      achievements: [
        "Développement de 5+ applications web réactives avec HTML5, CSS3 et frameworks JS",
        "Application des normes d'accessibilité WCAG garantissant une ergonomie optimale",
        "Optimisation du rendu frontend et des temps de chargement multi-appareils",
      ],
    },
  },
];
