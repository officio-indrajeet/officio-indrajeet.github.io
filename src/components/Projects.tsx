import { userData } from "../data/userData";

const projects = [
  { title: "Distributed Event Processing Platform", category: "BACKEND / DISTRIBUTED SYSTEMS", description: "A cloud-native backend platform demonstrating event-driven microservices, asynchronous communication, scalable consumers, idempotent processing, failure handling and production-style observability.", tech: ["Java", "Spring Boot", "Kafka", "Kubernetes", "AWS", "PostgreSQL", "Redis"], github: "https://github.com/officio-indrajeet", number: "01" },
  { title: "Cloud-Native Financial Platform", category: "CLOUD / FINTECH", description: "A financial technology reference application designed around scalable backend services, transaction workflows, Kafka-based communication, Redis caching and PostgreSQL persistence.", tech: ["Java", "Spring Boot", "Kafka", "AWS EKS", "PostgreSQL", "Redis"], github: "https://github.com/officio-indrajeet", number: "02" },
  { title: "Enterprise Knowledge Assistant", category: "APPLIED AI", description: "A retrieval-augmented knowledge assistant for finding relevant information in enterprise documents, with modular ingestion, retrieval and response-generation services.", tech: ["Python", "FastAPI", "RAG", "PostgreSQL", "Docker", "AWS"], github: "https://github.com/officio-indrajeet", number: "03" },
  { title: "SavdhanCity Smart City Platform", category: "FULL STACK", description: "A decision-support platform designed to help city administrators monitor transportation, waste management and environmental services.", tech: ["React", "Redux", "Django", "PostgreSQL", "REST APIs"], github: "https://github.com/officio-indrajeet", number: "04" },
  { title: "URL Shortener", category: "BACKEND", description: "A lightweight URL shortening service supporting custom short URLs and usage tracking, built to explore REST API design, persistence and request handling.", tech: ["Node.js", "Express", "MongoDB", "EJS"], github: "https://github.com/officio-indrajeet/urlShortener", number: "05" },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="section-head section-head-split">
          <div><span className="section-kicker">04 / Selected work</span><h2>Ideas turned into<br/><em>working systems.</em></h2></div>
          <div className="section-side-copy"><p className="section-deck">A selection of engineering projects across distributed systems, cloud platforms, full-stack development and applied AI.</p><a className="inline-link" href={userData.github} target="_blank" rel="noopener noreferrer">Explore GitHub <span>↗</span></a></div>
        </div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className="project-card-head"><span>PROJECT / {project.number}</span><span>{project.category}</span></div>
            <div className="project-visual" aria-hidden="true"><div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div><span>{project.number}</span><i>↗</i></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
