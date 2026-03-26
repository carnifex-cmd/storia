import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { product } from '../data/product';

export const BuySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Pulse animation for button
    if (btnRef.current) {
      anime({
        targets: btnRef.current,
        scale: [1, 1.02],
        boxShadow: ['0px 10px 30px rgba(0, 207, 255, 0.2)', '0px 10px 40px rgba(0, 207, 255, 0.6)'],
        direction: 'alternate',
        loop: true,
        duration: 1500,
        easing: 'easeInOutSine'
      });
    }

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && sectionRef.current) {
            anime({
              targets: sectionRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      // Set initial state via DOM directly to avoid flickering
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = 'translateY(100px)';
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-white py-32 px-8 overflow-hidden z-20">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#E0F7FA]/40 to-white/0 rounded-full blur-3xl pointer-events-none"></div>
      
      <div ref={sectionRef} className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Experience Pure Hydration
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl font-light">
          {product.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {product.stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 rounded-3xl flex flex-col items-center shadow-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00cfff] to-teal-500 mb-2">
                {stat.val}
              </div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-8 bg-white p-4 pr-4 sm:pr-8 pl-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div>
            <span className="text-gray-400 text-sm font-medium mr-2">Price:</span>
            <span className="text-3xl font-bold text-gray-900">{product.price}</span>
            <span className="text-gray-400 text-sm ml-2">/ pack of 6</span>
          </div>
          <button 
            ref={btnRef}
            className="w-full sm:w-auto bg-gradient-to-r from-[#00cfff] to-teal-400 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
