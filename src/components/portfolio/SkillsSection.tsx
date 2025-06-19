
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const SkillsSection = () => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "Figma", level: 95, icon: "🎨", color: "#f24e1e" },
    { name: "Sketch", level: 88, icon: "✏️", color: "#fdb300" },
    { name: "Adobe XD", level: 82, icon: "💜", color: "#ff61f6" },
    { name: "Principle", level: 78, icon: "⚡", color: "#5f49ff" },
    { name: "After Effects", level: 75, icon: "🎬", color: "#9999ff" },
    { name: "Framer", level: 85, icon: "🚀", color: "#0055ff" }
  ];

  const tools = [
    "User Research", "Wireframing", "Prototyping", "Design Systems", 
    "Usability Testing", "A/B Testing", "Information Architecture", "Interaction Design"
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Skills & Tools</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Design Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Design Tools</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span 
                        className={`text-xl transition-transform duration-300 ${
                          hoveredSkill === skill.name ? 'scale-125 animate-bounce' : ''
                        }`}
                      >
                        {skill.icon}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm opacity-60">{skill.level}%</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-muted' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full transition-all duration-700 ease-out rounded-full"
                      style={{ 
                        width: `${hoveredSkill === skill.name ? skill.level : 0}%`,
                        backgroundColor: skill.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Expertise Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className={`p-4 rounded-xl text-center transition-all duration-300 hover-scale cursor-pointer ${
                    isDark ? 'bg-card hover:shadow-retro' : 'bg-gray-50 hover:shadow-lg'
                  } hover:text-accent`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              ))}
            </div>

            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-card' : 'bg-gray-50'}`}>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span>🎯</span> Current Focus
              </h4>
              <p className="text-sm opacity-70 leading-relaxed">
                Diving deep into motion design and advanced prototyping. 
                Currently exploring AI-assisted design workflows and accessibility-first design practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
