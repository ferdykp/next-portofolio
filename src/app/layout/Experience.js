"use client";

import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const experiences = [
  {
    company: "Nuctech Company Limited",
    location: "Surabaya, Indonesia",
    role: "Software Engineer (Full-Stack Developer & DevOps Engineer)",
    period: "May 2025 — Present",
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
    company: "PT Reka Inovasi Cerdas (Innodrive.ai)",
    location: "Mojokerto, Indonesia",
    role: "Software Engineer",
    period: "Nov 2024 — Apr 2025",
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
    location: "Surabaya, Indonesia",
    role: "Intern",
    period: "Feb 2023 — Jul 2023",
    bullets: [
      "Performed daily meter readings for airport communication and monitoring equipment.",
      "Assisted with fiber optic troubleshooting and Instrument Landing System (ILS) calibration alongside a global flight inspection service provider.",
    ],
    tech: ["Fiber Optics", "ILS Calibration"],
  },
  {
    company:
      "Talent Scout Academy — Kominfo, Pemda Gresik & PT Telkom Indonesia",
    location: "Surabaya, Indonesia",
    role: "Participant, Project Based Learning",
    period: "Jul 2022 — Dec 2022",
    bullets: [
      "Assembled IoT devices using Arduino Nano microcontrollers, sensors, and LoRa communication modules.",
      "Wrote C++ programs for IoT device-to-website communication via the HTTP POST protocol.",
      "Developed an IoT device monitoring website using PHP, HTML, CSS, and MySQL.",
    ],
    tech: ["Arduino Nano", "LoRa", "C++", "PHP", "MySQL"],
  },
  {
    company: "InnoWork IoT Advantech",
    location: "Surabaya, Indonesia",
    role: "Participant",
    period: "May 2023 — Sep 2023",
    bullets: [
      "Built IoT devices using NodeMCU and various sensors, programmed in C++.",
      "Programmed automated alerts via Telegram and displayed data on an Advantech SCADA dashboard using Modbus TCP/IP.",
    ],
    tech: ["NodeMCU", "C++", "Modbus TCP/IP", "SCADA"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-28 border-b border-[var(--border)]"
    >
      <SectionLabel index={2} title="Experience" />

      <Reveal className="max-w-2xl mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-5">
          Where the work happened.
        </h2>
        <p className="text-[var(--text-muted)] text-base leading-relaxed">
          From airport instrumentation to enterprise ERP — a log of roles that
          shaped how I build production systems today.
        </p>
      </Reveal>

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[var(--border)]" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company}
              delay={i * 0.05}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline node */}
              <span
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 bg-[var(--bg)] ${
                  exp.current
                    ? "border-[var(--accent)]"
                    : "border-[var(--border)]"
                }`}
              >
                {exp.current && (
                  <span className="absolute inset-[3px] rounded-full bg-[var(--accent)] animate-pulse" />
                )}
              </span>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-7 hover:border-[var(--accent)]/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--text)] leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--accent-2)] text-sm font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col sm:items-end gap-1">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)] text-[var(--text)] whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[var(--text-muted)] leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[var(--accent)] font-mono text-xs mt-1 shrink-0">
                        →
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
