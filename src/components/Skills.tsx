import { userData } from "../data/userData";

const core = ["Java", "Spring Boot", "Kafka", "React", "Angular", "AWS", "Kubernetes"];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-head section-head-dark">
          <span className="section-kicker">03 / Skills</span>
          <h2>The tools behind<br/><em>the work.</em></h2>
        </div>
        <div className="core-stack">
          <span className="micro-label">CORE TECHNOLOGIES</span>
          <div className="core-tags">{core.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
        <div className="skill-grid">
          {userData.skills.map((group, index) => <article key={group.category} className="skill-card">
            <div className="skill-card-top"><span>0{index + 1}</span></div>
            <h3>{group.category}</h3>
            <div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
