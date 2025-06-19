
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary rounded-full animate-pulseglow"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Profile image placeholder */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent shadow-retro animate-glow"></div>
          <div className="absolute -bottom-2 -right-2 text-2xl animate-bounce">👋</div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          Hey, I'm Alex
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A UI/UX designer who believes every pixel has a purpose ✨
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I craft digital experiences that make people smile, think, and take action. 
          Currently designing the future, one interface at a time.
        </p>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-16">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm mt-2 opacity-60">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
