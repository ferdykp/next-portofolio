"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portofolio() {
  return (
    <section
      id="portofolio"
      className="mb-32 max-w-6xl mx-auto text-center py-20"
    >
      <h2 className="text-4xl font-bold mb-10">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
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
              "System monitors the milk distribution process from farms to factories by tracking milk quality using temperature, humidity, and ammonia sensors, monitoring cooler box conditions with a tilt sensor, and ensuring smooth delivery with a GPS module on the truck.",
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
              "Image Processing Using Deep Learning For The Process Of Searching For Drafting Victims In The River  ",
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
              "This website was build for finished my group final project, there is spme of our product on final project inside this website",
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
              "This website was build for finished my group final project, there is spme of our product on final project inside this website",
            images: [
              "/assets/portofolio/penlok/penlok1.png",
              "/assets/portofolio/penlok/penlok2.jpeg",
              "/assets/portofolio/penlok/penlok3.jpeg",
            ],
            link: "",
          },
        ].map(({ title, description, images, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
          >
            <div className="relative w-full aspect-[16/10]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="h-60 w-full"
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
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
