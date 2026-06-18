"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeSkillTab, setActiveSkillTab] = useState("language");
  const [activeEducationTab, setActiveEducationTab] = useState("university"); // Diubah default ke yang terbaru

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
      ],
    },
    {
      key: "juniorHigh",
      title: "Junior High",
      year: "2014 - 2017",
      school: "SMP Negeri 4 Kota Kediri",
      details: [
        "Head of Section on Human Rights and Democracy at OSIS",
        "Basketball Player at SMPN 4 KEDIRI",
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

  return (
    <section id="about" className="py-20 border-b border-zinc-800 text-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          About Me
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          My name is{" "}
          <span className="text-blue-500 font-semibold">
            Ferdy Kurnia Panggabean
          </span>
          . I specialize in full-stack web engineering and IoT architecture,
          integrating physical sensors with modern scalable digital dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* EDUCATION CARD */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-zinc-200 flex items-center gap-2">
            Education Journey
          </h3>
          <div className="flex gap-2 border-b border-zinc-800 pb-3 mb-6 overflow-x-auto">
            {educationData.map((edu) => (
              <button
                key={edu.key}
                onClick={() => setActiveEducationTab(edu.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeEducationTab === edu.key
                    ? "bg-blue-600 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {edu.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeEducationTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-[220px]"
            >
              {educationData.map(
                (edu) =>
                  edu.key === activeEducationTab && (
                    <div key={edu.key}>
                      <h4 className="text-lg font-bold text-white">
                        {edu.school}
                      </h4>
                      <span className="text-sm text-blue-500 block mb-4 font-mono">
                        {edu.year}
                      </span>
                      <ul className="space-y-3">
                        {edu.details.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-zinc-400 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-blue-500 mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SKILLS CARD */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-zinc-200">
            Technical Expertise
          </h3>
          <div className="flex gap-2 border-b border-zinc-800 pb-3 mb-6">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg capitalize transition-all ${
                  activeSkillTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
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
              className="min-h-[220px]"
            >
              <div className="flex flex-wrap gap-2.5">
                {skillsData[activeSkillTab].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
