
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const LandingSection = () => {
  const { isDark } = useTheme();
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1
    }));
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-accent/10 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.2}s`,
              animationDuration: `${3 + particle.id * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="text-sm font-mono text-accent uppercase tracking-[0.2em] mb-4 animate-fade-in">
            UI/UX Designer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Designing Silence
            <br />
            <span className="text-accent">Into Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Jaiwardhan Panwar — crafting digital experiences where every pixel serves a purpose, 
            every interaction tells a story.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="inline-flex flex-col items-center cursor-pointer group animate-fade-in"
          onClick={scrollToAbout}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="text-xs font-mono uppercase tracking-wider opacity-50 mb-4 group-hover:opacity-100 transition-opacity">
            Explore
          </div>
          <div className="relative w-full flex justify-center">
          {/* Vertical line */}
          <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />

          {/* Bouncing circle */}
          <div className="absolute top-0 left+1/2 w-3 h-3 bg-accent rounded-full animate-bounce -translate-x-1/2" />
        



          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-px h-32 bg-accent/20" />
      <div className="absolute bottom-20 right-20 w-32 h-px bg-accent/20" />
    </section>
  );
};

export default LandingSection;
