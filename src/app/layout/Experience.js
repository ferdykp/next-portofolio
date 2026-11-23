const experiences = [
  {
    company: "Nuctech Company Limited",
    role: "Software Engineer, Full-Stack / DevOps",
    period: "May 2025 to Present",
  },
  {
    company: "PT Reka Inovasi Cerdas",
    role: "Software Engineer",
    period: "Nov 2024 to Apr 2025",
  },
  {
    company: "AirNav Juanda Surabaya",
    role: "Engineering Intern",
    period: "Feb 2023 to Jul 2023",
  },
  {
    company: "InnoWork IoT Advantech",
    role: "IoT Program Participant",
    period: "May 2023 to Sep 2023",
  },
  {
    company: "Talent Scout Academy",
    role: "Project Based Learning Participant",
    period: "Jul 2022 to Dec 2022",
  },
];

export default function Experience() {
  return (
    <section className="portfolio-shell section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="section-kicker"><span>03</span> Experience</p>
        <div>
          <h2 className="section-title" id="experience-title">Work across software and systems.</h2>
        </div>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-row" key={experience.company}>
            <h3 className="experience-company">{experience.company}</h3>
            <p className="experience-role">{experience.role}</p>
            <p className="experience-period">{experience.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
