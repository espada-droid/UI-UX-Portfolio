
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? (isDark ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : 'bg-white/80 backdrop-blur-md border-b border-gray-200/20')
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xs sm:text-sm tracking-wider opacity-80">
            JP.
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['about', 'projects', 'experiments', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-mono uppercase tracking-wider opacity-60 hover:opacity-100 transition-all duration-300 hover:text-accent relative group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-current/20 flex items-center justify-center hover:border-accent transition-all duration-300 group"
          >
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
              isDark ? 'bg-accent translate-x-0' : 'bg-gray-800 translate-x-0'
            }`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
