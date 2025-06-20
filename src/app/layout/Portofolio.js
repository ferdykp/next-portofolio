"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portofolio() {
  const projects = [
    {
      title: "Smart Public Street Light",
      description:
        "IoT street lights use Arduino Nano, LDR, RTC, and PZEM. Data sent via LoRa (Antares, HTTP POST) to a PHP web platform.",
      images: [
        "/assets/portofolio/tsa/tsa.jpeg",
        "/assets/portofolio/tsa/tsa1.jpeg",
        "/assets/portofolio/tsa/tsa2.jpeg",
      ],
      link: "../project",
    },
    {
      title:
        "IoT-Based Security and Monitoring System with Access Code and GPS Tracking",
      description:
        "This project is an anti-theft motorcycle security system using NodeMCU ESP8266 and a gyroscope sensor. Integrated with an IoT-based Android app, it functions as a remote and GPS tracker.",
      images: [
        "/assets/portofolio/pkm/pkm.jpeg",
        "/assets/portofolio/pkm/pkm1.jpeg",
        "/assets/portofolio/pkm/pkm2.jpeg",
      ],
      link: "https://blog.ferdykp.com",
    },
    {
      title: "Smart Dairy Delivery of Fresh Milk",
      description:
        "System monitors the milk distribution process from farms to factories by tracking milk quality using sensors, and ensuring smooth delivery with GPS.",
      images: [
        "/assets/portofolio/advantech/advan1.png",
        "/assets/portofolio/advantech/Picture1.jpg",
        "/assets/portofolio/advantech/Picture4.jpg",
        "/assets/portofolio/advantech/Picture3.jpg",
      ],
      link: "https://github.com/ferdykp/ecommerce-store",
    },
    {
      title: "College Final Project",
      description:
        "Image Processing Using Deep Learning For The Process Of Searching For Drafting Victims In The River.",
      images: [
        "/assets/portofolio/ta/ta1.jpeg",
        "/assets/portofolio/ta/ta2.jpg",
        "/assets/portofolio/ta/ta3.jpeg",
      ],
      link: "https://github.com/ferdykp/ecommerce-store",
    },
    {
      title: "Platform Website Team SAR for Basarnas",
      description:
        "This website was built to showcase our group final project, including all related products and features.",
      images: [
        "/assets/portofolio/sarteam/sarteam1.png",
        "/assets/portofolio/sarteam/sarteam2.png",
      ],
      link: "",
    },
    {
      title:
        "Intelligent System for Detecting the Presence of People in the Laboratory",
      description:
        "A smart monitoring system to detect people inside the lab, enhancing safety and energy efficiency.",
      images: [
        "/assets/portofolio/penlok/penlok1.png",
        "/assets/portofolio/penlok/penlok2.jpeg",
        "/assets/portofolio/penlok/penlok3.jpeg",
      ],
      link: "",
    },
  ];

  return (
    <section
      id="portofolio"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
        Portofolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 ">
        {projects.map(({ title, description, images, link }) => (
          <a
            key={title}
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            rel={link ? "noopener noreferrer" : ""}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Gambar */}
            <div className="relative w-full h-60 sm:h-64 md:h-48 lg:h-70">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full h-full"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Konten */}
            <div className="p-5 text-left flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base flex-1">
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
