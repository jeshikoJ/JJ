"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, EASE } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import VelocityMarquee from "@/components/ui/VelocityMarquee";
import styles from "./About.module.css";
import { useLang } from "@/lib/i18n";

const MARQUEE_ROWS = [
  {
    items: [
      "AWS Cloud Architecture",
      "DevOps Engineering",
      "CI/CD Automation",
      "Terraform & IaC",
      "Docker Containerization",
      "Kubernetes & Orchestration",
      "System Reliability (SRE)",
    ],
    velocity: 34,
  },
  {
    items: [
      "Linux Administration",
      "Jenkins Master-Slave",
      "GitHub Actions",
      "Ansible Configuration",
      "Cloud Security & IAM",
      "VPC Segmentation",
      "PostgreSQL Replication",
      "Python & Django",
      "Node.js Serverless",
    ],
    velocity: -28,
    outline: true,
  },
];

const METRICS = [
  { value: "70%", count: 70, suffix: "%", key: "about.m1" },
  { value: "40%", count: 40, suffix: "%", key: "about.m2" },
  { value: "60%", count: 60, suffix: "%", key: "about.m3" },
  { value: "100%", count: 100, suffix: "%", key: "about.m4" },
];

const BEATS = [
  { n: "01", titleKey: "about.b1Title", textKey: "about.b1Text" },
  { n: "02", titleKey: "about.b2Title", textKey: "about.b2Text" },
  { n: "03", titleKey: "about.b3Title", textKey: "about.b3Text" },
  { n: "04", titleKey: "about.b4Title", textKey: "about.b4Text" },
];

const PRINCIPLES = [
  "about.p1",
  "about.p2",
  "about.p3",
  "about.p4",
  "about.p5",
];

export default function About() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const reveal = (targets: gsap.TweenTarget, trigger: Element, vars: gsap.TweenVars = {}) =>
        gsap.from(targets, {
          y: 44,
          autoAlpha: 0,
          duration: 1,
          ease: EASE.outExpo,
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: { trigger, start: "top 82%" },
          ...vars,
        });

      reveal([`.${styles.eyebrow}`, `.${styles.h2}`], el.querySelector(`.${styles.header}`)!);

      /* beats reveal */
      const beatsEl = el.querySelector(`.${styles.beats}`);
      if (beatsEl) {
        reveal(`.${styles.beat}`, beatsEl, { stagger: 0.12 });
      }

      /* side cards reveal */
      const sideEl = el.querySelector(`.${styles.sideCol}`);
      if (sideEl) {
        reveal(`.${styles.sideCard}`, sideEl, { stagger: 0.14 });
      }

      /* metrics: reveal + count-up */
      const band = el.querySelector(`.${styles.metrics}`);
      if (band) {
        reveal(`.${styles.metric}`, band, { stagger: 0.09 });
        ScrollTrigger.create({
          trigger: band,
          start: "top 84%",
          once: true,
          onEnter: () => {
            gsap.utils.toArray<HTMLElement>("[data-metric-count]").forEach((numEl) => {
              const target = Number(numEl.dataset.metricCount);
              const obj = { v: 0 };
              numEl.textContent = "0";
              gsap.to(obj, {
                v: target,
                duration: 1.4,
                ease: "power2.out",
                onUpdate: () => {
                  numEl.textContent = String(Math.round(obj.v));
                },
              });
            });
          },
        });
      }

      reveal(
        [`.${styles.edu}`, `.${styles.next}`],
        el.querySelector(`.${styles.edu}`)!,
        { stagger: 0.12 }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.about} id="about" ref={root}>
      <VelocityMarquee rows={MARQUEE_ROWS} />

      <div className={styles.wrap}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span>01</span> {t("about.eyebrow")}
          </p>
          <h2 className={styles.h2}>
            {t("about.h2a")}<br />
            {t("about.h2b")} <em className={styles.serif}>{t("about.h2Em")}</em>{t("about.h2c")}
          </h2>
        </div>

        {/* Detailed storytelling & bio grid */}
        <div className={styles.grid}>
          <div className={styles.beats}>
            {BEATS.map((b) => (
              <div className={styles.beat} key={b.n}>
                <span className={styles.beatN}>{b.n}</span>
                <div>
                  <h3>{t(b.titleKey)}</h3>
                  <p>{t(b.textKey)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sideCol}>
            <div className={`${styles.sideCard} ${styles.imgCard}`}>
              <img
                src="/images/portrait.jpg"
                alt="Jeshiko J — DevOps Engineer & Cloud Architect"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius)" }}
              />
            </div>

            <div className={`${styles.sideCard} ${styles.philoCard}`}>
              <h4>{t("about.philoTitle")}</h4>
              <ul>
                {PRINCIPLES.map((pKey) => (
                  <li key={pKey}>
                    <span>✓</span> {t(pKey)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.metrics}>
          {METRICS.map((m) => (
            <div className={styles.metric} key={m.key}>
              <div className={styles.metricNum}>
                {m.count !== null ? (
                  <>
                    {"prefix" in m && m.prefix}
                    <span data-metric-count={m.count}>{m.count}</span>
                    <i>{m.suffix}</i>
                  </>
                ) : (
                  <span className={styles.metricStatic}>{m.value}</span>
                )}
              </div>
              <div className={styles.metricLabel}>{t(m.key)}</div>
            </div>
          ))}
        </div>

        <p className={styles.edu}>
          {t("about.edu")}
        </p>

        <div className={styles.next}>
          <Button href="#work" variant="dark" size="sm" arrow>
            {t("about.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
