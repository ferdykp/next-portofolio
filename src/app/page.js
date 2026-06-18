"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./layout/About";
// import Service from "./layout/Service";
import Portofolio from "./layout/Portofolio";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";
import HomeSection from "./layout/Home";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Menambahkan latar belakang gelap konstan (bg-zinc-950) di seluruh halaman
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-600 selection:text-white antialiased">
      {isLoading && <Loader />}

      <Navbar />

      {/* Mengubah py-20 menjadi pt-20 agar konten tidak tertutup fixed navbar, 
          dan menghapus py-20 global agar spacing antar layout diatur secara modular */}
      <main className="px-6 pt-20 max-w-7xl mx-auto">
        <HomeSection />
        <About />
        {/* <Service /> */}
        <Portofolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
