import { userData } from "../data/userData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-main">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> {userData.location} <span className="eyebrow-separator">/</span> Frontend & Backend</div>
          <p className="hero-greeting">Hello, I’m {userData.name}.</p>
          <h1>Building reliable software, <em>from interface to infrastructure.</em></h1>
          <p className="hero-summary">{userData.bio}</p>
          <div className="hero-actions">
            <a href="#experience" className="button button-solid">Explore my work <span>↗</span></a>
            <a href="/resume/" className="button button-outline" target="_blank" rel="noopener noreferrer">View résumé <span>↓</span></a>
          </div>
          <div className="hero-socials">
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={userData.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={"mailto:" + userData.email}>Email ↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-card">
            <img src={userData.avatar} alt={userData.name + " — Senior Software Engineer"} />
          </div>
        </div>
      </div>
      <div className="container hero-metrics">
        <div className="metrics-intro">A few numbers</div>
        <div className="metrics-grid">
          {userData.impact.map((item) => <div className="metric" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
