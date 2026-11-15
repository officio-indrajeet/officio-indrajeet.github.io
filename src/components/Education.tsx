import { userData } from "../data/userData";

export default function Education() {
  return (
    <section id="education" className="section section-soft">
      <div className="container">
        <div className="section-head"><span className="section-kicker">06 / Education</span><h2>Strong foundations.<br/><em>Continuous learning.</em></h2></div>
        <div className="education-grid">
          {userData.education.map((item, index) => <article className="education-card" key={item.institution}>
            <div className="education-top"><span>0{index + 1} / {index === 0 ? "POSTGRADUATE" : "UNDERGRADUATE"}</span><small>{item.duration}</small></div>
            <h3>{item.degree}</h3><strong className="education-school">{item.institution}</strong><p className="education-location">{item.location}</p>
            <div className="education-divider"></div><div className="education-gpa"><span>Academic result</span><strong>{item.gpa}</strong></div>
            <div className="education-tags">{item.coursework.map((course) => <span key={course}>{course}</span>)}</div>
          </article>)}
        </div>
        <div className="certification"><span>✳</span><div><small>PROFESSIONAL CERTIFICATION</small><strong>DEV250 JavaScript Business Rules</strong><p>Stibo Systems · Aarhus, Denmark</p></div></div>
      </div>
    </section>
  );
}
