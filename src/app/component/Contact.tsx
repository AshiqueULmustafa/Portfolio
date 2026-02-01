'use client';

import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      value: 'ashekul@example.com',
      href: 'mailto:ashekul@example.com',
      color: 'blue',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      value: 'linkedin.com/in/ashekul',
      href: '#',
      color: 'blue',
    },
    {
      name: 'GitHub',
      icon: Github,
      value: 'github.com/ashekul',
      href: '#',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; hover: string; text: string }> = {
      blue: { bg: 'bg-blue-500/10', hover: 'hover:bg-blue-500/20', text: 'text-blue-400' },
      purple: { bg: 'bg-purple-500/10', hover: 'hover:bg-purple-500/20', text: 'text-purple-400' },
    };
    return colors[color];
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new opportunities, interesting projects, or just having a
          chat about technology. Feel free to reach out!
        </p>

        <div className="space-y-4 mb-12">
          {contactLinks.map((contact, index) => {
            const colors = getColorClasses(contact.color);
            const Icon = contact.icon;

            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-6 ${colors.bg} border border-gray-700 rounded-lg ${colors.hover} transition-all duration-300 hover:transform hover:scale-105 hover:border-${contact.color}-400/50 group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{contact.name}</h3>
                    <p className={`text-sm ${colors.text}`}>{contact.value}</p>
                  </div>
                </div>
                <ExternalLink
                  className="text-gray-400 group-hover:text-white transition-colors"
                  size={20}
                />
              </a>
            );
          })}
        </div>

        <div className="text-center p-8 bg-gray-800/50 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-3">Looking for opportunities</h3>
          <p className="text-gray-400 mb-6">
            I'm actively seeking internship and full-time opportunities where I can contribute my
            skills and continue growing as a software engineer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View My Resume
            </a>
            <a
              href="mailto:ashekul@example.com"
              className="px-6 py-3 border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
