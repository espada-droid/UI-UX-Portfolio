
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const AboutSection = () => {
  const { isDark } = useTheme();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const timeline = [
    { year: '2020', title: 'Design Discovery', desc: 'Fell into the rabbit hole of user experience', progress: 100 },
    { year: '2021', title: 'First Product Role', desc: 'Learned that users don\'t read, they scan', progress: 85 },
    { year: '2022', title: 'System Thinking', desc: 'Built my first design system from atoms up', progress: 92 },
    { year: '2023', title: 'Leading Design', desc: 'Mentored designers, shipped features that matter', progress: 88 },
    { year: '2024', title: 'Craft & Code', desc: 'Bridging design and development, pixel by pixel', progress: 95 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg opacity-80 leading-relaxed mb-6">
              I believe design is problem-solving in its purest form. Every interface should feel 
              like a natural extension of human thought—invisible when it works, memorable when it delights.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Currently crafting digital experiences that bridge the gap between complex technology 
              and human understanding. When I'm not pushing pixels, I'm probably experimenting with code 
              or getting lost in sci-fi novels.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-12 opacity-60">Journey</h3>
          
          {timeline.map((item, index) => (
            <div
              key={item.year}
              data-index={index}
              className="timeline-item flex items-start gap-8 group"
            >
              <div className="flex-shrink-0 w-20">
                <div className="font-mono text-sm text-accent">{item.year}</div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex-1 h-px bg-border/30" />
                </div>
                
                <p className="opacity-70 mb-4">{item.desc}</p>
                
                {/* Animated Progress Bar */}
                <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-muted/30' : 'bg-gray-200'}`}>
                  <div 
                    className="h-full bg-accent transition-all duration-1000 ease-out"
                    style={{ 
                      width: visibleItems.includes(index) ? `${item.progress}%` : '0%',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
