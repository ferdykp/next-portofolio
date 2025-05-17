"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["an Engineer", "a Developer", "a Self Seeker"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    // Simulasi loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      typed.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <Navbar />

      {/* Hero Section */}
      <main className="px-6 py-20 max-w-7xl mx-auto">
        <section
          id="home"
          className="flex flex-col md:flex-row items-center gap-80 mt-60 mb-60"
        >
          <Image
            src="/assets/profile.jpeg"
            alt="Foto Ferdy"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Welcome to My Page</h1>
            <p className="text-gray-700 text-3xl mb-6">
              I&apos;m <span ref={typedRef} className="text-blue-600" />
            </p>
            <p className="max-w-md text-gray-600 mb-8">
              Passionate about creating elegant and efficient web solutions
              using modern technologies like Next.js, Laravel, and IoT.
            </p>
            <div className="flex items-center gap-6">
              {[
                {
                  href: "https://www.instagram.com/ferdy.panggabean/",
                  icon: FaInstagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/",
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/ferdykp",
                  icon: FaGithub,
                  label: "GitHub",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group"
                >
                  <div className="p-3 border-2 border-white rounded-full transition-colors duration-200 group-hover:border-blue-400">
                    <Icon className="text-white w-6 h-6 transition-colors duration-200 group-hover:text-blue-400" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="max-w-4xl mx-auto text-center mt-00">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Saya Ferdy, seorang Web Developer dan Engineer dengan pengalaman
            dalam membangun aplikasi web modern dan solusi IoT yang inovatif.
            Saya sangat fokus pada kualitas kode, kemudahan penggunaan, dan
            performa tinggi. Selalu belajar dan beradaptasi dengan teknologi
            terbaru.
          </p>
          <div className="flex justify-center gap-12">
            <div>
              <h3 className="font-semibold text-xl mb-2">Skills</h3>
              <ul className="text-gray-600">
                <li>⚡ Next.js & React</li>
                <li>⚡ Laravel & PHP</li>
                <li>⚡ IoT (ESP32, sensors, MQTT)</li>
                <li>⚡ RESTful APIs</li>
                <li>⚡ Git & CI/CD</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Tools</h3>
              <ul className="text-gray-600">
                <li>🛠 VSCode, GitHub</li>
                <li>🛠 Docker, Postman</li>
                <li>🛠 TailwindCSS, Chakra UI</li>
                <li>🛠 Figma, Photoshop</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-32 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            Saya menawarkan jasa pembuatan website profesional dan solusi IoT
            custom sesuai kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Membangun aplikasi web cepat, responsif, dan SEO-friendly
                menggunakan Next.js dan Laravel.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">IoT Solutions</h3>
              <p className="text-gray-600">
                Prototyping perangkat IoT dengan ESP32, sensor, dan sistem
                integrasi berbasis cloud.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">
                Maintenance & Support
              </h3>
              <p className="text-gray-600">
                Dukungan berkelanjutan dan optimasi sistem agar aplikasi Anda
                selalu berjalan maksimal.
              </p>
            </div>
          </div>
        </section>

        {/* Projects / Portfolio Section */}
        <section id="portfolio" className="mb-32 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Smart Feeder IoT",
                description:
                  "Sistem pemberi makan otomatis berbasis ESP32, sensor ultrasonik, dan aplikasi web dashboard.",
                image: "/assets/project1.jpg",
                link: "https://github.com/ferdykp/smart-feeder",
              },
              {
                title: "Personal Blog",
                description:
                  "Website blog pribadi yang dibuat menggunakan Next.js dengan CMS headless.",
                image: "/assets/project2.jpg",
                link: "https://blog.ferdykp.com",
              },
              {
                title: "E-commerce Store",
                description:
                  "Platform e-commerce lengkap dengan fitur pembayaran dan manajemen produk.",
                image: "/assets/project3.jpg",
                link: "https://github.com/ferdykp/ecommerce-store",
              },
            ].map(({ title, description, image, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={250}
                  className="object-cover w-full"
                />
                <div className="p-4 bg-white text-left">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-700 mb-8">
            Jangan ragu untuk menghubungi saya melalui form di bawah atau sosial
            media.
          </p>
          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Pesan Anda"
              rows="4"
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Ferdy Panggabean. All rights
          reserved.
        </footer>
      </main>
    </>
  );
}
