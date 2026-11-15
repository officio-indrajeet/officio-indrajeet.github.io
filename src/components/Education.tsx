import { userData } from "../data/userData";

export default function Education() {
  return (
    <section id="education" className="section section-soft">
      <div className="container">
        <div className="section-head"><span className="section-kicker">06 / Education</span><h2>Learning that<br/><em>keeps moving.</em></h2></div>
        <div className="education-grid">
          {userData.education.map((item, index) => <article className="education-card" key={item.institution}>
            <div className="education-top"><span>{index === 0 ? "MASTER’S" : "BACHELOR’S"}</span><small>{item.duration}</small></div>
            <h3>{item.degree}</h3><strong className="education-school">{item.institution}</strong><p className="education-location">{item.location}</p>
            <div className="education-divider"></div><div className="education-gpa"><span>Result</span><strong>{item.gpa}</strong></div>
            <div className="education-tags">{item.coursework.map((course) => <span key={course}>{course}</span>)}</div>
          </article>)}
        </div>
        <div className="certification"><span>✳</span><div><small>CERTIFICATION</small><strong>{userData.certification.split(" — ")[0]}</strong><p>{userData.certification.split(" — ")[1]}</p></div></div>
      </div>
    </section>
  );
}
