'use client';
import { use, useState } from 'react';
import { ExternalLink, Code2, Trophy, Zap, CheckCircle, ChevronDown } from 'lucide-react';

const ProblemSolving = () => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const platforms = [
    {
      name: 'Codeforces',
      icon: '/icons/icon-codeforce.png',
      handle: 'ashekul',
      stats: 'Pupil • Rating ~1200+ • 550+ solved',
      url: 'https://codeforces.com/profile/Tyrus',
      color: 'blue',
    },
    {
      name: 'LeetCode',
      icon: '/icons/icon-leetcode.png',
      handle: 'ashekul',
      stats: '35+ problems solved • Regular practice',
      url: 'https://leetcode.com/u/Ashique_007/',
      color: 'green',
    },
    {
      name: 'VJudge',
      icon: '/icons/icon-vjudge.png',
      handle: 'ashekul',
      stats: '141 problems solved',
      url: 'https://vjudge.net/user/Tyrus',
      color: 'orange',
    },
  ];

  const highlights = [
    'Strong in implementation & math',
    'Comfortable with time complexity + optimization',
    'Problem solving mindset from 100+ contests',
  ];

  const engineeringBenefits = [
    'Writes clean, efficient solutions under time constraints',
    'Strong debugging and edge-case handling',
    'Comfortable with algorithms used in backend and systems work',
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; hoverBorder: string }
    > = {
      blue: {
        bg: 'bg-blue-500/5',
        border: 'border-blue-400/20',
        text: 'text-blue-400',
        hoverBorder: 'hover:border-blue-400/50',
      },
      purple: {
        bg: 'bg-purple-500/5',
        border: 'border-purple-400/20',
        text: 'text-purple-400',
        hoverBorder: 'hover:border-purple-400/50',
      },
      green: {
        bg: 'bg-green-500/5',
        border: 'border-green-400/20',
        text: 'text-green-400',
        hoverBorder: 'hover:border-green-400/50',
      },
      orange: {
        bg: 'bg-orange-500/5',
        border: 'border-orange-400/20',
        text: 'text-orange-400',
        hoverBorder: 'hover:border-orange-400/50',
      },
    };
    return colors[color];
  };

  return (
    <section id="problem-solving" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Problem <span className="text-blue-400">Solving</span>
          </h2>
          <p className="text-xl text-gray-400 mb-3">
            Competitive programming & algorithmic problem-solving journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <Code2 size={16} /> Solved 1,000+ problems
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Trophy size={16} /> 100+ contests
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Zap size={16} /> Strong DS&A fundamentals
            </span>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 flex items-center gap-2 text-sm"
              >
                <CheckCircle size={16} className="text-blue-400" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => {
            const colors = getColorClasses(platform.color);
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-lg p-6 backdrop-blur-sm transition-all duration-300 ${colors.hoverBorder} hover:transform hover:scale-105 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">
                      <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold">{platform.name}</h3>
                  </div>
                  <ExternalLink
                    size={18}
                    className={`${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">@{platform.handle}</p>
                  <p className={`${colors.text} text-sm font-semibold`}>{platform.stats}</p>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-2 rounded-lg font-semibold text-sm transition-colors border ${colors.border} ${colors.text} hover:bg-gray-800/50`}
                >
                  View Profile
                </a>
              </div>
            );
          })}
        </div>

        {/* <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedPanel(!expandedPanel)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-lg font-semibold">
                What this means for <span className="text-blue-400">engineering work</span>
              </h3>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  expandedPanel ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedPanel && (
              <div className="px-6 pb-4 border-t border-gray-700">
                <ul className="space-y-3 pt-4">
                  {engineeringBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div> */}

        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Through consistent problem-solving practice, I've developed strong algorithmic
            thinking and the ability to build efficient, scalable solutions under pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
