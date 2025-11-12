import { userData } from '../data/userData';

const Experience = () => {
  const experiences = userData.experience || [];
  
  const colorSchemes = [
    {
      gradient: "from-cyan-500/10 to-blue-500/10",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      companyColor: "text-cyan-600"
    },
    {
      gradient: "from-blue-400/10 to-cyan-400/10",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      companyColor: "text-blue-600"
    },
    {
      gradient: "from-sky-500/10 to-blue-400/10",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      companyColor: "text-sky-600"
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
          5+ years building enterprise software solutions across Fortune 500 companies
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 ${colors.iconBg} dark:bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-6 h-6 ${colors.iconColor} dark:opacity-90`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                        <p className={`text-xl font-semibold ${colors.companyColor} dark:opacity-90`}>{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className={`font-bold mt-1 flex-shrink-0 ${colors.companyColor} dark:opacity-90`}>▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
