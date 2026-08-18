const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      description: "Primary languages used for production software engineering",
      skills: [
        "Java",
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Bash",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },

    {
      title: "Backend & Distributed Systems",
      description: "Building scalable services and event-driven architectures",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Apache Kafka",
        "Kafka Streams",
        "Avro",
        "Schema Registry",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      ),
    },

    {
      title: "Cloud & Infrastructure",
      description: "Cloud-native development, containers, and orchestration",
      skills: [
        "AWS",
        "AWS EKS",
        "S3",
        "Docker",
        "Kubernetes",
        "Helm",
        "IAM",
        "Spinnaker",
        "CI/CD",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },

    {
      title: "Databases & Storage",
      description: "Relational, NoSQL, caching, and distributed storage",
      skills: [
        "PostgreSQL",
        "Oracle",
        "Cassandra",
        "MongoDB",
        "Redis",
        "MySQL",
        "SQL Server",
        "MinIO",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
    },

    {
      title: "Observability & Engineering",
      description: "Monitoring, reliability, testing, and developer tooling",
      skills: [
        "Datadog",
        "Prometheus",
        "Grafana",
        "Elasticsearch",
        "GitHub",
        "GitHub Copilot",
        "Maven",
        "Gradle",
        "JUnit",
        "Mockito",
        "Jira",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2zm12-3c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2z"
          />
        </svg>
      ),
    },

    {
      title: "Frontend & AI",
      description: "Supporting technologies for product development and AI",
      skills: [
        "React",
        "Redux",
        "HTML",
        "CSS",
        "FastAPI",
        "RAG",
        "LLM Applications",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const coreTechnologies = [
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Microservices",
    "AWS",
    "AWS EKS",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "Redis",
  ];

  return (
    <section
      id="skills"
      className="py-20 relative bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          A production-focused technology stack built through experience
          designing backend services, distributed systems, and cloud-native
          applications.
        </p>

        {/* Core Technologies */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-6 md:p-7">
            <div className="text-center mb-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Core Technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {coreTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800 font-semibold text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-7 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-cyan-500 dark:bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-7">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-white">
                Core specialization:
              </span>{" "}
              backend engineering, distributed systems, event-driven
              architecture, cloud-native development, and production
              observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;