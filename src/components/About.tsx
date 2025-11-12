import { userData } from '../data/userData';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto mb-16"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Software Engineer with 5+ years of backend and full-stack development experience specializing in 
                Node.js, JavaScript, Python, and Java. Currently working at Ericsson in Athlone, Ireland, developing 
                cloud-native microservices for the Intelligent Automation Platform.
              </p>
              <p>
                Proven track record building scalable RESTful web services, microservices architectures, and cloud-native 
                applications. Strong expertise in Docker containerization, Kubernetes orchestration, AWS cloud services, 
                and SQL/NoSQL databases. Experienced in Agile/Scrum methodologies and mentoring junior developers.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Athlone, Ireland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">MSc Computer Science - Trinity College Dublin (3.8 GPA)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Current Role</h3>
                  <p className="text-gray-600 dark:text-gray-400">Software Engineer at Ericsson</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Achievements & Connect */}
          <div className="space-y-6">
            {/* Key Achievements Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">Optimized SFTP microservice performance by 100% at Ericsson</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">Migrated infrastructure to SaaS resulting in 30% cost reduction</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">Built bill payment system processing 10,000+ daily transactions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">5+ years experience across Fortune 500 companies</p>
                </li>
              </ul>
            </div>

            {/* Let's Connect Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 text-cyan-50 dark:text-cyan-100">
                I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
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
