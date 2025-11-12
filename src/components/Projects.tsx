const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Architected cloud-native e-commerce platform with 8+ microservices using Java Spring Boot and microservices design patterns. Implemented event-driven communication using Apache Kafka handling 1000+ events per second. Deployed on AWS ECS with Docker and Kubernetes achieving 99.9% uptime.",
      tech: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
      github: "https://github.com/officio-indrajeet",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Real-Time Data Processing Pipeline",
      description: "Built scalable data processing pipeline using Python, Apache Kafka, and AWS services to process and analyze streaming data from multiple sources in real-time with sub-100ms latency. Implemented Kafka Streams API processing 10K+ messages per second.",
      tech: ["Python", "Kafka", "AWS", "PostgreSQL", "Docker", "Grafana", "Prometheus"],
      github: "https://github.com/officio-indrajeet",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "SavdhanCity Smart City Platform",
      description: "Decision-support application for city managers using React.js, Redux Toolkit, and Django REST Framework. Built scalable microservices for Bin, Bus, and Air Quality services with comprehensive CRUD operations handling 100K+ records.",
      tech: ["React.js", "Redux", "Django", "PostgreSQL", "REST APIs", "Docker"],
      github: "https://github.com/officio-indrajeet",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Task Management API",
      description: "Full-stack RESTful web service with Node.js, Express.js, MongoDB, and React.js. Features JWT authentication, role-based access control, and real-time updates. Deployed on AWS with Docker and CI/CD pipeline.",
      tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux", "Docker", "AWS", "Jest"],
      github: "https://github.com/officio-indrajeet",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "URL Shortener",
      description: "Mini URL shortening service with custom short URLs and usage analytics. Built with Node.js, Express, and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/officio-indrajeet/urlShortener",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          A selection of projects showcasing my development skills and passion for building practical solutions
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/officio-indrajeet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-semibold hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
