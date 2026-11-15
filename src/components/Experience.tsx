import { userData } from "../data/userData";

export default function Experience() {
  return (
    <section id="experience" className="section section-white">
      <div className="container">
        <div className="section-head section-head-split">
          <div><span className="section-kicker">02 / Experience</span><h2>Work shaped by<br/><em>real-world systems.</em></h2></div>
          <p className="section-deck">Across enterprise software and financial technology, I’ve worked on backend services, high-throughput data pipelines and cloud-native platforms.</p>
        </div>
        <div className="timeline">
          {userData.experience.map((item, index) => <article className="timeline-item" key={item.company + item.position}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i className={index === 0 ? "current" : ""}></i></div>
            <div className="experience-card">
              <div className="experience-meta"><span>{item.duration}</span>{index === 0 && <b><i></i> CURRENT</b>}</div>
              <div className="experience-title"><div><h3>{item.position}</h3><p>{item.company}</p></div><span>{item.location}</span></div>
              <ul>{item.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
