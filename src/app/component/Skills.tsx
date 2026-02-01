import { Code, Layers, Database, Cloud, Wrench, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['Spring Boot', 'Node.js', 'React.js'],
      color: 'purple',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'green',
    },
    {
      title: 'Systems & Cloud',
      icon: Cloud,
      skills: ['Linux (Ubuntu)', 'AWS EC2'],
      color: 'cyan',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub'],
      color: 'orange',
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Kotlin (Android)'],
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-400/50', text: 'text-blue-400' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-400/50', text: 'text-purple-400' },
      green: { bg: 'bg-green-500/10', border: 'border-green-400/50', text: 'text-green-400' },
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-400/50', text: 'text-cyan-400' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-400/50', text: 'text-orange-400' },
      pink: { bg: 'bg-pink-500/10', border: 'border-pink-400/50', text: 'text-pink-400' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`p-6 bg-gray-900/50 border ${colors.border} rounded-lg hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies. Always eager to expand my
            toolkit and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
