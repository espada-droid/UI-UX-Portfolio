import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ExperimentsSection = () => {
  const { isDark } = useTheme();

  const experiments = [
    {
      title: 'AI App Store Concept',
      tech: 'Figma Prototype',
      description: 'Unified, context‑aware marketplace for AI mini‑apps focusing on discoverability and modular dev tooling.',
      status: 'Prototype',
      link: 'https://www.figma.com/proto/DDtIsVzSnjpnduhDY6kfaR/AI-Store?node-id=0-1&t=ThzeXcpgOIscVQqi-1'
    },
    {
      title: 'Pulse – Desktop Music App UI',
      tech: 'Figma Prototype',
      description: 'Clean, retro‑inspired desktop player with rich micro‑interactions and theming.',
      status: 'Prototype',
      link: 'https://www.figma.com/proto/5QkQTRymNCXe6UM2AcQ8Ei/Pulse?t=ThzeXcpgOIscVQqi-1'
    }
  ];

  return (
    <section id="experiments" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Experiments</h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Side projects where I explore the intersection of design, code, and curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <a
              key={experiment.title}
              href={experiment.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                isDark ? 'bg-card/30 hover:bg-card/60' : 'bg-gray-100/50 hover:bg-gray-100'
              } rounded-xl p-6 border border-transparent hover:border-accent/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                    {experiment.title}
                  </h3>
                  <div className="font-mono text-xs opacity-60 uppercase tracking-wider">
                    {experiment.tech}
                  </div>
                </div>

                <div
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    'bg-purple-500/20 text-purple-400'
                  }`}
                >
                  {experiment.status}
                </div>
              </div>

              <p className="text-sm opacity-70 mb-4">{experiment.description}</p>

              <div className="w-full h-32 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="text-2xl opacity-30">↗</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperimentsSection;
