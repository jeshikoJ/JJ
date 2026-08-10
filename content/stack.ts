/* DevOps, Cloud & Development Stack for Jeshiko J */

export type Tool = {
  name: string;
  group: "Cloud & DevOps" | "CI/CD & IaC" | "Monitoring & DB" | "Development";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Cloud & DevOps — */
  { name: "AWS", group: "Cloud & DevOps", mono: "AWS", color: "#FF9900" },
  { name: "Docker", group: "Cloud & DevOps", mono: "DK", color: "#2496ED" },
  { name: "Kubernetes", group: "Cloud & DevOps", mono: "K8s", color: "#326CE5" },
  { name: "Linux", group: "Cloud & DevOps", mono: "Lx", color: "#FCC624" },

  /* — CI/CD & IaC — */
  { name: "Jenkins", group: "CI/CD & IaC", mono: "JK", color: "#D24939" },
  { name: "GitHub Actions", group: "CI/CD & IaC", mono: "GA", color: "#2088FF" },
  { name: "Terraform", group: "CI/CD & IaC", mono: "TF", color: "#844FBA" },
  { name: "Ansible", group: "CI/CD & IaC", mono: "An", color: "#EE0000" },

  /* — Monitoring & DB — */
  { name: "Prometheus", group: "Monitoring & DB", mono: "Pr", color: "#E6522C" },
  { name: "Grafana", group: "Monitoring & DB", mono: "Gr", color: "#F46800" },
  { name: "CloudWatch", group: "Monitoring & DB", mono: "CW", color: "#FF9900" },
  { name: "PostgreSQL", group: "Monitoring & DB", mono: "PG", color: "#4169E1" },
  { name: "MongoDB", group: "Monitoring & DB", mono: "MDB", color: "#47A248" },

  /* — Development — */
  { name: "Python", group: "Development", mono: "Py", color: "#3776AB" },
  { name: "Django", group: "Development", mono: "Dj", color: "#092E20" },
  { name: "Node.js", group: "Development", mono: "Node", color: "#339933" },
  { name: "JavaScript", group: "Development", mono: "JS", color: "#F7DF1E" },
  { name: "React", group: "Development", mono: "Re", color: "#61DAFB" },
];
