import Navbar from "./components/Navbar";
import About from "./layout/About";
import Portofolio from "./layout/Portofolio";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";
import HomeSection from "./layout/Home";
import ClientWrapper from "./components/ClientWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)] antialiased">
      <ClientWrapper />
      <Navbar />

      <main className="px-6 pt-20 max-w-7xl mx-auto">
        <HomeSection />
        <About />
        <Portofolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
