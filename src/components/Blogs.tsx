const Blogs = () => {
  const articles = [
    {
      category: "Java · Interview Preparation",
      title: "Top 20 Java 8 Streams Interview Questions Every Java Developer Should Know",
      description:
        "A practical guide to Stream fundamentals, map and flatMap, Collectors, reduction, lazy evaluation, parallel processing, and common interview scenarios.",
      readTime: "15–20 min read",
      href: "/blogs/java-8-streams/",
      tags: ["Java 8", "Streams", "Interview Questions"],
    },
  ];

  return (
    <section id="blogs" className="py-20 relative bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Blogs & Technical Writing
        </h2>
        <div className="w-20 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-14 max-w-3xl mx-auto text-lg leading-relaxed">
          Notes, tutorials, and practical explanations on Java, backend engineering, distributed systems, and software design.
        </p>

        <div className="max-w-5xl mx-auto grid gap-6">
          {articles.map((article) => (
            <article key={article.href} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 md:p-9 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800">{article.category}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-4xl">{article.description}</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {article.tags.map((tag) => <span key={tag} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">{tag}</span>)}
              </div>
              <a href={article.href} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors">
                Read article <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
