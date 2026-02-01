import { ExternalLink, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'Building Scalable REST APIs with Spring Boot',
      excerpt:
        'A deep dive into creating production-ready REST APIs using Spring Boot, covering best practices and design patterns.',
      date: 'January 2024',
      readTime: '8 min read',
      linkedInUrl: '#',
    },
    {
      title: 'Competitive Programming: Problem-Solving Strategies',
      excerpt:
        'Insights and techniques gained from solving 1000+ competitive programming problems and participating in contests.',
      date: 'December 2023',
      readTime: '6 min read',
      linkedInUrl: '#',
    },
    {
      title: 'Linux for Developers: Essential Commands and Workflows',
      excerpt:
        'A practical guide to working efficiently in Linux environments for software development and DevOps.',
      date: 'November 2023',
      readTime: '10 min read',
      linkedInUrl: '#',
    },
  ];

  return (
    <section id="blog" className="min-h-screen bg-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Blog & <span className="text-blue-400">Articles</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Sharing knowledge and insights from my journey in software development and competitive
          programming
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{article.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <a
                  href={article.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read more on LinkedIn
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            View All Articles on LinkedIn
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
