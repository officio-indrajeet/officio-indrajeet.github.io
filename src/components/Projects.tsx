import { userData } from "../data/userData";

export default function Projects() {
  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="section-head section-head-split">
          <div><span className="section-kicker">04 / Projects</span><h2>Selected<br/><em>work.</em></h2></div>
          <div className="section-side-copy"><p className="section-deck">A closer look at systems and applications I’m building.</p><a className="inline-link" href={userData.github} target="_blank" rel="noopener noreferrer">More on GitHub <span>↗</span></a></div>
        </div>
        <div className="project-grid">
          {userData.projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-head">
                <span>0{index + 1}</span>
                <span className={`project-status ${project.statusTone}`}>{project.status}</span>
              </div>
              <div className={`project-visual project-visual-${project.name.toLowerCase()}`} aria-hidden="true">
                <div className="visual-orbit orbit-one"></div>
                <div className="visual-orbit orbit-two"></div>
                <i>{project.name === "RiskPulse" ? "↗" : "✓"}</i>
                <span className="visual-caption">{project.name === "RiskPulse" ? "TRANSACTION PIPELINE" : "STUDY PROGRESS"}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <p className="project-note">{project.note}</p>
              <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">View repository <span>↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
