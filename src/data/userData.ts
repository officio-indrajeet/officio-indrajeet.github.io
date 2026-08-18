export const userData = {
  name: "Indrajeet Kumar",

  title: "Senior Software Engineer | Backend & Distributed Systems",

  bio: "Senior Software Engineer focused on scalable backend systems, distributed services, event-driven architectures, and cloud-native platforms. Experienced with Java, Spring Boot, Kafka, Kubernetes, AWS, and production observability.",

  location: "Ireland",

  company: "Fidelity Investments",

  email: "officio.indrajeet@gmail.com",

  phone: "+353 838014463",

  github: "https://github.com/officio-indrajeet",

  linkedin: "https://www.linkedin.com/in/indrajeet-1103/",

  website: "https://officio-indrajeet.github.io/",

  avatar: "/profile.jpg",

  impact: [
    {
      value: "6+",
      label: "Years of engineering experience",
    },
    {
      value: "2×",
      label: "SFTP pipeline throughput improvement",
    },
    {
      value: "43%",
      label: "Reduction in PM processing time",
    },
    {
      value: "47K+",
      label: "Messages processed in a streaming pipeline",
    },
  ],

  focusAreas: [
    {
      title: "Distributed Systems",
      description:
        "Designing resilient microservices and event-driven systems with clear ownership, failure handling, and scalability in mind.",
    },
    {
      title: "Cloud-Native Engineering",
      description:
        "Building containerized services and production workloads using AWS, Kubernetes, EKS, Docker, and CI/CD.",
    },
    {
      title: "Performance Engineering",
      description:
        "Improving throughput, latency, resource utilization, and operational reliability with measurable outcomes.",
    },
    {
      title: "Production Engineering",
      description:
        "Using observability, metrics, dashboards, and operational tooling to make distributed systems easier to run.",
    },
  ],

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
        "Spinnaker",
        "GitHub",
        "GitHub Copilot",
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
        "JUnit",
        "Mockito",
        "Maven",
        "Gradle",
        "Jira",
      ],
    },
  ],

  about: [
    "Senior Software Engineer focused on backend engineering, distributed systems, and cloud-native platforms.",

    "Experience across enterprise technology and financial services, working with Java, Spring Boot, Kafka, Kubernetes, AWS, and production observability.",

    "Built and optimized high-throughput data pipelines, microservices, and event-driven systems with a strong focus on reliability and measurable performance improvements.",

    "MSc in Computer Science (Intelligent Systems) from Trinity College Dublin.",
  ],

  experience: [
    {
      company: "Fidelity Investments",

      position: "Senior Software Engineer",

      location: "Ireland",

      duration: "Jul 2026 - Present",

      achievements: [
        "Working on portfolio construction services within Fidelity's investment technology platform.",

        "Developing scalable backend services and contributing to cloud-native engineering practices using Java and Spring Boot.",

        "Contributing to production-quality software with a focus on reliability, maintainability, observability, and engineering best practices.",
      ],
    },

    {
      company: "Ericsson",

      position: "Software Engineer",

      location: "Athlone, Ireland",

      duration: "Oct 2024 - Jul 2026",

      achievements: [
        "Owned and developed microservices for Ericsson's Intelligent Automation platform using Java, Spring Boot, Kafka, Kubernetes, and cloud-native tooling.",

        "Redesigned the SFTP data pipeline, increasing throughput from 77 to 152 messages/sec (~97%) and reducing PM counter processing time from 12m22s to 7m03s (~43%).",

        "Engineered Kafka-based PM data processing pipelines and worked with Avro schemas, Schema Registry, and data catalog integrations.",

        "Owned SFTP File Transfer, Configurator, and RAN Parser services, including performance improvements, schema migration, and production support.",

        "Implemented production observability using Prometheus, Grafana, CNOM dashboards, and related operational tooling.",
      ],
    },

    {
      company: "Stibo Systems",

      position: "Software Developer",

      location: "Bangalore, India",

      duration: "Sep 2021 - Aug 2023",

      achievements: [
        "Developed enterprise software for a Master Data Management platform serving large global customers.",

        "Built a React-based large-file upload experience supporting files around 1GB with an average upload time of ~25 seconds.",

        "Integrated Apache Kafka streaming to support near real-time processing and reduced pipeline latency by approximately 35%.",

        "Contributed to AWS SaaS migration initiatives and CI/CD automation.",
      ],
    },

    {
      company: "Oracle Financial Services Software",

      position: "Associate Consultant",

      location: "Bangalore, India",

      duration: "Jul 2019 - Sep 2021",

      achievements: [
        "Developed Java and Spring-based financial services software supporting high-volume bill payment workflows.",

        "Worked with JMS, Oracle, SQL Server, production troubleshooting, root-cause analysis, and enterprise application support.",

        "Improved transaction processing flows and contributed to reliable production operations.",
      ],
    },
  ],

  education: [
    {
      institution: "Trinity College Dublin",

      degree: "Master of Science in Computer Science (Intelligent Systems)",

      location: "Dublin, Ireland",

      duration: "Sep 2023 - Aug 2024",

      gpa: "3.8/4.0",

      coursework: [
        "Advanced Software Engineering",
        "Machine Learning",
        "Distributed Systems",
        "Cloud Computing",
        "Artificial Intelligence",
      ],
    },

    {
      institution: "BMS College of Engineering",

      degree: "Bachelor of Engineering in Computer Science and Engineering",

      location: "Bangalore, India",

      duration: "Aug 2015 - Jul 2019",

      gpa: "8.7/10",

      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ],

  projects: [
    {
      name: "Distributed Event Processing Platform",

      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Kubernetes",
        "AWS",
        "PostgreSQL",
        "Redis",
      ],

      description:
        "A cloud-native reference architecture for event-driven backend services, designed around reliability, scalability, observability, and asynchronous communication.",

      highlights: [
        "Uses Kafka for asynchronous service communication and partition-based scaling.",

        "Includes retry, idempotency, health checks, metrics, and failure-handling patterns.",

        "Designed for deployment on Kubernetes with production-style observability.",
      ],

      github: "https://github.com/officio-indrajeet",
    },

    {
      name: "Cloud-Native Financial Platform",

      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "AWS EKS",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],

      description:
        "A portfolio and transaction-processing reference platform demonstrating backend architecture patterns relevant to financial technology.",

      highlights: [
        "Event-driven processing with Kafka and idempotent consumers.",

        "Caching and persistence patterns using Redis and PostgreSQL.",

        "Containerized services designed for Kubernetes and AWS EKS.",
      ],

      github: "https://github.com/officio-indrajeet",
    },

    {
      name: "Enterprise Knowledge Assistant",

      technologies: [
        "Python",
        "FastAPI",
        "RAG",
        "LLM",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],

      description:
        "An AI engineering project focused on retrieval-augmented generation for enterprise knowledge discovery and grounded answers.",

      highlights: [
        "Document ingestion, chunking, retrieval, and response generation pipeline.",

        "Designed around traceability and grounded responses rather than generic chatbot behavior.",

        "Containerized architecture suitable for cloud deployment.",
      ],

      github: "https://github.com/officio-indrajeet",
    },
  ],
};