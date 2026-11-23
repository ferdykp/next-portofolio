export default function About() {
  return (
    <section className="about-section section-shell motion-section" id="about" aria-labelledby="about-title">
      <div className="section-rail section-rail--light">
        <p className="section-number">02</p>
        <p className="rail-label">About</p>
      </div>
      <div className="about-content">
        <h2 id="about-title">Good software has to work in the real world.</h2>
        <div className="about-bottom">
          <p className="about-copy">
            I&apos;m a software engineer with a background in Telecommunication Engineering. My work moves between product interfaces, internal tools, connected systems, and the infrastructure behind them.
          </p>
          <p className="about-education">Politeknik Elektronika Negeri Surabaya<br />Telecommunication Engineering / 2024</p>
        </div>
      </div>
    </section>
  );
}
