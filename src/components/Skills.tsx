const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "Bash", "C/C++"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Java", "Microservices", "REST APIs", "Node.js", "Express.js", "Django"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "HTML5", "CSS3", "jQuery", "Responsive Design"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "AWS RDS", "Redis"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Spinnaker"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Tools",
      skills: ["Git", "Kafka", "Elasticsearch", "Grafana", "Prometheus", "Jira"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "TensorFlow"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          A comprehensive toolkit built through continuous learning and hands-on project experience
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-600 transition-all duration-300 cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Card */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              💡 Specialized in <span className="text-cyan-600 dark:text-cyan-400 font-bold">Microservices Architecture</span>, <span className="text-cyan-600 dark:text-cyan-400 font-bold">Cloud-Native Development</span>, and <span className="text-cyan-600 dark:text-cyan-400 font-bold">DevOps</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
