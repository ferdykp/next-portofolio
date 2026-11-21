import Navbar from "./components/Navbar";
import About from "./layout/About";
import Experience from "./layout/Experience";
import Portofolio from "./layout/Portofolio";
import GitHubActivity from "./layout/GitHubActivity";
import Notes from "./layout/Notes";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";
import HomeSection from "./layout/Home";
import ClientWrapper from "./components/ClientWrapper";
import AmbientWallpaper from "./components/AmbientWallpaper";

export default function Home() {
  return (
    <div className="scene-root min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] antialiased overflow-x-hidden">
      <AmbientWallpaper />
      <ClientWrapper />
      <Navbar />
      <main className="px-5 sm:px-8 lg:px-12 2xl:px-16 max-w-[1720px] mx-auto">
        <HomeSection />
        <About />
        <Experience />
        <Portofolio />
        <GitHubActivity />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
