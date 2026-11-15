import { userData } from "../data/userData";

export default function About() {
  return (
    <section id="about" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">01 / About</span>
          <h2>Engineering with<br/><em>a wider perspective.</em></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            {userData.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <a className="inline-link" href="#contact">Get in touch <span>↗</span></a>
          </div>
          <aside className="about-panel">
            <span className="micro-label">AT A GLANCE</span>
            <div className="about-facts">
              <div><small>ROLE</small><strong>{userData.title}</strong></div>
              <div><small>COMPANY</small><strong>{userData.company}</strong></div>
              <div><small>EDUCATION</small><strong>MSc Computer Science · Trinity College Dublin</strong></div>
              <div><small>LOCATION</small><strong>{userData.location}</strong></div>
            </div>
          </aside>
        </div>
        <div className="focus-label"><span className="micro-label">WHAT I DO</span><i></i></div>
        <div className="focus-grid">
          {userData.focusAreas.map((area, index) => <article className="focus-card" key={area.title}>
            <span className="focus-index">0{index + 1}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
