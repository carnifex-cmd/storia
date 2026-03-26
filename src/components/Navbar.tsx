import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export const Navbar: React.FC = () => {
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      ctaRef.current.addEventListener('mouseenter', () => {
        anime({
          targets: ctaRef.current,
          scale: 1.05,
          boxShadow: '0px 0px 20px rgba(0, 207, 255, 0.4)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
      ctaRef.current.addEventListener('mouseleave', () => {
        anime({
          targets: ctaRef.current,
          scale: 1,
          boxShadow: '0px 0px 0px rgba(0, 207, 255, 0)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-8 backdrop-blur-md bg-white/40 border-b border-white/20 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00cfff] to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          S
        </div>
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00cfff] to-teal-600">
          Storia
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
        <a href="#about" className="hover:text-[#00cfff] transition-colors">Story</a>
        <a href="#benefits" className="hover:text-[#00cfff] transition-colors">Benefits</a>
        <a href="#process" className="hover:text-[#00cfff] transition-colors">Process</a>
      </div>
      <button 
        ref={ctaRef}
        className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium text-sm transition-colors hover:bg-black"
      >
        Order Now
      </button>
    </nav>
  );
};
