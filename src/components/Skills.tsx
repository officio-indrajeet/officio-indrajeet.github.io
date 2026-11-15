import { userData } from "../data/userData";

const core = ["Java", "Spring Boot", "Apache Kafka", "Microservices", "AWS", "Kubernetes", "Docker", "PostgreSQL", "Redis", "Cassandra"];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-head section-head-dark">
          <span className="section-kicker">03 / Expertise</span>
          <h2>A toolkit for<br/><em>building at scale.</em></h2>
          <p className="section-deck">Technologies are tools, not trophies. These are the languages, platforms and practices I’ve used to design, build and support software.</p>
        </div>
        <div className="core-stack"><div><span className="micro-label">CORE STACK</span><small>My most-used technologies</small></div><div className="core-tags">{core.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        <div className="skill-grid">
          {userData.skills.map((group, index) => <article key={group.category} className="skill-card">
            <div className="skill-card-top"><span>0{index + 1}</span><i>↗</i></div>
            <h3>{group.category}</h3>
            <div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
