import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Experience from "./layout/Experience";
import HomeSection from "./layout/Home";
import Notes from "./layout/Notes";
import Portofolio from "./layout/Portofolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HomeSection />
        <Portofolio />
        <About />
        <Experience />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
