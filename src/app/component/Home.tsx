'use client';

import { ArrowRight, Download, Eye } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ashekul Mostafa
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Final-year Computer Science & Engineering Student
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate problem solver with a strong competitive programming background,
            tackling complex challenges and building robust backend solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#resume')}
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/50"
            >
              <Eye size={20} />
              View Resume
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="/resume.pdf"
              download
              className="group px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-3 border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
