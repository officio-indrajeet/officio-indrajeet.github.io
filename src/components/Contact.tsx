import { userData } from "../data/userData";

const Contact = () => {
  const contactLinks = [
    {
      title: "Email",
      value: userData.email,
      href: `mailto:${userData.email}`,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },

    {
      title: "LinkedIn",
      value: "indrajeet-1103",
      href: userData.linkedin,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },

    {
      title: "GitHub",
      value: "officio-indrajeet",
      href: userData.github,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.802 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
        </svg>
      ),
    },

    {
      title: "LeetCode",
      value: "indra47",
      href: "https://leetcode.com/indra47/",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Let's Connect
        </h2>

        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Interested in software engineering, distributed systems,
          cloud-native platforms, or potential opportunities? Feel free to
          connect.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.title === "Email" ? undefined : "_blank"}
                rel={link.title === "Email" ? undefined : "noopener noreferrer"}
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500 dark:bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {link.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {link.title}
                    </p>

                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Professional CTA */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-10 text-center shadow-sm">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Open to the right opportunities
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-7 max-w-xl mx-auto leading-relaxed">
              I'm interested in challenging backend, distributed systems,
              cloud engineering, and software engineering opportunities where
              I can build reliable systems at scale.
            </p>

            <a
              href={`mailto:${userData.email}`}
              className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all duration-300"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2V7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;