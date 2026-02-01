'use client';

import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Blog Backend',
      description:
        'A comprehensive REST API with full CRUD functionality for users and blog posts, featuring authentication, authorization, and database management.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      features: [
        'RESTful API architecture',
        'User authentication & authorization',
        'Complete CRUD operations',
        'MySQL database integration',
      ],
    },
    {
      title: 'Food Bank',
      description:
        'A food donation and request platform connecting donors with those in need, featuring real-time tracking and an intuitive interface.',
      tech: ['React', 'Node.js'],
      features: [
        'Real-time donation tracking',
        'Request management system',
        'Responsive user interface',
        'Efficient data flow',
      ],
    },
    {
      title: 'Vocabbly',
      description:
        'An Android vocabulary learning app with intelligent spaced repetition algorithms to help users effectively expand their vocabulary.',
      tech: ['Kotlin', 'Firebase'],
      features: [
        'Spaced repetition algorithm',
        'Progress tracking',
        'Firebase integration',
        'Intuitive Android UI',
      ],
    },
  ];

  const otherProjects = [
    { name: 'Line Follower Robot', category: 'Robotics' },
    { name: 'Soccerbot', category: 'Robotics' },
    { name: 'Maze Solver Robot', category: 'Robotics' },
    { name: 'CNN Image Classification', category: 'Machine Learning' },
    { name: 'Weather Prediction', category: 'Machine Learning' },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in backend development, full-stack
          applications, and mobile development
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <Github size={20} className="text-gray-400 hover:text-white" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <ExternalLink size={20} className="text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">
            Other <span className="text-blue-400">Projects</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="font-semibold mb-1">{project.name}</h4>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
