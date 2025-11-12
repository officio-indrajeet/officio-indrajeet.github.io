const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Trinity College Dublin",
      location: "Dublin, Ireland",
      period: "September 2023 – August 2024",
      gpa: "3.8/4.0",
      specialization: "Intelligent Systems (AI, ML, Distributed Systems, Software Engineering)",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "BMS College of Engineering",
      location: "Bangalore, India",
      period: "August 2015 – July 2019",
      gpa: "8.7/10 CGPA",
      grade: "First Class with Distinction",
      coursework: "Data Structures & Algorithms, Web Development, DBMS, Computer Networks, OS, Software Engineering",
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full mb-16"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-50 dark:opacity-30`}></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">GPA: {edu.gpa}</span>
                    {edu.grade && <span className="text-gray-600 dark:text-gray-400">• {edu.grade}</span>}
                  </div>

                  {edu.specialization && (
                    <div className="pt-2">
                      <p className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">Specialization:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.specialization}</p>
                    </div>
                  )}

                  {edu.coursework && (
                    <div className="pt-2">
                      <p className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">Relevant Coursework:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.coursework}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div className="text-left">
                <p className="font-bold text-gray-900 dark:text-white">Certification</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">DEV250 JavaScript Business Rules - STIBO Systems, Aarhus, Denmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
