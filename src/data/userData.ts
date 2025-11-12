export const userData = {
  name: "Indrajeet Kumar",
  title: "Software Engineer | Full-Stack Developer",
  bio: "Results-driven Software Engineer with 5.5 years of experience designing and deploying cloud-native microservices and distributed systems. Expertise in Java, Spring Boot, Apache Kafka, Kubernetes, Docker, and AWS.",
  location: "Athlone, Ireland",
  company: "Ericsson",
  email: "officio.indrajeet@gmail.com",
  phone: "+353 838014463",
  github: "https://github.com/officio-indrajeet",
  linkedin: "https://www.linkedin.com/in/indrajeet-1103/",
  website: "https://officio-indrajeet.github.io/",
  avatar: "/profile.jpg",
  
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
  
  about: [
    "🎓 Master's in Computer Science (Intelligent Systems) from Trinity College Dublin - GPA: 3.8/4.0",
    "💼 Currently working as Software Engineer at Ericsson, Athlone, Ireland",
    "🚀 5.5 years of experience in cloud-native microservices and distributed systems",
    "⚡ Proven track record of optimizing system performance - reduced latency by 35% and improved throughput by 2x",
    "☁️ Expert in Java, Spring Boot, Apache Kafka, Kubernetes, Docker, and AWS",
    "🔧 Strong background in full-stack development, Python automation, and agile methodologies"
  ],

  experience: [
    {
      company: "Ericsson",
      position: "Software Engineer",
      location: "Athlone, Ireland (Hybrid)",
      duration: "Oct 2024 - Present",
      achievements: [
        "Architected and developed cloud-native microservices using Java and Spring Boot for Ericsson Intelligent Automation Platform (EIAP)",
        "Engineered high-performance Kafka-based data streaming pipeline processing 47.5K messages",
        "Optimized SFTP microservice achieving 2x throughput improvement (77 to 152 messages/sec) and 43% reduction in processing time",
        "Developed and deployed rApps (RAN Applications) using Python on Kubernetes clusters",
        "Implemented observability solutions using Prometheus, Grafana, CNOM Dashboard, and DDP"
      ]
    },
    {
      company: "Stibo Systems",
      position: "Software Developer",
      location: "Bangalore, India (Hybrid)",
      duration: "Sep 2021 - Aug 2023",
      achievements: [
        "Developed enterprise-grade features for Master Data Management (MDM) platform serving Fortune 500 clients",
        "Engineered React.js-based file upload widget supporting chunked upload for files up to 1GB",
        "Spearheaded cloud migration initiative to AWS-based SaaS model, reducing operational costs by 40%",
        "Integrated Apache Kafka for near real-time data processing, reducing data pipeline latency by 35%",
        "Implemented CI/CD pipelines using Jenkins, reducing release cycle time by 50%"
      ]
    },
    {
      company: "Oracle Financial Services Software",
      position: "Associate Consultant",
      location: "Bangalore, India (Onsite)",
      duration: "Jul 2019 - Sep 2021",
      achievements: [
        "Designed and built bill payment system using JMS and Spring Framework, processing 10,000+ daily transactions with 99.9% uptime",
        "Optimized payment processing flow reducing transaction time by 20%, improving customer satisfaction by 15%",
        "Managed production support as part of RTB Team, troubleshooting issues and performing root cause analysis",
        "Wrote SQL queries and stored procedures for data analysis in Oracle and SQL Server databases"
      ]
    }
  ],

  education: [
    {
      institution: "Trinity College Dublin",
      degree: "Master of Science in Computer Science (Intelligent Systems)",
      location: "Dublin, Ireland",
      duration: "Sep 2023 - Aug 2024",
      gpa: "3.8/4.0",
      coursework: ["Advanced Software Engineering", "Machine Learning", "Distributed Systems", "Cloud Computing", "Artificial Intelligence"]
    },
    {
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      location: "Bangalore, India",
      duration: "Aug 2015 - Jul 2019",
      gpa: "8.7/10 (First Class with Distinction)",
      coursework: ["Data Structures and Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Software Engineering"]
    }
  ],

  projects: [
    {
      name: "E-Commerce Microservices Platform",
      technologies: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes", "AWS"],
      description: "Architected cloud-native e-commerce platform with 8+ microservices using Java Spring Boot and microservices design patterns",
      highlights: [
        "Implemented event-driven communication using Apache Kafka handling 1000+ events per second",
        "Deployed on AWS ECS with Docker and Kubernetes achieving 99.9% uptime",
        "Integrated AWS services (S3, RDS, DynamoDB, API Gateway) with JWT-based authentication"
      ],
      github: "https://github.com/officio-indrajeet"
    },
    {
      name: "Real-Time Data Processing Pipeline",
      technologies: ["Python", "Kafka", "AWS", "PostgreSQL", "Docker"],
      description: "Built scalable data processing pipeline to process and analyze streaming data from multiple sources in real-time",
      highlights: [
        "Implemented Kafka Streams API processing 10K+ messages per second with sub-100ms latency",
        "Created monitoring dashboards using Grafana and Prometheus",
        "Deployed on AWS EKS with Kubernetes for production workloads with auto-scaling"
      ],
      github: "https://github.com/officio-indrajeet"
    },
    {
      name: "SavdhanCity: Smart City Management Platform",
      technologies: ["React.js", "Django", "PostgreSQL", "AWS"],
      description: "Developed full-stack decision-support application for city managers optimizing urban mobility services",
      highlights: [
        "Built with React.js, Redux Toolkit, and Django REST Framework with real-time data visualization",
        "Designed RESTful microservices handling CRUD operations for 100K+ records",
        "Deployed on AWS EC2 with Docker and CI/CD using GitHub Actions"
      ],
      github: "https://github.com/officio-indrajeet"
    }
  ],

  certifications: [
    {
      name: "DEV250 - JavaScript Business Rules",
      issuer: "STIBO Systems",
      location: "Aarhus, Denmark"
    }
  ]
};
