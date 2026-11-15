export const userData = {
  name: "Indrajeet Kumar",
  title: "Senior Backend Software Engineer | Distributed Systems",
  bio: "Senior Backend Software Engineer with 6+ years of experience designing, scaling, and operating distributed backend systems in Java and Python. Focused on event-driven microservices, Kafka-based streaming pipelines, schema-managed data platforms, and reliable cloud-native services.",
  location: "Ireland",
  company: "Fidelity Investments",
  email: "officio.indrajeet@gmail.com",
  phone: "+353 838014463",
  github: "https://github.com/officio-indrajeet",
  linkedin: "https://www.linkedin.com/in/indrajeet-1103/",
  website: "https://officio-indrajeet.github.io/",
  avatar: "/profile.jpg",

  impact: [
    { value: "6+", label: "Years building backend systems" },
    { value: "2×", label: "SFTP ingestion throughput" },
    { value: "35%", label: "Lower data latency at Stibo" },
    { value: "99.9%", label: "Uptime on bill-payment system" },
  ],

  focusAreas: [
    {
      title: "Distributed Systems",
      description: "Designing and operating event-driven microservices, Kafka pipelines, schema-managed messages, and dependable service-to-service communication.",
    },
    {
      title: "Backend Engineering",
      description: "Building Java and Spring Boot services, secure REST APIs, contract-first interfaces, and data-intensive backend applications.",
    },
    {
      title: "Cloud & Platform Engineering",
      description: "Delivering containerised workloads with AWS, Docker, Kubernetes, CI/CD pipelines, deployment automation, and operational support.",
    },
    {
      title: "Quality & Observability",
      description: "Improving production confidence through contract, integration, component and end-to-end tests, plus metrics, logs and dashboards.",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "Bash", "SQL", "PL/SQL"],
    },
    {
      category: "Backend Frameworks",
      items: ["Spring Boot", "Spring Framework", "Spring Security", "Spring Cloud Gateway", "Node.js", "Express.js", "Django REST Framework"],
    },
    {
      category: "Distributed Systems & Data",
      items: ["Apache Kafka", "Elasticsearch", "Redis", "Cassandra", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "AWS RDS", "SQL Server", "Avro", "Apicurio Schema Registry", "JMS"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS EC2", "S3", "Lambda", "IAM", "DynamoDB", "Route 53", "API Gateway", "ECS", "EKS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Spinnaker", "CI/CD"],
    },
    {
      category: "Testing & Observability",
      items: ["JUnit", "Mockito", "Pact", "Playwright", "Jest", "Mocha", "Integration Testing", "ATDD", "Prometheus", "Grafana", "Datadog", "Kibana", "SonarQube"],
    },
    {
      category: "Frontend & Engineering",
      items: ["Angular", "React.js", "Redux", "Lit.js", "HTML5", "CSS3", "Responsive Design", "Git", "Gerrit", "Postman", "Jira", "Linux", "Agile", "Scrum", "OpenAPI", "System Design", "Code Review"],
    },
  ],

  about: [
    "Senior Backend Software Engineer with 6+ years of experience designing, scaling, and operating distributed backend systems in Java and Python, including event-driven microservices, Kafka-based streaming pipelines, and schema-managed data platforms.",
    "I have redesigned a mission-critical data ingestion service to double throughput and cut processing latency, and contributed to a private-cloud-to-SaaS migration built on Cassandra and AWS.",
    "My work spans the full software development lifecycle: system design, coding standards, code review, CI/CD, automated testing, and production support. I enjoy turning complex backend and data-processing requirements into reliable software.",
    "MSc in Computer Science (Intelligent Systems) from Trinity College Dublin.",
  ],

  experience: [
    {
      company: "Fidelity Investments",
      position: "Senior Software Engineer",
      location: "Galway, Ireland",
      duration: "Jul 2026 - Present",
      achievements: [
        "Own delivery on the Portfolio Construction platform across Java/Spring Boot services, Kafka pipelines, Elasticsearch, and Angular UIs.",
        "Built a secured, feature-flagged, contract-first REST endpoint using OpenAPI and role-based access via Spring Security to publish portfolio optimisation results to a Kafka output topic.",
        "Extended Kafka compute-output contracts with a margin-amount field for standalone SMA accounts, protecting the change with approval tests.",
        "Built Kafka ingestion for short-sell and buy-to-cover data and stored it, with four market-value fields, on composite positions in Elasticsearch.",
        "Resolved a production incident with fail-fast debit-balance validation and verified the behaviour with a Kafka-driven component test.",
        "Implemented consumer-driven Pact contract tests for a downstream model-assignment API and delivered a feature-toggled Short tab in Angular with Playwright end-to-end tests.",
        "Led the Node.js 24 end-of-life upgrade across six management UIs and standardised CI pipelines on npm ci.",
      ],
    },
    {
      company: "Ericsson",
      position: "Software Engineer",
      location: "Athlone, Ireland (Hybrid)",
      duration: "Oct 2024 - Jul 2026",
      achievements: [
        "Redesigned the SFTP File Transfer microservice architecture, API contracts, and data flow, increasing throughput from 77 to 152 messages per second and reducing processing time from 12 to 7 minutes.",
        "Owned and operated three mission-critical distributed microservices: SFTP File Transfer, Configurator, and RAN Parser.",
        "Built Kafka streaming pipelines for real-time Avro-encoded message processing and reliable file transfers across network systems, MinIO object storage, and data catalogue services.",
        "Led a Configurator proof of concept that automated telecom vendor-spec parsing, Avro schema generation, and registration in Apicurio Schema Registry.",
        "Diagnosed production bottlenecks using Prometheus, Grafana, Elasticsearch, and Kibana, and managed deployments and rollbacks through Spinnaker.",
        "Established JUnit and Mockito testing standards, helping drive 90%+ code coverage across three microservices.",
        "Developed Python RAN applications on Kubernetes and deployment-validation tooling in Bash and Python; mentored junior developers.",
      ],
    },
    {
      company: "Stibo Systems",
      position: "Software Developer",
      location: "Bangalore, India (Hybrid)",
      duration: "Sep 2021 - Aug 2023",
      achievements: [
        "Migrated private-cloud infrastructure to a distributed SaaS architecture using Cassandra, AWS, and Docker, reducing infrastructure cost by 30%.",
        "Integrated Apache Kafka for near real-time data streaming across services, reducing data latency by 35%.",
        "Developed Java and Spring Boot backend features and RESTful services for an Enterprise Master Data Management platform.",
        "Created a React.js large-file upload widget with chunking, progress tracking, and server-side reassembly, achieving an average upload time of 25 seconds for 1 GB files.",
        "Established unit-testing standards using Jest and JUnit, conducted code reviews, and contributed to Agile ceremonies and CI/CD improvements.",
      ],
    },
    {
      company: "Oracle Financial Services Software",
      position: "Associate Consultant",
      location: "Bangalore, India (Onsite)",
      duration: "Jul 2019 - Sep 2021",
      achievements: [
        "Designed and built a bill-payment system using JMS and Spring Framework, processing 10,000+ daily transactions with 99.9% uptime.",
        "Reduced transaction time by 20% through code optimisation and Oracle query tuning.",
        "Wrote complex SQL, stored procedures, and PL/SQL scripts for analysis, reporting, and production debugging across Oracle and SQL Server.",
        "Managed production support, monitoring alerts, coordinating across teams, and performing root-cause analysis.",
      ],
    },
  ],

  education: [
    {
      institution: "Trinity College Dublin",
      degree: "Master of Science in Computer Science",
      location: "Dublin, Ireland",
      duration: "Sep 2023 - Aug 2024",
      gpa: "3.8/4.0",
      coursework: ["Intelligent Systems", "Artificial Intelligence", "Machine Learning", "Distributed Systems", "Software Engineering"],
    },
    {
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering in Computer Engineering",
      location: "Bangalore, India",
      duration: "Aug 2015 - Jul 2019",
      gpa: "8.7/10 · First Class with Distinction",
      coursework: ["Data Structures & Algorithms", "Web Development", "Database Management Systems", "Computer Networks", "Operating Systems", "Software Engineering"],
    },
  ],

  projects: [
    {
      name: "Real-Time Order Processing Platform",
      technologies: ["Java", "Spring Boot", "Kafka", "React.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      description: "An event-driven microservices platform for order, inventory, payment, and notification workflows.",
      highlights: [
        "Processes orders asynchronously with Avro-serialised Kafka messages and schema validation.",
        "Uses Redis for high-throughput reads and idempotency, with Kafka dead-letter queues for fault tolerance.",
        "Includes Spring Cloud Gateway routing, rate limiting, and JWT-based authentication.",
        "Provides a React dashboard with real-time order tracking over WebSockets.",
        "Designed for Kubernetes deployment with Helm, autoscaling, health probes, and centralised logging.",
      ],
      github: "https://github.com/officio-indrajeet",
    },
    {
      name: "SavdhanCity Smart City Platform",
      technologies: ["React.js", "Redux Toolkit", "Django REST Framework", "PostgreSQL", "REST APIs"],
      description: "A full-stack decision-support application for city managers to optimise mobility services.",
      highlights: [
        "Built backend services for Bin, Bus, and Air Quality domains with CRUD operations.",
        "Designed REST APIs and a React/Redux application for city-management workflows.",
      ],
      github: "https://github.com/officio-indrajeet",
    },
  ],

  certification: "DEV250 JavaScript Business Rules — STIBO Systems, Aarhus, Denmark",
};