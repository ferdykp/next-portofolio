"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

const experiences = [
  {
    company: "Nuctech Company Limited",
    role: "Software Engineer · Full-Stack",
    period: "May 2025 — Present",
    location: "Jakarta, Indonesia",
    current: true,
    bullets: [
      "Led full-stack development (Laravel, Tailwind CSS, JavaScript) for two production systems while serving as DevOps Engineer, coordinating a team of 3 developers from PRD through deployment and documentation.",
      "Built a Warehouse & Spare Part Management System supporting multi-branch operations, deployed across 9 cities in Indonesia.",
      "Developed an ERP system for E-Beam plant operations — customer/product intake, irradiation tracking, quality control, and automated document generation — currently supporting 3 client companies across 7 product types.",
      "Designed Role-Based Access Control for 5 user roles and built an Excel report export feature for management analysis.",
      "Configured and managed production VPS infrastructure from scratch using Ubuntu Server, Nginx, and Cloudflare Tunnel/Zero Trust.",
      "Authored User Manuals and Installation Guides adopted as the standard for Nuctech product implementation across multiple countries.",
      "Performed cross-team debugging with engineers from China for Cargo Scanner software, resolving IP and configuration issues from server to application level.",
      "Maintained FS6000 equipment and performed operator/Industrial PC backups using Symantec Ghost.",
      "Developed a Python application to automate data conversion into Excel reports, and resolved inter-server and Modbus protocol issues via Modscan.",
    ],
    tech: [
      "Laravel",
      "Tailwind CSS",
      "Ubuntu Server",
      "Nginx",
      "Docker",
      "Cloudflare Zero Trust",
      "Python",
      "Modbus TCP/IP",
    ],
  },
  {
    company: "PT Reka Inovasi Cerdas",
    role: "Software Engineer",
    period: "Nov 2024 — Apr 2025",
    location: "Mojokerto, Indonesia",
    bullets: [
      "Built a desktop electric-vehicle dashboard application in Qt Creator using QML and JavaScript, delivering a real-time driving interface for an in-house EV prototype.",
      "Implemented the MAVLink communication protocol on Ardurover firmware for a remote-controlled vehicle, handling the full data pipeline from a Matek F405 Wing microcontroller through to the dashboard.",
      "Deployed and operated the dashboard application on a Lichee Pi 4A running the Yocto Project's Poky distribution, driving a connected 1280×800 LCD display.",
      "Developed the company website for Innodrive.ai using the Quasar framework (TypeScript/Vue.js) with a Node.js backend, including automated order-confirmation email delivery.",
      "Designed and built a facial-recognition attendance system by integrating a facial-recognition library and model on a Lichee Pi 4A mini PC with a Runcam camera.",
      "Built the companion attendance dashboard — a web platform for ingesting attendance data and managing employee records — using Quasar (TypeScript/Vue.js) on the frontend with a Node.js and Express.js backend.",
    ],
    tech: [
      "Qt Creator / QML",
      "MAVLink",
      "Vue.js / Quasar",
      "Node.js",
      "Express.js",
      "Facial Recognition",
      "Yocto / Poky",
    ],
  },
  {
    company: "AirNav Juanda Surabaya",
    role: "Engineering Intern",
    period: "Feb 2023 — Jul 2023",
    location: "Surabaya, Indonesia",
    bullets: [
      "Performed daily meter readings for airport communication and monitoring equipment.",
      "Assisted with fiber optic troubleshooting and Instrument Landing System (ILS) calibration alongside a global flight inspection service provider.",
    ],
    tech: ["Fiber Optics", "ILS Calibration"],
  },
  {
    company: "InnoWork IoT Advantech",
    role: "IoT Program Participant",
    period: "May 2023 — Sep 2023",
    location: "Surabaya, Indonesia",
    bullets: [
      "Built IoT devices using NodeMCU and various sensors, programmed in C++.",
      "Programmed automated alerts via Telegram and displayed data on an Advantech SCADA dashboard using Modbus TCP/IP.",
    ],
    tech: ["NodeMCU", "C++", "Modbus TCP/IP", "SCADA"],
  },
  {
    company: "Talent Scout Academy",
    role: "Project Based Learning Participant",
    period: "Jul 2022 — Dec 2022",
    location: "Surabaya, Indonesia",
    bullets: [
      "Assembled IoT devices using Arduino Nano microcontrollers, sensors, and LoRa communication modules.",
      "Wrote C++ programs for IoT device-to-website communication via the HTTP POST protocol.",
      "Developed an IoT device monitoring website using PHP, HTML, CSS, and MySQL.",
    ],
    tech: ["Arduino Nano", "LoRa", "C++", "PHP", "MySQL"],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="experience"
      className="py-24 md:py-36 border-b border-[var(--border)]"
    >
      <SectionLabel title="Experience" />

      <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
        <h2 className="font-display text-[clamp(2.8rem,6vw,6.6rem)] font-medium tracking-[-.06em] leading-[.9] lg:col-span-8">
          Work across software,
          <span className="block text-[var(--text-muted)]">
            systems and infrastructure.
          </span>
        </h2>
        <p className="lg:col-span-4 lg:self-end text-base md:text-lg leading-relaxed text-[var(--text-muted)]">
          Selected roles that shaped how I build and ship production systems.
        </p>
      </Reveal>

      <div className="border-t border-[var(--border)]">
        {experiences.map((exp, index) => {
          const open = openIndex === index;

          return (
            <Reveal
              key={exp.company}
              delay={index * 0.035}
              direction={index % 2 ? "down" : "up"}
            >
              <article className="border-b border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                  className="group w-full text-left py-6 md:py-8"
                >
                  <div className="grid grid-cols-[1fr_auto] md:grid-cols-12 gap-3 md:gap-6 items-start">
                    <div className="md:col-span-4 flex items-start gap-3">
                      {exp.current && (
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                      )}
                      <div>
                        <h3 className="font-display text-xl md:text-2xl tracking-[-.04em] leading-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                          {exp.company}
                        </h3>
                        <p className="md:hidden mt-1 text-sm text-[var(--text-muted)]">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <p className="hidden md:block md:col-span-4 text-sm md:text-base text-[var(--text-muted)]">
                      {exp.role}
                    </p>

                    <div className="hidden md:block md:col-span-2">
                      <p className="text-[10px] font-mono uppercase tracking-[.1em]">
                        {exp.period}
                      </p>
                    </div>

                    <div className="flex md:col-span-2 md:justify-end items-start gap-4">
                      <div className="hidden md:block text-right">
                        <p className="text-[10px] font-mono uppercase tracking-[.1em] text-[var(--text-muted)]">
                          {exp.location}
                        </p>
                      </div>
                      <span className="min-w-[64px] text-right text-[10px] font-mono uppercase tracking-[.1em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--text)]">
                        {open ? "Close" : "Details"}
                      </span>
                    </div>
                  </div>

                  <div className="md:hidden mt-4 flex flex-wrap gap-x-5 gap-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-[.1em]">
                      {exp.period}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-[.1em] text-[var(--text-muted)]">
                      {exp.location}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 14 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{
                          duration: 0.52,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 md:pb-12"
                      >
                        <div className="md:col-start-5 md:col-span-6">
                          <ul className="border-t border-[var(--border)]">
                            {exp.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="grid grid-cols-[8px_1fr] gap-3 py-3.5 border-b border-[var(--border)] text-sm md:text-[15px] leading-relaxed text-[var(--text-muted)]"
                              >
                                <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-2 md:col-start-11">
                          <p className="text-[9px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)]">
                            Stack / tools
                          </p>
                          <div className="mt-4 flex md:flex-col flex-wrap gap-x-4 gap-y-2">
                            {exp.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] font-mono uppercase tracking-[.08em]"
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
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
