import { userData } from "../data/userData";

export default function Experience() {
  return (
    <section id="experience" className="section section-white">
      <div className="container">
        <div className="section-head section-head-split">
          <div><span className="section-kicker">02 / Experience</span><h2>Where I’ve<br/><em>made an impact.</em></h2></div>
          <p className="section-deck">Experience across financial services, telecom, and enterprise software.</p>
        </div>
        <div className="timeline">
          {userData.experience.map((item, index) => <article className="timeline-item" key={item.company + item.position}>
            <div className="timeline-marker"><span>0{index + 1}</span><i className={index === 0 ? "current" : ""}></i></div>
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
