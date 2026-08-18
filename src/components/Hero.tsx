import { userData } from "../data/userData";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-left animate-slide-up">
            {/* Role Label */}
            <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <span className="w-8 h-px bg-cyan-500 dark:bg-cyan-400"></span>
              Senior Software Engineer
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
              {userData.name}
            </h1>

            {/* Specialization */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-600 dark:text-cyan-400">
              Backend & Distributed Systems
            </h2>

            {/* Supporting Statement */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {userData.bio}
            </p>

            {/* Technology Highlights */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
              {[
                "Java",
                "Spring Boot",
                "Kafka",
                "Kubernetes",
                "AWS",
                "Microservices",
              ].map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 dark:bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002-2 2 0 002 2z"
                  />
                </svg>
                View Experience
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-2">
              <a
                href={userData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.802 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </a>

              <a
                href={userData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={`mailto:${userData.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20"></div>

              <img
                src={userData.avatar}
                alt={`${userData.name} - Senior Software Engineer`}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-top shadow-2xl ring-8 ring-white dark:ring-gray-800"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;