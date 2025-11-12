/**
 * Portfolio Configuration File
 * 
 * This file contains all customizable settings for your portfolio.
 * Update these values to personalize your portfolio website.
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Indrajeet Kumar",
    title: "Software Engineer | Full-Stack Developer",
    bio: "Results-driven Software Engineer with 5.5 years of experience designing and deploying cloud-native microservices and distributed systems. Expertise in Java, Spring Boot, Apache Kafka, Kubernetes, Docker, and AWS.",
    location: "Athlone, Ireland",
    company: "Ericsson",
    email: "officio.indrajeet@gmail.com",
    phone: "+353 838014463",
    avatar: "/profile.jpg",
  },

  // Social Links
  social: {
    github: "https://github.com/officio-indrajeet",
    linkedin: "https://www.linkedin.com/in/indrajeet-1103/",
    website: "https://officio-indrajeet.github.io/",
    twitter: "",
  },

  // GitHub Settings
  github: {
    username: "officio-indrajeet",
    showForks: false,
    maxRepos: 12,
  },

  // Theme Colors (Tailwind CSS)
  theme: {
    primaryColor: "#06b6d4", // Cyan
    secondaryColor: "#3b82f6", // Blue
    darkColor: "#0f172a",
    darkerColor: "#020617",
  },

  // Skills & Technologies
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "SQL", "C", "C++", "HTML", "CSS", "Bash/Shell Scripting"]
    },
    {
      category: "Backend Technologies",
      items: ["Spring Boot", "Spring Framework", "Microservices", "REST API", "Django", "Express.js", "Hibernate", "JPA", "JDBC"]
    },
    {
      category: "Frontend Technologies",
      items: ["React.js", "Redux Toolkit", "jQuery", "Oracle JET", "Lit.js"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3, Lambda, ECS, RDS, IAM, DynamoDB)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Spinnaker", "Helm"]
    },
    {
      category: "Messaging & Streaming",
      items: ["Apache Kafka", "Kafka Streams", "Avro", "Protobuf", "JMS", "Schema Registry", "APIcurio"]
    },
    {
      category: "Databases",
      items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "SQL Server", "AWS RDS", "Cassandra", "MinIO", "Redis"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Bitbucket", "Maven", "Gradle", "JIRA", "Confluence", "Postman", "Grafana", "Prometheus", "Elasticsearch"]
    },
    {
      category: "Testing & Methodologies",
      items: ["JUnit", "Mockito", "Integration Testing", "Unit Testing", "Agile/Scrum", "TDD"]
    },
    {
      category: "Machine Learning",
      items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "TensorFlow"]
    }
  ],

  // About Section
  about: [
    "🎓 Master's in Computer Science (Intelligent Systems) from Trinity College Dublin - GPA: 3.8/4.0",
    "💼 Currently working as Software Engineer at Ericsson, Athlone, Ireland",
    "🚀 5.5 years of experience in cloud-native microservices and distributed systems",
    "⚡ Proven track record of optimizing system performance - reduced latency by 35% and improved throughput by 2x",
    "☁️ Expert in Java, Spring Boot, Apache Kafka, Kubernetes, Docker, and AWS",
    "🔧 Strong background in full-stack development, Python automation, and agile methodologies"
  ],

  // SEO & Meta
  seo: {
    title: "Indrajeet Kumar - Software Engineer | Full-Stack Developer",
    description: "Portfolio of Indrajeet Kumar, a Software Engineer with 5.5 years of experience in cloud-native microservices, distributed systems, Java, Spring Boot, Apache Kafka, Kubernetes, and AWS",
    keywords: "Software Engineer, Full Stack Developer, Java, Spring Boot, Microservices, Apache Kafka, Kubernetes, Docker, AWS, React, Python, Cloud Native",
  },
};

export default portfolioConfig;
