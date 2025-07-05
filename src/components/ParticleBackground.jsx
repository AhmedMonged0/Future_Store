import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random horizontal position
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random colors (blue/purple theme)
      const colors = [
        'rgba(59, 130, 246, 0.6)',   // blue-500
        'rgba(147, 51, 234, 0.6)',   // purple-600
        'rgba(99, 102, 241, 0.6)',   // indigo-500
        'rgba(168, 85, 247, 0.6)',   // purple-500
        'rgba(34, 197, 94, 0.4)',    // green-500
      ];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation duration
      const duration = Math.random() * 10 + 10; // 10-20 seconds
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 800);

    return () => {
      clearInterval(interval);
      // Clean up existing particles
      const particles = container.querySelectorAll('.particle');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="particle-container"
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
      }}
    />
  );
};

export default ParticleBackground;

