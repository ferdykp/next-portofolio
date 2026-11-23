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
            <p className="experience-role">{item.role}</p>
            <p className="experience-period">{item.period}</p>
            <ul className="experience-bullets" aria-label={`Work completed at ${item.company}`}>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <p className="experience-tools">
              <span>Tools</span>
              <span>{item.tools.join(" · ")}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
