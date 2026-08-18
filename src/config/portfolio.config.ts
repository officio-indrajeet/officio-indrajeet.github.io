/**
 * Portfolio Configuration
 *
 * Central configuration for portfolio-wide settings.
 * Keep personal/content data in userData.ts where possible.
 */

export const portfolioConfig = {
  // ---------------------------------------------------------------------------
  // Personal Information
  // ---------------------------------------------------------------------------
  personal: {
    name: "Indrajeet Kumar",
    title: "Senior Software Engineer | Backend & Distributed Systems",
    bio: "Senior Software Engineer focused on scalable backend systems, distributed services, event-driven architectures, and cloud-native platforms. Experienced with Java, Spring Boot, Kafka, Kubernetes, AWS, and production observability.",
    location: "Ireland",
    company: "Fidelity Investments",
    email: "officio.indrajeet@gmail.com",
    phone: "+353 838014463",
    avatar: "/profile.jpg",
  },

  // ---------------------------------------------------------------------------
  // Social Links
  // ---------------------------------------------------------------------------
  social: {
    github: "https://github.com/officio-indrajeet",
    linkedin: "https://www.linkedin.com/in/indrajeet-1103/",
    website: "https://officio-indrajeet.github.io/",
    twitter: "",
  },

  // ---------------------------------------------------------------------------
  // GitHub
  // ---------------------------------------------------------------------------
  github: {
    username: "officio-indrajeet",
    showForks: false,
    maxRepos: 12,
  },

  // ---------------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------------
  theme: {
    primaryColor: "#06b6d4",
    secondaryColor: "#3b82f6",
    darkColor: "#0f172a",
    darkerColor: "#020617",
  },

  // ---------------------------------------------------------------------------
  // Core Skills
  // ---------------------------------------------------------------------------
  skills: [
    {
      category: "Backend & Distributed Systems",
      items: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Apache Kafka",
        "Kafka Streams",
        "Avro",
        "Schema Registry",
      ],
    },

    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS",
        "AWS EKS",
        "S3",
        "ECS",
        "Docker",
        "Kubernetes",
        "Helm",
        "IAM",
        "CI/CD",
        "Spinnaker",
      ],
    },

    {
      category: "Data",
      items: [
        "PostgreSQL",
        "Oracle",
        "Cassandra",
        "MongoDB",
        "Redis",
        "SQL",
        "MinIO",
      ],
    },

    {
      category: "Observability & Engineering",
      items: [
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
    },

    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Bash",
      ],
    },

    {
      category: "Additional",
      items: [
        "React",
        "Redux",
        "FastAPI",
        "RAG",
        "LLM Applications",
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // Engineering Focus
  // ---------------------------------------------------------------------------
  focusAreas: [
    "Backend Engineering",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Cloud-Native Development",
    "Performance Engineering",
    "Production Observability",
  ],

  // ---------------------------------------------------------------------------
  // SEO & Metadata
  // ---------------------------------------------------------------------------
  seo: {
    title:
      "Indrajeet Kumar | Senior Software Engineer | Backend & Distributed Systems",

    description:
      "Portfolio of Indrajeet Kumar, Senior Software Engineer specializing in Java, Spring Boot, distributed systems, Apache Kafka, Kubernetes, AWS, and cloud-native engineering.",

    keywords:
      "Indrajeet Kumar, Senior Software Engineer, Backend Engineer, Distributed Systems, Java, Spring Boot, Apache Kafka, Kubernetes, AWS, AWS EKS, Microservices, Cloud Native, Event Driven Architecture",
  },
};

export default portfolioConfig;