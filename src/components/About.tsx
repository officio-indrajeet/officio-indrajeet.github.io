import { userData } from "../data/userData";

export default function About() {
  return (
    <section id="about" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">01 / About</span>
          <h2>Curious by nature.<br/><em>Practical by design.</em></h2>
          <p className="section-deck">6+ years building software across frontend, services, and distributed platforms.</p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <span className="micro-label">A LITTLE BACKGROUND</span>
            {userData.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <a className="inline-link" href="#contact">Let’s connect <span>↗</span></a>
          </div>
          <aside className="about-panel">
            <div className="panel-top"><span className="micro-label">ENGINEERING SNAPSHOT</span><span>✳</span></div>
            <div className="about-facts">
              <div><small>CURRENT ROLE</small><strong>{userData.title}</strong></div>
              <div><small>ORGANISATION</small><strong>{userData.company}</strong></div>
              <div><small>EDUCATION</small><strong>MSc Computer Science · Trinity College Dublin</strong></div>
              <div><small>FOCUS</small><strong>Backend · Distributed systems · Cloud</strong></div>
            </div>
          </aside>
        </div>
        <div className="focus-label"><span className="micro-label">FOCUS AREAS</span><i></i></div>
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
