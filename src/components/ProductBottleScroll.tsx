import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface Props {
  onProgress: (progress: number) => void;
}

export const ProductBottleScroll: React.FC<Props> = ({ onProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // To hold the loaded images
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Animation state
  const frameRef = useRef({ frame: 1 });
  
  const totalFrames = 192;
  
  useEffect(() => {
    // Preload images
    const loadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        // format 001 to 192 based on ezgif-frame-XXX.jpg
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/images/coconut/ezgif-frame-${frameNum}.jpg`;
        imagesRef.current.push(img);
      }
      
      // Draw first frame when it loads
      imagesRef.current[0].onload = () => {
        renderFrame(1);
      };
    };
    
    loadImages();
  }, []);

  const renderFrame = (frameIndex: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    
    const context = canvasRef.current.getContext('2d');
    if (!context) return;
    
    // Ensure we don't go out of bounds
    let safeIndex = Math.max(1, Math.min(totalFrames, Math.round(frameIndex))) - 1;
    const img = imagesRef.current[safeIndex];
    
    if (img && img.complete) {
      // Clear canvas
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      // Calculate drawing area to properly "cover" or "contain" the image
      // Use cover logic for better full-screen effect
      const scale = Math.max(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      
      const targetOffsetX = (canvasRef.current.width - scaledWidth) / 2;
      const targetOffsetY = (canvasRef.current.height - scaledHeight) / 2;
      
      context.drawImage(img, targetOffsetX, targetOffsetY, scaledWidth, scaledHeight);
    }
  };

  useEffect(() => {
    // Handling resize
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI canvas setup without double-scaling the context
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // We do NOT ctx.scale(dpr, dpr) because we use canvas.width (which is already multiplied by dpr)
        // for all our drawing calculations in renderFrame.

        renderFrame(frameRef.current.frame);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll handling
    let animationRef: any = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          
          const rect = containerRef.current.getBoundingClientRect();
          const scrollTop = -rect.top;
          
          // We want the scrollHeight to be the height minus window height to normalize calculation
          const scrollHeight = rect.height - window.innerHeight;
          
          // Clamp progress between 0 and 1
          const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));
          onProgress(progress);
          
          const targetFrame = 1 + (progress * (totalFrames - 1));
          
          // Animate the frame transition using anime.js for buttery smooth momentum
          if (animationRef) animationRef.pause();
          
          animationRef = anime({
            targets: frameRef.current,
            frame: targetFrame,
            duration: 800, // Longer duration adds momentum/lerp
            easing: 'easeOutExpo', // High-end deceleration
            update: () => {
              renderFrame(frameRef.current.frame);
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onProgress]);

  return (
    <div ref={containerRef} className="relative w-full h-[800vh] bg-gray-50">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* The canvas displays the product image sequence */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full mix-blend-multiply opacity-95"
          style={{ width: '100vw', height: '100vh' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
