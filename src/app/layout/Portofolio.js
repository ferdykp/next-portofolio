"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    title: "Veterinary Personal Branding & Headless Publishing Platform",
    shortTitle: "Veterinary Publishing Platform",
    category: "web",
    description:
      "A Laravel CMS and Next.js publishing website for clinical articles, media, professional content, and public-facing editorial pages.",
    images: [
      "/assets/portofolio/veterinary/1.png",
      "/assets/portofolio/veterinary/2.png",
      "/assets/portofolio/veterinary/3.png",
      "/assets/portofolio/veterinary/4.png",
      "/assets/portofolio/veterinary/5.png",
      "/assets/portofolio/veterinary/6.png",
    ],
    field: "Full-Stack Web Developer",
    techstack: ["Laravel", "Next.js", "Tailwind CSS", "Alpine.js", "MySQL", "REST API"],
  },
  {
    title: "Enterprise Operational Expense & Reimbursement Claim System",
    shortTitle: "Expense & Reimbursement System",
    category: "web",
    description:
      "An internal expense platform with multi-level approvals, digital signatures, document processing, and PDF/Excel reporting.",
    images: [
      "/assets/portofolio/reimbursement/1.png",
      "/assets/portofolio/reimbursement/2.png",
    ],
    field: "Full-Stack Web Engineer",
    techstack: ["Laravel 11", "Tailwind CSS", "AJAX", "FPDI", "Ghostscript", "MySQL"],
  },
  {
    title: "GrowPOS — SaaS Multi-Tenant Point of Sale with AI Advisor",
    shortTitle: "GrowPOS",
    category: "web",
    description:
      "A multi-tenant POS product with checkout, QRIS payments, shift audits, business reports, wallet workflows, and AI-assisted insights.",
    images: [
      "/assets/portofolio/growpos/1.png",
      "/assets/portofolio/growpos/2.png",
      "/assets/portofolio/growpos/3.png",
      "/assets/portofolio/growpos/4.png",
      "/assets/portofolio/growpos/5.png",
    ],
    field: "Full-Stack SaaS Web Engineer",
    techstack: ["Laravel 11", "Tailwind CSS", "Gemini AI", "Midtrans", "MySQL", "Alpine.js"],
  },
  {
    title: "Extreme Project — Premium Coil & Cotton Landing Page",
    shortTitle: "Extreme Project",
    category: "web",
    description:
      "A high-performance Next.js landing experience with a custom visual system, responsive product grids, SEO, and refined interaction.",
    images: [
      "/assets/portofolio/extreme/1.png",
      "/assets/portofolio/extreme/2.png",
      "/assets/portofolio/extreme/3.png",
      "/assets/portofolio/extreme/4.png",
      "/assets/portofolio/extreme/5.png",
      "/assets/portofolio/extreme/6.png",
    ],
    field: "Front-End Developer",
    techstack: ["Next.js", "Tailwind CSS", "JavaScript", "SEO", "Semantic HTML"],
  },
  {
    title: "Proactive Smart Home Server Infrastructure",
    shortTitle: "Home Server Infrastructure",
    category: "devops",
    description:
      "A 24/7 Linux home server with Python monitoring, PM2 process management, system telemetry, and proactive Telegram alerts.",
    images: [
      "/assets/portofolio/homeserver/bot-tele.jpeg",
      "/assets/portofolio/homeserver/terminal.png",
    ],
    field: "DevOps & Automation",
    techstack: ["Ubuntu Server", "Python", "PM2", "Telegram API", "Bash", "Linux"],
  },
  {
    title: "Smart Public Street Light",
    shortTitle: "Smart Street Light",
    category: "iot",
    description:
      "An IoT street-light system using Arduino, LoRa, power monitoring, and a centralized web dashboard.",
    images: [
      "/assets/portofolio/tsa/tsa.jpeg",
      "/assets/portofolio/tsa/tsa1.jpeg",
      "/assets/portofolio/tsa/tsa2.jpeg",
    ],
    field: "IoT & Web Developer",
    techstack: ["Arduino", "LoRa", "PHP", "JavaScript", "HTTP POST"],
  },
  {
    title: "IoT-Based Security and Monitoring System with GPS Tracking",
    shortTitle: "Motorcycle Security & GPS",
    category: "iot",
    description:
      "A connected motorcycle security system with NodeMCU, motion sensing, Android remote control, and live GPS tracking.",
    images: [
      "/assets/portofolio/pkm/pkm.jpeg",
      "/assets/portofolio/pkm/pkm1.jpeg",
      "/assets/portofolio/pkm/pkm2.jpeg",
    ],
    field: "IoT & Mobile Developer",
    techstack: ["NodeMCU", "C++", "Android", "GPS API", "PHP"],
  },
  {
    title: "Smart Dairy Delivery of Fresh Milk",
    shortTitle: "Smart Dairy Monitoring",
    category: "iot",
    description:
      "A cold-chain monitoring concept for milk distribution with connected sensors, GPS tracking, and web-based operational visibility.",
    images: [
      "/assets/portofolio/advantech/advan1.png",
      "/assets/portofolio/advantech/Picture1.jpg",
      "/assets/portofolio/advantech/Picture4.jpg",
      "/assets/portofolio/advantech/Picture3.jpg",
    ],
    field: "IoT Logistics Solution",
    techstack: ["Vue.js", "Node.js", "Advantech", "GPS", "Modbus"],
  },
  {
    title: "Hybrid HOG-SVM Method for Drifting Victim Image Detection in Rivers",
    shortTitle: "River Victim Detection Research",
    category: "ai",
    description:
      "Computer-vision research for UAV-based river victim detection using HOG features, Linear SVM, and non-maximum suppression.",
    images: [
      "/assets/portofolio/ta/1.png",
      "/assets/portofolio/ta/2.png",
      "/assets/portofolio/ta/3.png",
      "/assets/portofolio/ta/4.png",
      "/assets/portofolio/ta/5.png",
      "/assets/portofolio/ta/6.png",
      "/assets/portofolio/ta/ta1.jpeg",
      "/assets/portofolio/ta/ta2.jpg",
      "/assets/portofolio/ta/ta3.jpeg",
    ],
    field: "AI & Computer Vision Researcher",
    techstack: ["Python", "HOG", "Linear SVM", "OpenCV", "Scikit-Learn"],
  },
  {
    title: "Drone-Based River Victim Search & Evacuation Platform for BASARNAS",
    shortTitle: "BASARNAS Rescue Platform",
    category: "ai",
    description:
      "A rescue monitoring platform combining drone imagery, YOLOv5 detection, EXIF geolocation, maps, and a Flask back end.",
    images: [
      "/assets/portofolio/sarteam/sarteam1.png",
      "/assets/portofolio/sarteam/sarteam2.png",
      "/assets/portofolio/sarteam/1.png",
      "/assets/portofolio/sarteam/2.png",
      "/assets/portofolio/sarteam/3.png",
    ],
    field: "Full-Stack Web & AI Integrator",
    techstack: ["Python", "Flask", "YOLOv5", "Leaflet", "EXIF", "OpenCV"],
  },
  {
    title: "IoT-Based Intelligent System for Laboratory Human Presence Detection",
    shortTitle: "Lab Presence Detection",
    category: "iot",
    description:
      "A laboratory monitoring system using ESP32-CAM, PIR sensing, image transmission, and a web activity dashboard.",
    images: [
      "/assets/portofolio/penlok/penlok1.png",
      "/assets/portofolio/penlok/penlok2.jpeg",
      "/assets/portofolio/penlok/penlok3.jpeg",
    ],
    field: "IoT & Embedded System Engineer",
    techstack: ["ESP32-CAM", "PIR Sensor", "C++", "EasyEDA", "Web Dashboard"],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "devops", label: "Infrastructure" },
  { id: "iot", label: "IoT" },
  { id: "ai", label: "AI / Vision" },
];

export default function Portofolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(
    () => projects.filter((project) => selectedCategory === "all" || project.category === selectedCategory),
    [selectedCategory],
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeProject]);

  const selectFilter = (id) => {
    setSelectedCategory(id);
    setShowAll(false);
  };

  return (
    <section id="portofolio" className="py-24 md:py-36 border-b border-[var(--border)]">
      <SectionLabel title="Selected work" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
        <Reveal className="lg:col-span-8">
          <h2 className="font-display text-[clamp(3rem,6.3vw,7rem)] font-medium tracking-[-.065em] leading-[.88]">
            Products and systems,
            <span className="block text-[var(--text-muted)]">built for real use.</span>
          </h2>
        </Reveal>
        <Reveal direction="down" delay={0.07} className="lg:col-span-4 lg:self-end">
          <p className="text-base md:text-lg leading-relaxed text-[var(--text-muted)] max-w-md">
            A focused selection of web, infrastructure, IoT and computer-vision work.
          </p>
        </Reveal>
      </div>

      <Reveal className="flex gap-2.5 md:gap-3 overflow-x-auto scrollbar-none pb-10 md:pb-14">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => selectFilter(filter.id)}
            className={`shrink-0 rounded-full px-4 py-2 border text-[10px] font-mono uppercase tracking-[.1em] transition-all duration-300 ${
              selectedCategory === filter.id
                ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-muted)]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </Reveal>

      <motion.div layout className="border-t border-[var(--border)]">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: index % 2 ? -24 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.72, ease }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 py-8 md:py-12 lg:py-14 border-b border-[var(--border)] items-center"
            >
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="lg:col-span-7 block w-full text-left"
              >
                <div className="project-media relative aspect-[16/10] overflow-hidden border border-[var(--border)]">
                  <div className="absolute inset-[4%] md:inset-[3.5%] bg-[var(--bg-elevated)] overflow-hidden soft-shadow">
                    <Image
                      src={project.images[0]}
                      alt={`${project.shortTitle} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.022]"
                    />
                  </div>
                </div>
              </button>

              <div className="lg:col-span-5 lg:pl-2">
                <p className="rev-label text-[var(--accent)]">{project.field}</p>
                <h3 className="font-display text-3xl md:text-4xl xl:text-5xl tracking-[-.055em] leading-[.98] mt-3 text-balance">
                  {project.shortTitle}
                </h3>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--text-muted)] max-w-xl">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.techstack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono uppercase tracking-[.08em] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="editorial-link mt-8 text-[11px] font-medium"
                >
                  View project
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length > 5 && (
        <div className="flex justify-center pt-10 md:pt-14">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="rounded-full border border-[var(--border)] px-6 py-3 text-[10px] font-mono uppercase tracking-[.12em] hover:bg-[var(--text)] hover:text-[var(--bg)] hover:border-[var(--text)] transition-all duration-300"
          >
            {showAll ? "Show less" : `Show all projects`}
          </button>
        </div>
      )}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setActiveProject(null);
            }}
          >
            <motion.div
              className="w-full max-h-[94svh] overflow-y-auto bg-[var(--bg)] border-t border-[var(--border)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="sticky top-0 z-20 bg-[var(--bg)]/92 backdrop-blur-xl border-b border-[var(--border)]">
                <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 h-16 md:h-[72px] flex items-center justify-between">
                  <span className="rev-label">Project detail</span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="text-[10px] font-mono uppercase tracking-[.14em] hover:text-[var(--accent)] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-14 mb-10 md:mb-16">
                  <div className="lg:col-span-8">
                    <p className="rev-label text-[var(--accent)]">{activeProject.field}</p>
                    <h3 className="font-display text-[clamp(2.8rem,6vw,7rem)] font-medium tracking-[-.065em] leading-[.9] mt-4 text-balance">
                      {activeProject.shortTitle}
                    </h3>
                  </div>
                  <div className="lg:col-span-4 lg:self-end">
                    <p className="text-base md:text-lg leading-relaxed text-[var(--text-muted)]">
                      {activeProject.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {activeProject.techstack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono uppercase tracking-[.08em] text-[var(--text-muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {activeProject.images.map((image, index) => (
                    <motion.div
                      key={`${activeProject.title}-${image}`}
                      initial={{ opacity: 0, y: index % 2 ? -22 : 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.7, delay: Math.min(index * 0.035, 0.18), ease }}
                      className={`project-media relative overflow-hidden border border-[var(--border)] ${
                        index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${activeProject.shortTitle} screen`}
                        fill
                        sizes={index === 0 ? "100vw" : "50vw"}
                        className="object-contain p-[2.5%]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
