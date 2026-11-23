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
          <details className="experience-row" key={item.company}>
            <summary className="experience-summary">
              <span className="experience-index">0{index + 1}</span>
              <h3>{item.company}</h3>
              <p className="experience-role">{item.role}</p>
              <span className="experience-meta">
                <span className="experience-period">{item.period}</span>
                <span className="experience-action">
                  <span className="experience-open-label">View details</span>
                  <span className="experience-close-label">Close</span>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 3.5v13M3.5 10h13" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="experience-details">
              <ul className="experience-bullets" aria-label={`Work completed at ${item.company}`}>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <p className="experience-tools">
                <span>Tools</span>
                <span>{item.tools.join(" · ")}</span>
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
