import WorkIndex from "../components/WorkIndex";
import { projects } from "../data/projects";

export default function Portofolio() {
  return (
    <section className="work-section section-shell motion-section" id="work" aria-labelledby="work-title">
      <div className="section-rail">
        <p className="section-number">01</p>
        <p className="rail-label">Selected work</p>
      </div>
      <div className="work-content">
        <div className="work-heading">
          <h2 id="work-title">Made for use.</h2>
          <span className="work-count">{projects.length} projects / full archive</span>
        </div>
        <WorkIndex />
      </div>
    </section>
  );
}
