import { userData } from "../data/userData";

export default function Projects() {
  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="section-head section-head-split">
          <div><span className="section-kicker">04 / Projects</span><h2>Selected<br/><em>work.</em></h2></div>
          <div className="section-side-copy"><p className="section-deck">A closer look at systems and applications I’ve built.</p><a className="inline-link" href={userData.github} target="_blank" rel="noopener noreferrer">More on GitHub <span>↗</span></a></div>
        </div>
        <div className="project-grid">
          {userData.projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-head"><span>0{index + 1}</span><span>{project.technologies.slice(0, 2).join(" · ")}</span></div>
              <div className="project-visual" aria-hidden="true"><div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div><i>↗</i></div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
