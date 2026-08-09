"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
        "Final Project: IMAGE PROCESSING USING DEEP LEARNING FOR THE PROCESS OF SEARCHING FOR DRAFTING VICTIMS IN THE RIVER USING DRONE",
      ],
    },
    {
      key: "seniorHigh",
      title: "Senior High",
      year: "2017 - 2020",
      school: "SMA Negeri 1 Kota Kediri",
      details: [
        "Basketball Player at SMAN 1 Kota KEDIRI",
        "The Chief Committee at Event Expo Campus SMAS'T",
        "3rd Place Winner of the 2017 Kediri City Mayor's Basketball Cup",
        "2nd Place Winner of the 2018 Kediri City Mayor's Basketball Cup",
        "2nd place in Basketball Arts and Sport Competition IIK Bhakti Wiyata Kediri 2016",
      ],
    },
    {
      key: "juniorHigh",
      title: "Junior High",
      year: "2014 - 2017",
      school: "SMP Negeri 4 Kota Kediri",
      details: [
        "Head of Section on Human Rights and Democracy at OSIS",
        "Member of the section on Non-academic and Academic fields at OSIS",
        "Member of PIK-R (Pusat Informasi dan Koneseling Remaja)",
        "Basketball Player at SMPN 4 KEDIRI",
        "1st Place Winner of the 2016 Kediri City Mayor's Basketball Cup",
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
    tools: ["GitHub", "Docker", "Arduino/ESP32 Platform", "Linux", "Git"],
  };

  // Varian animasi untuk list item (staggered effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="about"
      className="py-28 px-6 max-w-7xl mx-auto border-b border-zinc-900 text-white overflow-hidden"
    >
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-3 block">
          Biography
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
          My name is{" "}
          <span className="text-white font-medium underline decoration-blue-500/50 decoration-2 underline-offset-4">
            Ferdy Kurnia Panggabean
          </span>
          . I specialize in full-stack web engineering and IoT architecture,
          integrating physical sensors with modern scalable digital dashboards.
        </p>
      </div>

      {/* TWO COLUMN GRID COMPONENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* EDUCATION CARD */}
        <div className="bg-zinc-950/40 border border-zinc-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transition-opacity group-hover:opacity-100 duration-500 opacity-50" />

          <h3 className="text-lg font-bold tracking-wider uppercase text-zinc-300 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Education Journey
          </h3>

          {/* Custom Animated Tab List */}
          <div className="flex gap-1 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800/40 mb-8 overflow-x-auto scrollbar-none">
            {educationData.map((edu) => (
              <button
                key={edu.key}
                onClick={() => setActiveEducationTab(edu.key)}
                className={`relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-300 whitespace-nowrap z-10 w-full text-center ${
                  activeEducationTab === edu.key
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeEducationTab === edu.key && (
                  <motion.div
                    layoutId="activeEduIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg -z-10"
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
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="min-h-[260px]"
                  >
                    <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {edu.school}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold rounded-md mt-2 mb-6 border border-blue-500/20">
                      {edu.year}
                    </span>

                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="space-y-3.5"
                    >
                      {edu.details.map((item, idx) => (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          className="text-sm text-zinc-400 flex items-start gap-3 leading-relaxed group/item"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 transition-transform group-hover/item:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="group-hover/item:text-zinc-200 transition-colors duration-200">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* SKILLS CARD */}
        <div className="bg-zinc-950/40 border border-zinc-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transition-opacity group-hover:opacity-100 duration-500 opacity-50" />

          <h3 className="text-lg font-bold tracking-wider uppercase text-zinc-300 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Technical Expertise
          </h3>

          {/* Custom Animated Tab List */}
          <div className="flex gap-1 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800/40 mb-8">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-300 z-10 w-full text-center ${
                  activeSkillTab === tab
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeSkillTab === tab && (
                  <motion.div
                    layoutId="activeSkillIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg -z-10"
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
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="min-h-[260px]"
            >
              <div className="flex flex-wrap gap-2.5">
                {skillsData[activeSkillTab].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(255,255,255,0.06)",
                      borderColor: "rgba(59, 130, 246, 0.4)",
                    }}
                    className="px-4 py-2.5 text-xs font-mono font-medium bg-zinc-900/80 border border-zinc-800/80 rounded-xl text-zinc-300 shadow-sm cursor-default transition-colors duration-200 hover:text-white"
                  >
                    <span className="text-blue-500 mr-1.5">#</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
