import { experience } from "../data/projects";

export default function Experience() {
  return (
    <section className="experience-section section-shell motion-section" id="experience" aria-labelledby="experience-title">
      <div className="section-rail">
        <p className="section-number">03</p>
        <p className="rail-label">Experience</p>
      </div>
      <div className="experience-content">
        <h2 className="visually-hidden" id="experience-title">Experience</h2>
        {experience.map((item, index) => (
          <article className="experience-row" key={item.company}>
            <span className="experience-index">0{index + 1}</span>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
            <p>{item.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
