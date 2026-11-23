import About from "./layout/About";
import Contact from "./layout/Contact";
import Experience from "./layout/Experience";
import HomeSection from "./layout/Home";
import Notes from "./layout/Notes";
import Portofolio from "./layout/Portofolio";

export default function Home() {
  return (
    <div className="site-frame">
      <main id="main">
        <HomeSection />
        <Portofolio />
        <About />
        <Experience />
        <Notes />
        <Contact />
      </main>
    </div>
  );
}
