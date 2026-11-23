import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="home-title">
      <div className="hero-masthead">
        <p>Software engineer / Indonesia</p>
        <p>Full-stack · systems · infrastructure</p>
      </div>
      <div className="hero-composition">
        <h1 className="hero-title" id="home-title">
          <span>Interfaces</span>
          <span>are only</span>
          <span>the start<span className="hero-period">.</span></span>
        </h1>
        <figure className="hero-portrait">
          <Image
            src="/assets/profile.jpeg"
            alt="Ferdy Kurnia Panggabean"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 700px) 62vw, (max-width: 1000px) 34vw, 27vw"
          />
          <figcaption>Jakarta / Indonesia</figcaption>
        </figure>
        <p className="hero-description">I build products, tools, and infrastructure.</p>
        <Link className="hero-scroll" href="#work"><span>Scroll to work</span><span aria-hidden="true">↓</span></Link>
        <span className="hero-orange-mark" aria-hidden="true" />
      </div>
    </section>
  );
}
