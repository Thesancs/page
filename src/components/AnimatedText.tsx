import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Add animation class
    container.classList.add('animated-text');
    
    const letters = text.split('');
    container.innerHTML = '';
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      span.classList.add('inline-block', 'animate-shimmer');
      container.appendChild(span);
    });
    
    return () => {
      if (container) {
        container.classList.remove('animated-text');
      }
    };
  }, [text]);
  
  return <span ref={containerRef}>{text}</span>;
};

export default AnimatedText;