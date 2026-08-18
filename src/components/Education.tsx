import { userData } from "../data/userData";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 relative bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-16"></div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {userData.education.map((edu, index) => (
            <div
              key={edu.institution}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-7 md:p-8 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>

                {/* Main Information */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>

                      <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                        {edu.institution}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {edu.location}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 lg:text-right">
                      {edu.duration}
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-cyan-600 dark:text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>

                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      )}

                      {index === 0 && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Intelligent Systems
                        </span>
                      )}
                    </div>

                    {/* Coursework */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-5">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Relevant Areas
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certification */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Professional Certification
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  DEV250 JavaScript Business Rules — STIBO Systems, Aarhus,
                  Denmark
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;