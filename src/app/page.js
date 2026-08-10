import Navbar from "./components/Navbar";
import About from "./layout/About";
// import Service from "./layout/Service";
import Portofolio from "./layout/Portofolio";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";
import HomeSection from "./layout/Home";
import ClientWrapper from "./components/ClientWrapper"; // Komponen pembungkus client state

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-600 selection:text-white antialiased">
      {/* Loader diisolasi di komponen Client */}
      <ClientWrapper />

      <Navbar />

      <main className="px-6 pt-20 max-w-7xl mx-auto">
        <HomeSection />
        <About />
        {/* <Service /> */}
        <Portofolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
