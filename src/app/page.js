"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./layout/About";
// import Service from "./layout/Service";
import Portofolio from "./layout/Portofolio";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";
import HomeSection from "./layout/Home"; // Import komponen baru

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <Navbar />

      <main className="px-6 py-20 max-w-7xl mx-auto">
        <HomeSection /> {/* Gunakan komponen di sini */}
        <About />
        {/* <Service /> */}
        <Portofolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
