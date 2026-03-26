import React, { useEffect, useRef } from 'react';

import { product } from '../data/product';

interface Props {
  scrollProgress: number; // 0 to 1 over the hero section
}

export const ProductTextOverlays: React.FC<Props> = ({ scrollProgress }) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Section 1 -> 0% (Initial Load), Section 2 -> 30%, Section 3 -> 55%, Section 4 -> 80%
  const triggerPoints = [0.0, 0.3, 0.55, 0.8];
  const fadeRange = 0.12; // increased fade range for smoother transitions

  useEffect(() => {
    sectionsRef.current.forEach((section, idx) => {
      if (!section) return;
      
      const targetPoint = triggerPoints[idx];
      const distance = Math.abs(scrollProgress - targetPoint);
      
      // Calculate opacity based on distance from target point
      let opacity = 0;
      let translateY = 40;
      
      if (distance < fadeRange) {
        // Peak opacity at target point
        opacity = 1 - (distance / fadeRange);
        translateY = distance > 0 ? (scrollProgress < targetPoint ? 20 * (distance/fadeRange) : -20 * (distance/fadeRange)) : 0;
      }
      
      // We use direct DOM manipulation here instead of React state 
      // to avoid triggering component re-renders during high-frequency scroll events (60fps target)
      section.style.opacity = opacity.toFixed(3);
      section.style.transform = `translateY(${translateY}px)`;
      section.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
      
      // Slight scale effect
      const scale = 0.95 + (0.05 * opacity);
      section.style.transform += ` scale(${scale})`;
    });
  }, [scrollProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-30 flex items-center justify-center">
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition-opacity duration-500"
        style={{ opacity: scrollProgress < 0.02 ? 1 : 0 }}
      >
        <span className="text-gray-500 font-medium text-sm tracking-widest uppercase mb-3">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2.5 bg-gray-400 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>

      {product.sections.map((section, idx) => (
        <div 
          key={idx}
          ref={el => { sectionsRef.current[idx] = el; }}
          className="absolute max-w-4xl px-12 py-12 text-center flex flex-col items-center justify-center"
          style={{ opacity: 0, transform: 'translateY(40px)' }}
        >
          {/* Soft glowing backdrop to separate text from the water splash */}
          <div className="absolute inset-0 bg-white/40 blur-3xl -z-10 rounded-full scale-110 pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-md">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-xl md:text-2xl font-medium text-gray-900 bg-white/70 backdrop-blur-md py-4 px-8 rounded-full border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] inline-block">
              {section.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
