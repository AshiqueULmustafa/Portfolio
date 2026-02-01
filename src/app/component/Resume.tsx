'use client';
import React from 'react';  
import { Eye, Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { use } from 'react';

const Resume = () => {
  const experience = [
    {
      title: 'Backend Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Building REST APIs and backend systems using Spring Boot and Node.js',
    },
  ];

  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Chittagong University of Engineering and Technology (CUET)',
      period: '2020 - 2024',
      description: 'Final year student with focus on algorithms and software engineering',
    },
  ];

  const achievements = [
    '1000+ problems solved across competitive programming platforms',
    '100+ contests participated in various competitive programming events',
    'Active member of CUET Computer Club and IEEE Computer Society',
    'Built multiple full-stack and robotics projects',
  ];

  return (
    <section id="resume" className="min-h-screen bg-gray-800 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-blue-400">Resume</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          A comprehensive overview of my skills, experience, and achievements
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Eye size={20} />
            View Full Resume
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-blue-400">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Briefcase className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-purple-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Award className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Achievements & Highlights</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Code className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Want to know more?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
