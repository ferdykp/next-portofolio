"use client";

import BubbleLogos from "../components/BubbleLogos";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeSkillTab, setActiveSkillTab] = useState("language");
  const [activeEducationTab, setActiveEducationTab] = useState("juniorHigh");

  const educationData = [
    {
      key: "juniorHigh",
      title: "Junior High School",
      year: "2014 - 2017",
      school: "SMP Negeri 4 Kota Kediri",
      details: [
        "Head of Section on Human Rights and Democracy at OSIS",
        "Member of the section on Non-academic and Academic fields at OSIS",
        "Member of PIK-R (Pusat Informasi dan Konseling Remaja)",
        "Basketball Player at SMPN 4 KEDIRI",
      ],
    },
    {
      key: "seniorHigh",
      title: "Senior High School",
      year: "2017 - 2020",
      school: "SMA Negeri 1 Kota Kediri",
      details: [
        "Basketball Player at SMAN 1 Kota KEDIRI",
        "The Chief Committee at Event Expo Campus SMAS'T",
      ],
    },
    {
      key: "university",
      title: "College",
      year: "2020 - 2024",
      school: "Politeknik Elektronika Negeri Surabaya",
      details: [
        "Member of UKKI PENS in Social Division",
        "Chief Committee at Event Bakti Sosial UKKI PENS",
        "Chief of EEPIS Student Organization Kediri",
        "PKM-KC Incentive Winner From DirJen Pendidikan Vokasi",
        "Awardee Scholarship Bank Indonesia",
        "Staff of GenBI PENS in Environmental & Social",
        "Chief Committee at Event Susur Mangrove by GenBI PENS",
        "Talent Scout Academy by KOMINFO",
        "Project Based Learning at PT Telkom Indonesia & Pemda Gresik",
        "Internship at AirNav Juanda Surabaya",
        "Project Based Learning at Innowork IoT Advantech",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 md:px-8 py-20 text-white"
    >
      <h2 className="text-4xl text-center font-bold mb-6">About Me</h2>

      {/* ABOUT & BUBBLE SECTION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">
        <p className="text-base md:text-lg text-justify leading-relaxed md:max-w-xl">
          My name is Ferdy Kurnia Panggabean A.K.A{" "}
          <span className="text-blue-600 font-bold">Ferdy</span>. I am someone
          who wants to learn more and more about technology especially about
          programming such as website programming and AI development. I want to
          understand various tools and the latest technology to create useful
          digital solutions.
        </p>
        <BubbleLogos />
      </div>

      {/* EDUCATION SECTION */}
      <h2 className="text-4xl text-center font-bold mb-6 mt-16">Education</h2>
      <div className="border border-gray-300 rounded-[7px] p-4 md:p-6 mt-10 text-left">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-b pb-3 mb-4">
          {educationData.map((edu) => (
            <button
              key={edu.key}
              onClick={() => setActiveEducationTab(edu.key)}
              className={`cursor-pointer font-semibold capitalize px-3 py-2 text-sm md:text-base rounded ${
                activeEducationTab === edu.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {edu.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeEducationTab}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm md:text-base min-h-[100px]"
          >
            {educationData.map(
              (edu) =>
                activeEducationTab === edu.key && (
                  <div key={edu.key}>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-gray-300 mb-2">{edu.year}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.details.map((item, idx) => (
                        <li key={idx}>🎓 {item}</li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SKILLS SECTION */}
      <h2 className="text-4xl text-center font-bold mb-6 mt-16">Skills</h2>
      <div className="border border-gray-300 rounded-[7px] p-4 md:p-6 mt-10 text-left">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-b pb-3 mb-4">
          {["language", "framework", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSkillTab(tab)}
              className={`cursor-pointer font-semibold capitalize px-3 py-2 text-sm md:text-base rounded ${
                activeSkillTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {tab === "language"
                ? "Programming Language"
                : tab === "framework"
                ? "Framework"
                : "Tools"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkillTab}
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-sm md:text-base min-h-[100px]"
          >
            {activeSkillTab === "language" && (
              <ul className="list-disc list-inside space-y-1">
                <li>⚡ HTML</li>
                <li>⚡ CSS</li>
                <li>⚡ Javascript</li>
                <li>⚡ PHP</li>
                <li>⚡ Typescript</li>
                <li>⚡ Python</li>
                <li>⚡ C++</li>
              </ul>
            )}
            {activeSkillTab === "framework" && (
              <ul className="list-disc list-inside space-y-1">
                <li>⚡ Laravel</li>
                <li>⚡ Vue.js</li>
                <li>⚡ Tailwind</li>
                <li>⚡ Node.js</li>
                <li>⚡ Express.js</li>
                <li>⚡ Quasar</li>
              </ul>
            )}
            {activeSkillTab === "tools" && (
              <ul className="list-disc list-inside space-y-1">
                <li>🛠 GitHub</li>
                <li>🛠 Docker</li>
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
