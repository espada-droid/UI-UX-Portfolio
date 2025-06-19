import React, { useState, useEffect } from 'react';
import Navbar from '../components/portfolio/Navbar';
import LandingSection from '../components/portfolio/LandingSection';
import AboutSection from '../components/portfolio/AboutSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperimentsSection from '../components/portfolio/ExperimentsSection';
import ContactSection from '../components/portfolio/ContactSection';
import { useTheme } from '../hooks/useTheme';

const Portfolio = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsHoverDevice(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-background text-foreground' : 'bg-gray-50 text-gray-900'}`}>
      {isHoverDevice && (
        <div 
          className="fixed w-4 h-4 bg-accent/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
          style={{ 
            left: mousePosition.x - 8, 
            top: mousePosition.y - 8,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
          }}
        />
      )}
      
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <ExperimentsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
