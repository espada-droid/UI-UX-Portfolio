
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isDark } = useTheme();

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl animate-scale-in ${
          isDark ? 'bg-card border border-border/20' : 'bg-white border border-gray-200'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-inherit p-6 border-b border-border/20 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
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
            <h2 className="text-3xl font-bold">{project.title}</h2>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent/10 transition-colors group"
          >
            <div className="w-4 h-4 relative">
              <div className="absolute w-full h-px bg-current top-1/2 rotate-45 group-hover:rotate-0 transition-transform" />
              <div className="absolute w-full h-px bg-current top-1/2 -rotate-45 group-hover:rotate-90 transition-transform" />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hero Image Placeholder */}
          <div 
            className="w-full h-64 rounded-xl mb-8 flex items-center justify-center text-4xl"
            style={{ backgroundColor: project.color + '10' }}
          >
            <div className="opacity-30">🎨</div>
          </div>

          {/* Project Details */}
          <div className="prose prose-lg max-w-none">
            <h3>Overview</h3>
            <p className="opacity-80">
              {project.description} This project challenged me to balance complex functionality 
              with intuitive user experience, resulting in a solution that both users and stakeholders loved.
            </p>

            <h3>Challenge</h3>
            <p className="opacity-80">
              The main challenge was creating an interface that could handle complex data while 
              remaining accessible to users with varying levels of technical expertise.
            </p>

            <h3>Solution</h3>
            <p className="opacity-80">
              Through extensive user research and iterative design, we developed a progressive 
              disclosure system that reveals complexity only when needed, keeping the primary 
              interface clean and focused.
            </p>

            <h3>Impact</h3>
            <ul className="opacity-80">
              <li>40% increase in user engagement</li>
              <li>60% reduction in support tickets</li>
              <li>95% user satisfaction score</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border/20">
            {project.tags.map((tag: string) => (
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
    </div>
  );
};

export default ProjectModal;
