import { userData } from "../data/userData";

const Projects = () => {
  const projects = [
    {
      title: "Distributed Event Processing Platform",
      description:
        "A cloud-native backend platform demonstrating event-driven microservices architecture using Kafka. The system focuses on asynchronous communication, scalable consumers, idempotent processing, failure handling, and production-style observability.",
      tech: [
        "Java",
        "Spring Boot",
        "Apache Kafka",
        "Docker",
        "Kubernetes",
        "AWS",
        "PostgreSQL",
        "Redis",
      ],
      github: "https://github.com/officio-indrajeet",
      category: "Backend & Distributed Systems",
    },

    {
      title: "Cloud-Native Financial Platform",
      description:
        "A financial technology reference application designed around scalable backend services and event-driven processing. Demonstrates transaction workflows, Kafka-based communication, Redis caching, PostgreSQL persistence, containerization, and AWS EKS deployment.",
      tech: [
        "Java",
        "Spring Boot",
        "Kafka",
        "AWS EKS",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      github: "https://github.com/officio-indrajeet",
      category: "Cloud & FinTech",
    },

    {
      title: "Enterprise Knowledge Assistant",
      description:
        "An AI-powered knowledge assistant using retrieval-augmented generation to retrieve relevant information from enterprise documents and generate grounded responses. Designed with a modular API architecture for ingestion, retrieval, and generation.",
      tech: [
        "Python",
        "FastAPI",
        "RAG",
        "LLM",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      github: "https://github.com/officio-indrajeet",
      category: "AI Engineering",
    },

    {
      title: "SavdhanCity Smart City Platform",
      description:
        "A decision-support platform designed to help city administrators monitor and manage smart-city services. Built with React and Django REST APIs with modular services for transportation, waste management, and environmental monitoring.",
      tech: [
        "React",
        "Redux",
        "Django",
        "PostgreSQL",
        "REST APIs",
        "Docker",
      ],
      github: "https://github.com/officio-indrajeet",
      category: "Full Stack",
    },

    {
      title: "URL Shortener",
      description:
        "A lightweight URL shortening service supporting custom short URLs and usage tracking. Built as a compact backend application demonstrating REST API design, persistence, and request handling.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/officio-indrajeet/urlShortener",
      category: "Backend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Selected Projects
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          A selection of backend, distributed systems, cloud, and AI projects
          that demonstrate how I approach architecture, scalability, and
          production engineering.
        </p>

        {/* Project Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl p-7 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Category */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800">
                  {project.category}
                </span>

                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white dark:bg-gray-900 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.802 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
                </svg>

                View on GitHub

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href={userData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-semibold hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524-.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.802 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
            </svg>

            View All Projects on GitHub

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;