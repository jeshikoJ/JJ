/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Jeshiko J",
  jobTitle: "DevOps Engineer & Cloud Architect",
  email: "chandranjeshiko@gmail.com",
  phone: "+91-7395881571",
  location: "Kanyakumari, Tamil Nadu, India",
  /* profile URLs as supplied */
  sameAs: [
    "https://www.linkedin.com/in/jeshiko-j/",
    "https://github.com/jeshikoJ",
    "https://jeshikoJ.github.io",
  ],
};
