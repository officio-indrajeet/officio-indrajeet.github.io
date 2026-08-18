import { userData } from "../data/userData";

const Experience = () => {
  const experiences = userData.experience || [];

  return (
    <section
      id="experience"
      className="py-20 relative bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Professional Experience
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Building scalable backend systems, distributed services, and
          cloud-native applications across enterprise technology and financial
          services.
        </p>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isCurrentRole = index === 0;

              return (
                <article
                  key={`${exp.company}-${exp.position}`}
                  className="relative md:pl-16"
                >
                  {/* Timeline Marker */}
                  <div className="hidden md:flex absolute left-0 top-2 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-cyan-500 dark:border-cyan-400 items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`rounded-2xl border p-7 md:p-8 transition-all duration-300 ${
                      isCurrentRole
                        ? "border-cyan-300 dark:border-cyan-700 bg-cyan-50/40 dark:bg-cyan-900/10 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg"
                    }`}
                  >
                    {/* Current Role Badge */}
                    {isCurrentRole && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        Current Role
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>

                        <p className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 lg:text-right">
                        <div className="flex items-center gap-2 lg:justify-end">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5v12a2 2 0 002 2h14"
                            />
                          </svg>

                          <span>{exp.duration}</span>
                        </div>

                        <div className="flex items-center gap-2 lg:justify-end">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>

                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                        Key Contributions
                      </h4>

                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 flex-shrink-0"></span>

                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Tags */}
                    {index === 0 && (
                      <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "Spring Boot",
                            "Microservices",
                            "AWS",
                            "Kubernetes",
                            "Cloud Native",
                          ].map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "Spring Boot",
                            "Kafka",
                            "Kubernetes",
                            "Avro",
                            "Prometheus",
                            "Grafana",
                          ].map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "React",
                            "Kafka",
                            "AWS",
                            "Microservices",
                            "CI/CD",
                          ].map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "Spring",
                            "JMS",
                            "Oracle",
                            "SQL Server",
                            "Enterprise Applications",
                          ].map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;