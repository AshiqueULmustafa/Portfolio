'use client';

import { GraduationCap, Trophy, Server } from 'lucide-react';

const About = () => {
  const organizations = [
    {
      name: 'CUET Computer Club',
      description: 'Active member fostering tech community and innovation',
    },
    {
      name: 'IEEE Computer Society',
      description: 'Contributing to professional development and networking',
    },
    {
      name: 'RMA – Robo Mechatronics Association',
      description: 'Building and programming autonomous robots',
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm a final-year Computer Science & Engineering student at{' '}
                  <span className="text-blue-400">
                    Chittagong University of Engineering and Technology (CUET)
                  </span>
                  , where I've been honing my skills in software development and system design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Trophy className="text-purple-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Competitive Programming</h3>
                <p className="text-gray-400 leading-relaxed">
                  With a strong competitive programming background, I've solved{' '}
                  <span className="text-purple-400">1000+ problems</span> and participated in{' '}
                  <span className="text-purple-400">100+ contests</span>. This experience has
                  sharpened my problem-solving abilities and algorithmic thinking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Server className="text-green-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comfortable working in{' '}
                  <span className="text-green-400">Linux environments</span> and building
                  scalable backend systems. I enjoy architecting robust solutions and optimizing
                  system performance.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Organizations</h3>
            <div className="space-y-4">
              {organizations.map((org, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">{org.name}</h4>
                  <p className="text-gray-400">{org.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about learning new technologies and solving real-world problems through
            code. Whether it's optimizing algorithms, building APIs, or working with cloud
            infrastructure, I'm always excited to take on new challenges and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
