
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard",
      category: "Product Design",
      year: "2024",
      description: "Redesigned complex financial data into digestible insights",
      tags: ["UX Research", "Design System", "Data Viz"],
      color: "#ff6b35"
    },
    {
      id: 2,
      title: "Health Tech Platform",
      category: "Mobile Design",
      year: "2023",
      description: "Patient-centered healthcare experience for 50k+ users",  
      tags: ["Mobile-First", "Accessibility", "User Testing"],
      color: "#00d4aa"
    },
    {
      id: 3,
      title: "E-learning Interface",
      category: "Web Platform",
      year: "2023",
      description: "Learning platform that makes education feel like play",
      tags: ["Gamification", "Progressive Web App", "Animation"],
      color: "#7c3aed"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Selected Work
          </h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Case studies of products that solve real problems for real people.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02] ${
                isDark ? 'bg-card/50 hover:bg-card/80' : 'bg-white hover:bg-gray-50'
              } rounded-2xl overflow-hidden border border-transparent hover:border-accent/20`}
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="font-mono text-sm text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-sm opacity-40">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-mono text-sm mr-2">View Case</span>
                    <div className="w-4 h-4 border-t border-r border-current transform rotate-45 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg opacity-70 mb-6 max-w-2xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-mono ${
                        isDark ? 'bg-muted/30 text-foreground/80' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
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

export default ProjectsSection;
