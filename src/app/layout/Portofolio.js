"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portofolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const modalRef = useRef();

  // Ditambahkan properti 'category' di setiap proyek untuk sistem filter
  const projects = [
    {
      title: "GrowPOS - SaaS Multi-Tenant Point of Sale with AI Advisor",
      category: "web",
      description:
        "Full-stack Multi-Tenant SaaS POS for Retail & F&B businesses. Features real-time checkout, dynamic QRIS Midtrans payments, cash audit shifts, automated profit/COGS reports, tenant wallet payout workflows, and Google Gemini AI integration for real-time business advisory and inventory insights.",
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
      title: "Extreme Project - Premium Coil & Cotton Landing Page",
      category: "web",
      description:
        "Developed a high-performance e-commerce landing page tailored for a premium handcrafted coil artisan brand. Architected with high-fidelity custom design systems, adaptive grid product arrays, and rich hover sensory interaction. Optimized with Next.js advanced metadata engine, custom semantic OpenGraph cards, localized SEO structures, dynamic sitemaps, and strict ultrasonic asset loading pipelines.",
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
        "Transformed a legacy commercial laptop into a high-availability 24/7 home server hosting production apps. Developed a custom zero-dependency, multi-threaded Python bot integrated with PM2 and Linux Kernel ACPI to stream live telemetry metrics (RAM, SSD, real-time power consumption, CPU temp) to Telegram with smart state-tracking proactive alerts.",
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
        "IoT street lights use Arduino Nano, LDR, RTC, and PZEM. Telemetry data sent via LoRa (Antares, HTTP POST) to a centralized PHP web platform dashboard.",
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
        "An anti-theft motorcycle security system engineering using NodeMCU ESP8266 and a gyroscope sensor. Fully integrated with an IoT-based Android app that functions as a remote and live GPS tracker.",
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
        "End-to-end system monitors the milk distribution process from farms to factories by tracking milk quality integrity using cold-chain sensors, and ensuring smooth delivery optimization with GPS tracking.",
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
      title: "College Final Project - Image Processing Deep Learning",
      category: "ai",
      description:
        "Computer Vision and Image Processing application using Deep Learning algorithms for the automated process of searching and detecting drowning/drifting victims in river streams.",
      images: [
        "/assets/portofolio/ta/ta1.jpeg",
        "/assets/portofolio/ta/ta2.jpg",
        "/assets/portofolio/ta/ta3.jpeg",
      ],
      field: "AI & Computer Vision Engineer",
      techstack: ["Python", "Deep Learning", "OpenCV", "Image Processing"],
    },
    {
      title: "Platform Website Team SAR for Basarnas",
      category: "web",
      description:
        "A collaborative rescue monitoring web platform built to showcase our group final project, including all related command center products, coordinates, and response features.",
      images: [
        "/assets/portofolio/sarteam/sarteam1.png",
        "/assets/portofolio/sarteam/sarteam2.png",
      ],
      field: "Web Front-End Developer",
      techstack: ["Next.js", "Tailwind CSS", "JavaScript", "Maps API"],
    },
    {
      title: "Intelligent System for Detecting Laboratory Presence",
      category: "smart-system",
      description:
        "A smart building automation monitoring system designed to detect human presence inside the electronics laboratory, enhancing facility safety profiles and dynamic energy efficiency.",
      images: [
        "/assets/portofolio/penlok/penlok1.png",
        "/assets/portofolio/penlok/penlok2.jpeg",
        "/assets/portofolio/penlok/penlok3.jpeg",
      ],
      field: "Smart System Engineer",
      techstack: ["Embedded Systems", "Sensors", "Node.js", "Dashboard"],
    },
  ];

  // Daftar tombol kategori filter
  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "devops", label: "DevOps & Automation" },
    { id: "iot", label: "IoT & Embedded" },
    { id: "ai", label: "AI & Vision" },
    { id: "smart-system", label: "Smart Systems" },
  ];

  // Melakukan filter project berdasarkan category state yang aktif
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
    <section id="portofolio" className="py-20 border-b border-zinc-800">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Selected Portfolio
        </h2>
        <p className="text-zinc-400">
          A collection of end-to-end web applications and hardware/IoT
          integrations built from research to deployment.
        </p>
      </div>

      {/* TABS FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-3xl mx-auto px-4">
        {filterCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-200 relative ${
              selectedCategory === category.id
                ? "bg-zinc-800 border-zinc-700 text-white font-bold"
                : "bg-zinc-900/20 border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid Proyek dengan animasi Framer Motion */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              key={project.title} // Menggunakan title unik sebagai key agar animasi exit terpicu dengan benar
              className="group bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col"
            >
              {/* KLIK AREA HANYA DI LUAR AREA NAVIGASI SLIDER */}
              <div className="relative w-full h-48 bg-zinc-950 overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="w-full h-full text-white"
                >
                  {project.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setActiveProject(project)}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <span className="absolute top-3 left-3 text-[11px] bg-zinc-900/90 text-blue-400 font-mono px-2.5 py-1 border border-zinc-800 rounded-md z-10 pointer-events-none">
                  {project.field}
                </span>
              </div>

              <div
                onClick={() => setActiveProject(project)}
                className="p-5 flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Menampilkan 3 Tech Stack Teratas di Luar Card */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.techstack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-900 text-zinc-400 font-mono px-2 py-0.5 rounded border border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techstack.length > 3 && (
                    <span className="text-xs text-zinc-500 font-mono px-1 py-0.5">
                      +{project.techstack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Detail Pop-up */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-zinc-900 border border-zinc-800 max-w-2xl w-full rounded-xl overflow-hidden relative shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded-full flex items-center justify-center z-10 transition text-lg"
              >
                &times;
              </button>

              <div className="p-6">
                <span className="text-xs font-mono text-blue-500 uppercase tracking-wider">
                  {activeProject.field}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 mt-1">
                  {activeProject.title}
                </h3>

                {/* Image Slider di dalam Modal */}
                <div className="w-full h-64 sm:h-80 relative bg-zinc-950 rounded-lg overflow-hidden mb-6 border border-zinc-800">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="w-full h-full text-white"
                  >
                    {activeProject.images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                          <Image
                            src={src}
                            alt={`${activeProject.title} view ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <h4 className="text-zinc-200 font-semibold mb-2 text-sm uppercase tracking-wider font-mono">
                  Project Description
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <h4 className="text-zinc-200 font-semibold mb-2 text-sm uppercase tracking-wider font-mono">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-zinc-950 text-blue-400 font-mono px-3 py-1 rounded-md border border-zinc-800"
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
