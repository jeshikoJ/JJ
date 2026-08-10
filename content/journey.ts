/* THE JOURNEY — Jeshiko J's career & academic timeline */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "foundations",
    year: "2021 – 2025",
    title: "B.E. Computer Science & Engineering",
    place: "Bethlahem Institute of Engineering, Karungal · Kanyakumari",
    story:
      "Enrolled in Bachelor of Engineering (B.E.) in Computer Science & Engineering at Bethlahem Institute of Engineering, Karungal. Built strong fundamentals in Database Management Systems, Operating Systems, Computer Networks, Data Structures, and Cloud Computing.",
    bridge: "Core engineering fundamentals laid the foundation for practical software development and cloud architecture.",
    fr: {
      title: "B.E. Informatique & Génie Logiciel",
      place: "Bethlahem Institute of Engineering, Karungal · Kanyakumari",
      story:
        "Admission au cursus Bachelor of Engineering (B.E.) en Computer Science à Bethlahem Institute of Engineering, Karungal. Étude des bases de données, réseaux informatiques et systèmes d'exploitation.",
      bridge: "Les bases fondamentales ont préparé le terrain pour le développement web et le cloud architecture.",
    },
  },
  {
    id: "web-internship",
    year: "Jun 2023 – Jul 2023",
    title: "Web Development Intern",
    place: "NoviTech R&D Pvt. Ltd.",
    story:
      "Completed intensive Web Development Internship at NoviTech R&D Pvt. Ltd. Engineered responsive, user-centric web applications using HTML5, CSS3, and JavaScript while adhering to modern UI/UX and web standards.",
    bridge: "Gaining hands-on web development experience highlighted the importance of automated backend and cloud hosting.",
    fr: {
      title: "Stagiaire en Développement Web",
      place: "NoviTech R&D Pvt. Ltd.",
      story:
        "Stage intensif en développement web chez NoviTech R&D. Développement d'applications web réactives avec HTML5, CSS3 et JavaScript.",
      bridge: "La pratique du développement web a démontré l'importance de l'hébergement cloud et de l'automatisation.",
    },
  },
  {
    id: "ai-cloud",
    year: "Aug 2024 – Sep 2024",
    title: "Artificial Intelligence & Cloud Intern",
    place: "Crescent Infotech · Chennai",
    story:
      "Artificial Intelligence Intern at Crescent Infotech. Worked across the full Software Development Life Cycle (SDLC), deploying AI applications on AWS EC2, configuring Security Groups, IAM roles, and VPC network isolation to optimize cloud reliability and operational costs by 30%.",
    bridge: "Direct experience with AWS infrastructure cemented cloud deployment and DevOps as core specializations.",
    fr: {
      title: "Stagiaire Intelligence Artificielle & Cloud",
      place: "Crescent Infotech · Chennai",
      story:
        "Stage en IA chez Crescent Infotech. Déploiement d'applications IA sur AWS EC2 avec configuration de groupes de sécurité, rôles IAM et règles réseau VPC, réduisant les coûts d'exploitation de 30%.",
      bridge: "L'expérience pratique AWS a confirmé l'ingénierie DevOps et le Cloud comme domaines d'expertise.",
    },
  },
  {
    id: "devops-engineer",
    year: "Dec – Jun 2026",
    title: "DevOps Engineer & Cloud Architect",
    place: "DevOps & Cloud Systems Architecture",
    story:
      "Architected automated AWS cloud infrastructure and end-to-end CI/CD automation pipelines using Docker, Kubernetes, Jenkins, Terraform, and Ansible to maintain 99.9% uptime and 70% faster software release cycles.",
    bridge: "Scaling enterprise production workloads with zero-downtime releases and immutable cloud architecture.",
    fr: {
      title: "Ingénieur DevOps & Architecte Cloud",
      place: "Architecture DevOps & Systèmes Cloud",
      story:
        "Conception d'infrastructures cloud AWS automatisées et pipelines CI/CD de bout en bout avec Docker, Kubernetes, Jenkins, Terraform et Ansible pour maintenir 99,9% de disponibilité.",
      bridge: "Passage à l'échelle des charges de travail de production d'entreprise.",
    },
  },
];
