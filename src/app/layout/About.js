"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function About() {
  const [activeSkillTab, setActiveSkillTab] = useState("language");
  const [activeEducationTab, setActiveEducationTab] = useState("university");

  const educationData = [
    {
      key: "university",
      title: "College",
      year: "2020 - 2024",
      school: "Politeknik Elektronika Negeri Surabaya",
      details: [
        "PKM-KC Incentive Winner From DirJen Pendidikan Vokasi",
        "Awardee Scholarship Bank Indonesia & Staff of GenBI PENS",
        "Internship at AirNav Juanda & Project Based Learning at PT Telkom Indonesia",
        "Chief of EEPIS Student Organization Kediri",
        "Project Based Learning Talent Scout Academy Kominfo, Pemda Gresik & PT Telkom Indonesia",
        "InnoWork IoT Advantech",
        "Penelitian Lokal: Intelligent System for Detecting Laboratory Presence",
        "Final Project: Image Processing Using Deep Learning for Drifting Victim Search via Drone",
        "TOEFL Score: 450",
      ],
    },
    {
      key: "seniorHigh",
      title: "Senior High",
      year: "2017 - 2020",
      school: "SMA Negeri 1 Kota Kediri",
      details: [
        "Basketball Player at SMAN 1 Kota Kediri",
        "Chief Committee at Event Expo Campus SMAS'T",
        "3rd Place, 2017 Kediri City Mayor's Basketball Cup",
        "2nd Place, 2018 Kediri City Mayor's Basketball Cup",
        "2nd Place, Basketball Arts & Sport Competition IIK Bhakti Wiyata Kediri 2016",
      ],
    },
    {
      key: "juniorHigh",
      title: "Junior High",
      year: "2014 - 2017",
      school: "SMP Negeri 4 Kota Kediri",
      details: [
        "Head of Section on Human Rights & Democracy at OSIS",
        "Member, Non-academic and Academic Fields at OSIS",
        "Member of PIK-R (Pusat Informasi dan Konseling Remaja)",
        "Basketball Player at SMPN 4 Kediri",
        "1st Place, 2016 Kediri City Mayor's Basketball Cup",
      ],
    },
  ];

  const skillsData = {
    language: [
      "HTML",
      "CSS",
      "Javascript",
      "TypeScript",
      "PHP",
      "Python",
      "C++",
    ],
    framework: [
      "Next.js",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Quasar",
    ],
    tools: ["GitHub", "Docker", "Arduino/ESP32", "Linux", "Git"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section
      id="about"
      className="py-24 md:py-28 border-b border-[var(--border)]"
    >
      <SectionLabel index={1} title="About" />

      <Reveal className="max-w-2xl mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-5">
          Building the systems behind the interface.
        </h2>
        <p className="text-[var(--text-muted)] text-base leading-relaxed">
          I&apos;m{" "}
          <span className="text-[var(--text)] font-medium">
            Ferdy Kurnia Panggabean
          </span>
          , a full-stack engineer with a Telecommunication Engineering
          background. I specialize in production-grade Laravel systems, DevOps
          infrastructure, and bridging hardware with scalable web architecture.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* EDUCATION CARD */}
        <Reveal
          delay={0.05}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-7"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
            Education journey
          </h3>

          <div className="flex gap-1 bg-[var(--bg-elevated)] p-1 rounded-lg border border-[var(--border)] mb-8 overflow-x-auto scrollbar-none">
            {educationData.map((edu) => (
              <button
                key={edu.key}
                onClick={() => setActiveEducationTab(edu.key)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wide rounded-md whitespace-nowrap z-10 w-full text-center transition-colors duration-300 ${
                  activeEducationTab === edu.key
                    ? "text-[var(--bg)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {activeEducationTab === edu.key && (
                  <motion.div
                    layoutId="activeEduIndicator"
                    className="absolute inset-0 bg-[var(--accent)] rounded-md -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {edu.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {educationData.map(
              (edu) =>
                edu.key === activeEducationTab && (
                  <motion.div
                    key={edu.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="min-h-[260px]"
                  >
                    <h4 className="font-display text-lg font-bold text-[var(--text)] leading-snug">
                      {edu.school}
                    </h4>
                    <span className="inline-block px-2.5 py-1 bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-mono rounded-md mt-2 mb-5">
                      {edu.year}
                    </span>

                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="space-y-3"
                    >
                      {edu.details.map((item, idx) => (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          className="text-sm text-[var(--text-muted)] flex items-start gap-3 leading-relaxed"
                        >
                          <span className="text-[var(--accent)] font-mono text-xs mt-1 shrink-0">
                            →
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </Reveal>

        {/* SKILLS CARD */}
        <Reveal
          delay={0.15}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-7"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
            Technical expertise
          </h3>

          <div className="flex gap-1 bg-[var(--bg-elevated)] p-1 rounded-lg border border-[var(--border)] mb-8">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wide rounded-md z-10 w-full text-center transition-colors duration-300 ${
                  activeSkillTab === tab
                    ? "text-[var(--bg)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {activeSkillTab === tab && (
                  <motion.div
                    layoutId="activeSkillIndicator"
                    className="absolute inset-0 bg-[var(--accent-2)] rounded-md -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-[260px]"
            >
              <div className="flex flex-wrap gap-2.5">
                {skillsData[activeSkillTab].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="px-3.5 py-2 text-xs font-mono bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent-2)] transition-colors cursor-default"
                  >
                    <span className="text-[var(--accent-2)] mr-1">#</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
