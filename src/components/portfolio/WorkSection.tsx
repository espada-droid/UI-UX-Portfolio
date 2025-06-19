
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import ProjectModal from './ProjectModal';

const WorkSection = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      category: "UX/UI Design",
      image: "🛍️",
      color: "#ff6b6b",
      description: "Increased conversion by 40% through user-centered design",
      details: "A complete redesign of an e-commerce platform focusing on mobile-first approach and streamlined checkout process."
    },
    {
      id: 2,
      title: "Design System",
      category: "System Design",
      image: "⚡",
      color: "#4ecdc4",
      description: "Built scalable design system for 50+ components",
      details: "Created a comprehensive design system that reduced design-to-development time by 60%."
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "UX Research",
      image: "📱",
      color: "#45b7d1",
      description: "Simplified complex financial processes for 100k+ users",
      details: "Led user research and redesigned the mobile banking experience with focus on accessibility and security."
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "Data Visualization",
      image: "📊",
      color: "#96ceb4",
      description: "Data-heavy dashboard with intuitive navigation",
      details: "Designed an analytics dashboard that helps users make data-driven decisions faster."
    }
  ];

  return (
    <section className="py-20 px-6" id="work">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Selected Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover-scale ${
                isDark ? 'bg-card hover:shadow-retro' : 'bg-white hover:shadow-xl'
              } rounded-2xl overflow-hidden`}
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: project.color + '20' }}
                >
                  {project.image}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium opacity-60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="opacity-70 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex items-center text-accent font-medium group-hover:gap-3 transition-all">
                  <span>View Case Study</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default WorkSection;
