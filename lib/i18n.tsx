"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 * Updated for Jeshiko J (DevOps Engineer & Cloud Architect).
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "DevOps Engineer & Cloud Architect",
    fr: "Ingénieur DevOps & Architecte Cloud",
  },
  "hero.h1a": { en: "Infrastructure that scales", fr: "Une infrastructure qui évolue" },
  "hero.h1aEm": { en: "automatically.", fr: "automatiquement." },
  "hero.h1b": { en: "Pipelines that", fr: "Des pipelines qui ne" },
  "hero.h1bEm": { en: "never fail.", fr: "faillissent jamais." },
  "hero.sub": {
    en: "Specializing in AWS infrastructure automation, CI/CD pipeline design, Docker containerization, Kubernetes, and System Reliability Engineering — ensuring 100% data integrity and zero downtime.",
    fr: "Spécialisé dans l'automatisation d'infrastructure AWS, les pipelines CI/CD, la conteneurisation Docker, Kubernetes et le SRE — garantissant 100% d'intégrité et zéro indisponibilité.",
  },
  "hero.cta1": { en: "View My Projects", fr: "Voir mes projets" },
  "hero.cta2": { en: "See My Journey", fr: "Voir mon parcours" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Key Cloud Projects", fr: "Projets Cloud Clés" },
  "stat.years": { en: "B.E. Graduate Year", fr: "Année de Diplôme" },
  "stat.countries": { en: "Core Certifications", fr: "Certifications Clés" },
  "stat.satisfaction": { en: "Pipeline Success Rate", fr: "Taux de Succès CI/CD" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About Me", fr: "À propos" },
  "about.h2a": { en: "Reliability is how I design —", fr: "La fiabilité guide ma conception —" },
  "about.h2b": { en: "automation is how I", fr: "l'automatisation me permet de" },
  "about.h2Em": { en: "scale", fr: "passer à l'échelle" },
  "about.h2c": { en: "it.", fr: "." },
  "about.m1": {
    en: "Slashed software deployment overhead through Jenkins automation",
    fr: "Temps de déploiement logiciel réduit via l'automatisation Jenkins",
  },
  "about.m2": {
    en: "API response latency optimization utilizing serverless computing",
    fr: "Optimisation de latence API grâce au serverless et requêtes SQL",
  },
  "about.m3": {
    en: "Environment-specific deployment bugs eliminated via Docker",
    fr: "Bugs de déploiement éliminés via la conteneurisation Docker",
  },
  "about.m4": {
    en: "Data integrity maintained across payment and database transactions",
    fr: "Intégrité des données garantie sur les transactions de paiement",
  },
  "about.b1Title": { en: "Computer Science Foundations", fr: "Fondations en Informatique" },
  "about.b1Text": {
    en: "Bachelor of Engineering (B.E.) in Computer Science & Engineering from Bethlahem Institute of Engineering, Karungal. Mastered core systems engineering, Linux administration, database design, and network protocols.",
    fr: "Diplôme B.E. en Computer Science à Bethlahem Institute of Engineering, Karungal. Maîtrise de l'administration Linux, des bases de données et des systèmes.",
  },
  "about.b2Title": { en: "Web Architecture & UX Standards", fr: "Architecture Web & Ergonomie" },
  "about.b2Text": {
    en: "Engineered responsive web applications at NoviTech R&D Pvt. Ltd., enforcing strict WCAG accessibility compliance and optimizing frontend DOM performance.",
    fr: "Développement d'applications web réactives chez NoviTech R&D avec respect des normes d'accessibilité WCAG.",
  },
  "about.b3Title": { en: "AWS Cloud & AI Deployments", fr: "Cloud AWS & Déploiements IA" },
  "about.b3Text": {
    en: "Orchestrated AI application infrastructure at Crescent Infotech on AWS EC2, implementing granular IAM policies, Security Groups, and VPC network segmentation to reduce overhead by 30%.",
    fr: "Orchestration d'infrastructure IA chez Crescent Infotech sur AWS EC2 avec rôles IAM et segmentation VPC, réduisant les coûts de 30%.",
  },
  "about.b4Title": { en: "DevOps & Systems Engineering", fr: "Ingénierie DevOps & Systèmes" },
  "about.b4Text": {
    en: "IBM DevOps certified. Designing automated Jenkins master-slave CI/CD pipelines, Docker containerization, Kubernetes cluster management, and Terraform Infrastructure-as-Code.",
    fr: "Certifié IBM DevOps. Conception de pipelines Jenkins, conteneurisation Docker, Kubernetes et Terraform.",
  },
  "about.philoTitle": { en: "Engineering Core Principles", fr: "Principes d'Ingénierie" },
  "about.p1": { en: "Automation over manual deployment steps", fr: "L'automatisation avant tout" },
  "about.p2": { en: "Infrastructure as Code (Terraform & Ansible)", fr: "Infrastructure en tant que code" },
  "about.p3": { en: "Zero-downtime releases & 99.9% uptime", fr: "Déploiements sans interruption" },
  "about.p4": { en: "Granular IAM security & VPC isolation", fr: "Sécurité IAM & Isolation VPC" },
  "about.p5": { en: "Containerization parity with Docker & K8s", fr: "Conteneurisation Docker & K8s" },
  "about.edu": {
    en: "Bachelor of Engineering (B.E.) in Computer Science & Engineering · Bethlahem Institute of Engineering, Karungal · Graduating May 2025 · Cloud Computing · Database Systems · Linux Administration · Software Engineering",
    fr: "Diplôme d'Ingénieur (B.E.) en Computer Science & Engineering · Bethlahem Institute of Engineering, Karungal · Mai 2025 · Cloud Computing · Systèmes de BD · Administration Linux",
  },
  "about.cta": { en: "Explore My Projects", fr: "Découvrir mes projets" },

  /* ---------------- journey ---------------- */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From Computer Science fundamentals to high-scale AWS Cloud Architecture, Terraform, and automated CI/CD workflows.",
    fr: "Des fondamentaux de l'informatique à l'architecture cloud AWS, Terraform et pipelines CI/CD automatisés.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit & Stack", fr: "Outils & Stack" },
  "stack.h2": { en: "My Cloud & DevOps", fr: "Ma Stack Cloud &" },
  "stack.h2Em": { en: "Stack.", fr: "DevOps." },
  "stack.lede": {
    en: "The technologies I use to automate infrastructure, construct zero-downtime CI/CD pipelines, containerize microservices, and ensure system reliability.",
    fr: "Les technologies utilisées pour automatiser l'infrastructure, construire des pipelines CI/CD zéro-downtime et conteneuriser les microservices.",
  },
  "stack.count": { en: "technologies", fr: "technologies" },
  "stack.disciplines": { en: "categories", fr: "catégories" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Infrastructure Projects", fr: "Projets Cloud Sélectionnés" },
  "work.h2a": { en: "Cloud architecture &", fr: "Architecture cloud &" },
  "work.h2b": { en: "automated", fr: "pipelines" },
  "work.h2Em": { en: "pipelines.", fr: "automatisés." },
  "work.lede": {
    en: "AWS infrastructure-as-code, serverless ordering platforms, and master-slave CI/CD pipelines — engineered for maximum uptime and security.",
    fr: "Infrastructure-as-code AWS, plateformes serverless et pipelines CI/CD master-slave — conçus pour une disponibilité maximale.",
  },
  "work.open": { en: "Open project details", fr: "Voir les détails du projet" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I engineered", fr: "Là où j'ai développé mes" },
  "exp.h2Em": { en: "systems.", fr: "compétences." },
  "exp.worked": { en: "Key Responsibilities", fr: "Responsabilités clés" },
  "exp.impact": { en: "Impact & Outcome", fr: "Impact & Résultats" },
  "exp.tools": { en: "Technologies Used", fr: "Technologies utilisées" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Certifications", fr: "Certifications" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Professional certifications across DevOps, AWS Cloud Architecture, Python Full Stack, AI Training, UI/UX, and Data Science.",
    fr: "Certifications professionnelles en DevOps, Cloud AWS, Python Full Stack, IA et Data Science.",
  },
  "cert.introNote": {
    en: "Six certifications · IBM Developer Network, E-Max Education, Crescent Infotech & VEI Technologies.",
    fr: "Six certifications · IBM Developer Network, E-Max Education, Crescent Infotech & VEI Technologies.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Certifications", fr: "Certifications" },
  "cert.lede": {
    en: "Official certifications and technical credentials earned throughout my engineering journey.",
    fr: "Certifications officielles et titres techniques obtenus au cours de mon parcours d'ingénieur.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
  "cert.issuerTBC": { en: "Issuer", fr: "Organisme" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential verified", fr: "Justificatif vérifié" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "Verified", fr: "Vérifié" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verified Credential ✓", fr: "Justificatif Vérifié ✓" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- gallery ---------------- */
  "gallery.eyebrow": { en: "Engineering & Life", fr: "Ingénierie & Vie" },
  "gallery.h2a": { en: "Moments behind", fr: "Moments derrière" },
  "gallery.h2Em": { en: "the terminal", fr: "le terminal" },
  "gallery.lede": {
    en: "Capturing moments from hackathons, cloud labs, team collaborations, and engineering milestones.",
    fr: "Instants capturés lors de hackathons, labs cloud et étapes d'ingénierie.",
  },
  "gallery.alt": {
    en: "A moment behind the terminal",
    fr: "Un moment derrière le terminal",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to view gallery", fr: "Faites défiler pour voir la galerie" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let’s build scalable", fr: "Construisons des systèmes" },
  "connect.h2Em": { en: "systems.", fr: "scalables." },
  "connect.lede": {
    en: "I’m open to DevOps Engineer, Cloud Architect, and SRE roles, infrastructure consulting, and collaboration — let's connect and build something resilient.",
    fr: "Je suis disponible pour des opportunités en DevOps, Cloud Architecture, SRE et conseil en infrastructure.",
  },
  "connect.cta": { en: "Send an Email", fr: "Envoyer un e-mail" },
  "connect.credit": { en: "Designed & Built for Jeshiko J by", fr: "Conçu & développé pour Jeshiko J par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to projects", fr: "← Retour aux projets" },
  "case.kicker": { en: "Project Architecture", fr: "Architecture du Projet" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "GitHub Repository", fr: "Dépôt GitHub" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Challenge", fr: "Le défi" },
  "case.process": { en: "Engineering Process", fr: "Démarche d'Ingénierie" },
  "case.decisions": { en: "Architectural Decisions", fr: "Décisions d'Architecture" },
  "case.outcome": { en: "Results & Impact", fr: "Résultats & Impact" },
  "case.reflection": { en: "Key Takeaways", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
