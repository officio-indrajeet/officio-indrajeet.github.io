import { userData } from "../data/userData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container hero-main">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> Based in {userData.location} <span className="eyebrow-separator">/</span> Full Stack & Distributed Systems</div>
          <p className="hero-greeting">Senior Software Engineer</p>
          <h1>Building software that stays <em>reliable</em> as it scales.</h1>
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
            <div className="portrait-top"><span>PROFILE / 001</span><span><i></i> {userData.location}</span></div>
            <img src={userData.avatar} alt={userData.name + " — Senior Software Engineer"} />
            <div className="portrait-bottom"><span>ENGINEERING</span><span>THOUGHTFULLY BUILT</span></div>
          </div>
          <div className="hero-floating-card"><small>MY APPROACH</small><strong>Performance.<br/>Reliability.<br/>Scale.</strong><span></span></div>
          <div className="hero-side-label">BUILD · MEASURE · IMPROVE</div>
        </div>
      </div>
      <div className="container hero-metrics">
        <div className="metrics-intro">A few numbers<br/>from the work.</div>
        <div className="metrics-grid">
          {userData.impact.map((item) => <div className="metric" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
