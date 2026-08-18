import { userData } from "../data/userData";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto mb-16"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-5">
              {userData.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Engineering Focus */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Build
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {userData.focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-2.5 h-2.5 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                    </div>

                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {area.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-5 pt-2">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {userData.location}
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Education
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    MSc Computer Science — Trinity College Dublin
                  </p>
                </div>
              </div>

              {/* Current Role */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Current Role
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {userData.title} at {userData.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Engineering Impact */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Engineering Impact
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {userData.impact.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-gray-50 dark:bg-gray-800 p-4"
                  >
                    <div className="text-2xl font-bold text-cyan-500 dark:text-cyan-400 mb-1">
                      {item.value}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Stack */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                Core Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "Kafka",
                  "Kubernetes",
                  "AWS",
                  "EKS",
                  "Docker",
                  "Datadog",
                  "PostgreSQL",
                  "Microservices",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Let's Connect
              </h3>

              <p className="mb-6 text-cyan-50 dark:text-cyan-100">
                Interested in backend engineering, distributed systems,
                cloud-native platforms, or building reliable software at
                scale? I'd be happy to connect.
              </p>

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;