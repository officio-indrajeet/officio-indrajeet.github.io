export const userData = {
  name: "Indrajeet Kumar",
  title: "Senior Software Engineer",
  bio: "Senior Software Engineer with 6+ years of experience across frontend and backend development. I build Java and Python services, React and Angular applications, Kafka pipelines, and cloud-native platforms.",
  location: "Ireland",
  company: "Fidelity Investments",
  email: "officio.indrajeet@gmail.com",
  phone: "+353 838014463",
  github: "https://github.com/officio-indrajeet",
  linkedin: "https://www.linkedin.com/in/indrajeet-1103/",
  website: "https://officio-indrajeet.github.io/",
  avatar: "/profile.jpg",

  impact: [
    { value: "6+", label: "Years in software" },
    { value: "2×", label: "SFTP throughput" },
    { value: "35%", label: "Lower data latency" },
    { value: "99.9%", label: "Payment uptime" },
  ],

  focusAreas: [
    { title: "Full-stack", description: "Java, Spring Boot, React, Angular, and TypeScript." },
    { title: "Distributed systems", description: "Kafka, microservices, streaming, and data pipelines." },
    { title: "Cloud", description: "AWS, Docker, Kubernetes, and CI/CD." },
    { title: "Quality", description: "Automated testing, observability, and production support." },
  ],

  skills: [
    { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "Bash", "SQL", "PL/SQL"] },
    { category: "Backend", items: ["Spring Boot", "Spring Framework", "Spring Security", "Spring Cloud Gateway", "Node.js", "Express.js", "Django REST Framework"] },
    { category: "Frontend", items: ["Angular", "React.js", "Redux", "Lit.js", "HTML5", "CSS3", "Responsive Design"] },
    { category: "Data & Messaging", items: ["Apache Kafka", "Elasticsearch", "Redis", "Cassandra", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "AWS RDS", "SQL Server", "Avro", "Apicurio Schema Registry", "JMS"] },
    { category: "Cloud & DevOps", items: ["AWS EC2", "S3", "Lambda", "IAM", "DynamoDB", "Route 53", "API Gateway", "ECS", "EKS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Spinnaker", "CI/CD"] },
    { category: "Testing & Tools", items: ["JUnit", "Mockito", "Pact", "Playwright", "Jest", "Mocha", "Prometheus", "Grafana", "Datadog", "Kibana", "SonarQube", "Git", "Gerrit", "Postman", "Jira", "Linux", "OpenAPI"] },
  ],

  about: [
    "I’m a Senior Software Engineer with 6+ years of experience across frontend applications, backend services, and distributed platforms.",
    "My work spans Java, Python, React, Angular, Kafka, and AWS. Recent results include doubling SFTP throughput and reducing data latency by 35%.",
    "I hold an MSc in Computer Science (Intelligent Systems) from Trinity College Dublin.",
  ],

  experience: [
    {
      company: "Fidelity Investments",
      position: "Senior Software Engineer",
      location: "Galway, Ireland",
      duration: "Jul 2026 - Present",
      achievements: [
        "Build Java/Spring Boot services, Kafka pipelines, Elasticsearch data flows, and Angular features for the Portfolio Construction platform.",
        "Delivered secure, feature-flagged REST APIs using OpenAPI and Spring Security to publish portfolio optimisation results to Kafka.",
        "Extended Kafka contracts and Elasticsearch position data for SMA, short-sell, and buy-to-cover workflows.",
        "Added Pact contract tests, Kafka-driven component tests, and Playwright coverage; led the Node.js 24 upgrade across six management UIs.",
      ],
    },
    {
      company: "Ericsson",
      position: "Software Engineer",
      location: "Athlone, Ireland (Hybrid)",
      duration: "Oct 2024 - Jul 2026",
      achievements: [
        "Redesigned the SFTP service, doubling throughput from 77 to 152 messages/sec and cutting processing time from 12 to 7 minutes.",
        "Owned three distributed services: SFTP File Transfer, Configurator, and RAN Parser.",
        "Built Kafka and Avro pipelines connecting telecom systems, MinIO storage, and data catalogue services.",
        "Automated vendor-spec parsing and Avro schema registration; raised test coverage above 90% across three services.",
        "Improved production observability with Prometheus, Grafana, Elasticsearch, and Kibana; managed releases with Spinnaker.",
      ],
    },
    {
      company: "Stibo Systems",
      position: "Software Developer",
      location: "Bangalore, India (Hybrid)",
      duration: "Sep 2021 - Aug 2023",
      achievements: [
        "Moved private-cloud services to a Cassandra, AWS, and Docker SaaS architecture, reducing infrastructure cost by 30%.",
        "Integrated Kafka streaming and reduced data latency by 35%.",
        "Built Java/Spring Boot services for an enterprise Master Data Management platform.",
        "Created a React large-file upload widget, averaging 25 seconds for 1 GB uploads.",
      ],
    },
    {
      company: "Oracle Financial Services Software",
      position: "Associate Consultant",
      location: "Bangalore, India (Onsite)",
      duration: "Jul 2019 - Sep 2021",
      achievements: [
        "Built a JMS and Spring bill-payment system processing 10,000+ transactions daily at 99.9% uptime.",
        "Reduced transaction time by 20% through code and Oracle query optimisation.",
        "Developed SQL and PL/SQL for reporting, debugging, and production support.",
      ],
    },
  ],

  education: [
    {
      institution: "Trinity College Dublin",
      degree: "MSc Computer Science",
      location: "Dublin, Ireland",
      duration: "Sep 2023 - Aug 2024",
      gpa: "3.8/4.0",
      coursework: ["Intelligent Systems", "Artificial Intelligence", "Machine Learning", "Distributed Systems", "Software Engineering"],
    },
    {
      institution: "BMS College of Engineering",
      degree: "BE Computer Engineering",
      location: "Bangalore, India",
      duration: "Aug 2015 - Jul 2019",
      gpa: "8.7/10 · First Class with Distinction",
      coursework: ["Data Structures & Algorithms", "Web Development", "Database Management Systems", "Computer Networks", "Operating Systems"],
    },
  ],

  projects: [
    {
      name: "RiskPulse",
      status: "In progress",
      statusTone: "in-progress",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Testcontainers", "Docker Compose"],
      description: "An event-driven transaction ingestion platform with validation, duplicate protection, and Kafka publishing.",
      highlights: [
        "REST endpoint accepts and validates transaction requests.",
        "Redis atomic SET NX with a 24-hour TTL prevents duplicate transaction IDs.",
        "Publishes accepted transactions to Kafka, keyed by account ID.",
        "Integration tests cover accepted, invalid, and duplicate requests using Testcontainers.",
      ],
      note: "The Kafka Streams risk-scoring service is still a skeleton; scoring logic is not implemented yet.",
      github: "https://github.com/officio-indrajeet/riskpulse",
    },
    {
      name: "PrepStack",
      status: "Active development",
      statusTone: "active",
      technologies: ["React", "JavaScript", "Vite", "CSS", "Local Storage"],
      description: "A personal interview preparation dashboard that turns study topics into a daily plan and tracks progress.",
      highlights: [
        "Daily study plan with DSA questions and topic-based lessons.",
        "Spaced revision schedule at 1, 3, 7, 14, and 30 days.",
        "Weekend mock interviews with a timer and result tracking.",
        "Progress history, streaks, study pace, and browser-based persistence.",
      ],
      note: "The interface is a standalone React app; repository currently uses Vite.",
      github: "https://github.com/officio-indrajeet/prepstack",
    },
  ],

  certification: "DEV250 JavaScript Business Rules — STIBO Systems, Aarhus, Denmark",
};
