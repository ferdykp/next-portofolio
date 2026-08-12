"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portofolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const modalRef = useRef();

  const projects = [
    {
      title: "Enterprise Operational Expense & Reimbursement Claim System",
      category: "web",
      description:
        "Full-stack expense claim platform featuring a multi-tier digital signature approval workflow (Staff to Manager), real-time AJAX server-side search with debounce, automatic PDF slicing/stitching via Ghostscript & FPDI, and exportable financial summaries in PDF & Excel.",
      images: [
        "/assets/portofolio/reimbursement/1.png",
        "/assets/portofolio/reimbursement/2.png",
      ],
      field: "Full-Stack Web Engineer",
      techstack: [
        "Laravel 11",
        "Tailwind CSS",
        "AJAX & JS",
        "FPDI & Ghostscript",
        "MySQL",
        "Blade",
      ],
    },
    {
      title: "GrowPOS — SaaS Multi-Tenant Point of Sale with AI Advisor",
      category: "web",
      description:
        "Full-stack multi-tenant SaaS POS for retail & F&B businesses. Real-time checkout, dynamic QRIS Midtrans payments, cash audit shifts, automated profit/COGS reports, tenant wallet payout workflows, and Google Gemini AI integration for business advisory and inventory insights.",
      images: [
        "/assets/portofolio/growpos/1.png",
        "/assets/portofolio/growpos/2.png",
        "/assets/portofolio/growpos/3.png",
        "/assets/portofolio/growpos/4.png",
        "/assets/portofolio/growpos/5.png",
      ],
      field: "Full-Stack SaaS Web Engineer",
      techstack: [
        "Laravel 11",
        "Tailwind CSS",
        "Google Gemini AI",
        "Midtrans Core API",
        "MySQL",
        "Alpine.js",
      ],
    },
    {
      title: "Extreme Project — Premium Coil & Cotton Landing Page",
      category: "web",
      description:
        "High-performance e-commerce landing page for a premium handcrafted coil artisan brand. Custom design system, adaptive grid product arrays, and rich hover interaction. Optimized with Next.js metadata, semantic OpenGraph cards, localized SEO, and dynamic sitemaps.",
      images: [
        "/assets/portofolio/extreme/1.png",
        "/assets/portofolio/extreme/2.png",
        "/assets/portofolio/extreme/3.png",
        "/assets/portofolio/extreme/4.png",
        "/assets/portofolio/extreme/5.png",
        "/assets/portofolio/extreme/6.png",
      ],
      field: "Web Front-End Developer",
      techstack: [
        "Next.js",
        "Tailwind CSS v4",
        "SEO Optimization",
        "JavaScript",
        "Semantic HTML",
      ],
    },
    {
      title: "Proactive Smart Home Server Infrastructure",
      category: "devops",
      description:
        "Transformed a legacy laptop into a high-availability 24/7 home server. Custom zero-dependency multi-threaded Python bot integrated with PM2 and Linux Kernel ACPI streaming live telemetry (RAM, SSD, power draw, CPU temp) to Telegram with proactive alerts.",
      images: [
        "/assets/portofolio/homeserver/bot-tele.jpeg",
        "/assets/portofolio/homeserver/terminal.png",
      ],
      field: "DevOps & Automation",
      techstack: [
        "Linux Kernel",
        "Python",
        "PM2",
        "Telegram API",
        "Bash Scripting",
        "Ubuntu Server",
      ],
    },
    {
      title: "Smart Public Street Light",
      category: "iot",
      description:
        "IoT street lights using Arduino Nano, LDR, RTC, and PZEM. Telemetry data sent via LoRa (Antares, HTTP POST) to a centralized PHP web dashboard.",
      images: [
        "/assets/portofolio/tsa/tsa.jpeg",
        "/assets/portofolio/tsa/tsa1.jpeg",
        "/assets/portofolio/tsa/tsa2.jpeg",
      ],
      field: "IoT & Web Developer",
      techstack: ["HTML", "PHP", "JavaScript", "HTTP POST", "LoRa", "Arduino"],
    },
    {
      title: "IoT-Based Security and Monitoring System with GPS Tracking",
      category: "iot",
      description:
        "Anti-theft motorcycle security system using NodeMCU ESP8266 and a gyroscope sensor, integrated with an Android app functioning as a remote and live GPS tracker.",
      images: [
        "/assets/portofolio/pkm/pkm.jpeg",
        "/assets/portofolio/pkm/pkm1.jpeg",
        "/assets/portofolio/pkm/pkm2.jpeg",
      ],
      field: "IoT & Mobile Developer",
      techstack: ["NodeMCU", "C++", "Android Dev", "GPS API", "PHP"],
    },
    {
      title: "Smart Dairy Delivery of Fresh Milk",
      category: "iot",
      description:
        "End-to-end system monitoring milk distribution from farm to factory — tracking quality integrity via cold-chain sensors and optimizing delivery with GPS tracking.",
      images: [
        "/assets/portofolio/advantech/advan1.png",
        "/assets/portofolio/advantech/Picture1.jpg",
        "/assets/portofolio/advantech/Picture4.jpg",
        "/assets/portofolio/advantech/Picture3.jpg",
      ],
      field: "IoT Logistics Solution",
      techstack: ["Vue.js", "Node.js", "Advantech Hardware", "GPS Integration"],
    },
    {
      title:
        "Hybrid HOG-SVM Method for Drifting Victim Image Detection in Rivers",
      category: "ai",
      description:
        "Computer vision research using UAV drones to detect drowning/drifting victims. Hybrid HOG feature extraction, Linear SVM achieving 93.88% accuracy (Precision 91.5%, Recall 97.06%), and Non-Maximum Suppression across 9,957 images.",
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
      techstack: [
        "Python",
        "HOG Descriptor",
        "Linear SVM (SVC)",
        "Non-Maximum Suppression",
        "OpenCV",
        "Scikit-Learn",
      ],
    },
    {
      title:
        "Drone-Based River Victim Search & Evacuation Platform for BASARNAS",
      category: "web",
      description:
        "Collaborative rescue monitoring platform integrating drone imagery and YOLOv5 detection to assist BASARNAS operations. 89.85% accuracy, EXIF GPS metadata extraction for geolocation, interactive Leaflet maps, and a Flask back-end.",
      images: [
        "/assets/portofolio/sarteam/sarteam1.png",
        "/assets/portofolio/sarteam/sarteam2.png",
        "/assets/portofolio/sarteam/1.png",
        "/assets/portofolio/sarteam/2.png",
        "/assets/portofolio/sarteam/3.png",
      ],
      field: "Full-Stack Web & AI Integrator",
      techstack: [
        "Python",
        "Flask Framework",
        "YOLOv5 Deep Learning",
        "Leaflet.js / Maps API",
        "EXIF Metadata",
        "OpenCV",
      ],
    },
    {
      title:
        "IoT-Based Intelligent System for Laboratory Human Presence Detection",
      category: "smart-system",
      description:
        "IoT web-enabled lab security system using ESP32-CAM and PIR sensors. Infrared detection up to 7m (~2.13s response), image capture transmission in ~0.22s, and a web dashboard for live activity logging.",
      images: [
        "/assets/portofolio/penlok/penlok1.png",
        "/assets/portofolio/penlok/penlok2.jpeg",
        "/assets/portofolio/penlok/penlok3.jpeg",
      ],
      field: "IoT & Embedded System Engineer",
      techstack: [
        "ESP32-CAM",
        "PIR Sensor (HC-SR501)",
        "FT232RL (TTL)",
        "EasyEDA (PCB Design)",
        "IoT Web Dashboard",
        "Database System",
      ],
    },
  ];

  const filterCategories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Apps" },
    { id: "devops", label: "DevOps" },
    { id: "iot", label: "IoT & Embedded" },
    { id: "ai", label: "AI & Vision" },
    { id: "smart-system", label: "Smart Systems" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveProject(null);
      }
    }
    if (activeProject)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeProject]);

  return (
    <section
      id="portofolio"
      className="py-24 md:py-28 border-b border-[var(--border)]"
    >
      <style jsx global>{`
        .portfolio-swiper .swiper-button-next,
        .portfolio-swiper .swiper-button-prev {
          color: var(--text);
          background: var(--bg-elevated);
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          border: 1px solid var(--border);
        }
        .portfolio-swiper .swiper-button-next:hover,
        .portfolio-swiper .swiper-button-prev:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .portfolio-swiper .swiper-button-next::after,
        .portfolio-swiper .swiper-button-prev::after {
          font-size: 12px;
          font-weight: bold;
        }
        .portfolio-swiper .swiper-pagination-bullet {
          background: var(--text-muted);
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: var(--accent);
        }
      `}</style>

      <SectionLabel index={2} title="Selected Work" />

      <Reveal className="max-w-2xl mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-4">
          End-to-end systems, from research to production.
        </h2>
        <p className="text-[var(--text-muted)]">
          A collection of web applications and hardware/IoT integrations built
          from concept through deployment.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="flex flex-wrap items-center gap-2 mb-12">
        {filterCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md border transition-colors duration-200 ${
              selectedCategory === category.id
                ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--bg)] font-semibold"
                : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-muted)]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </Reveal>

      <motion.div
        layout
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              key={project.title}
              className="group bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/50 transition-colors duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 bg-[var(--bg-elevated)] overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  className="w-full h-full portfolio-swiper"
                >
                  {project.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative w-full h-full cursor-pointer p-2"
                        onClick={() => setActiveProject(project)}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <span className="absolute top-3 left-3 text-[10px] bg-[var(--bg-elevated)] text-[var(--accent-2)] font-mono px-2 py-1 border border-[var(--border)] rounded-md z-10 pointer-events-none uppercase tracking-wide">
                  {project.field}
                </span>
              </div>

              <div
                onClick={() => setActiveProject(project)}
                className="p-5 flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.techstack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono px-2 py-0.5 rounded border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techstack.length > 3 && (
                    <span className="text-[11px] text-[var(--text-muted)] font-mono px-1 py-0.5">
                      +{project.techstack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-[var(--surface)] border border-[var(--border)] max-w-4xl w-full rounded-xl overflow-hidden relative shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-[var(--bg-elevated)] hover:border-[var(--accent)] text-[var(--text)] w-8 h-8 rounded-full flex items-center justify-center z-10 border border-[var(--border)] text-lg"
              >
                &times;
              </button>

              <div className="p-6">
                <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">
                  {activeProject.field}
                </span>
                <h3 className="font-display text-2xl font-bold text-[var(--text)] mb-4 mt-1">
                  {activeProject.title}
                </h3>

                <div className="w-full h-64 sm:h-96 relative bg-[var(--bg-elevated)] rounded-lg overflow-hidden mb-6 border border-[var(--border)]">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="w-full h-full portfolio-swiper"
                  >
                    {activeProject.images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full p-2">
                          <Image
                            src={src}
                            alt={`${activeProject.title} view ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <h4 className="text-[var(--text)] font-semibold mb-2 text-xs uppercase tracking-widest font-mono">
                  Description
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <h4 className="text-[var(--text)] font-semibold mb-2 text-xs uppercase tracking-widest font-mono">
                  Technologies deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[var(--bg-elevated)] text-[var(--accent)] font-mono px-3 py-1 rounded-md border border-[var(--border)]"
                    >
                      {tech}
                    </span>
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
