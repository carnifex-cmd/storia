import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductBottleScroll } from './components/ProductBottleScroll';
import { ProductTextOverlays } from './components/ProductTextOverlays';
import { BuySection } from './components/BuySection';
import { Footer } from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="relative font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      
      <main>
        {/* 
          Hero Canvas Experience
          We render the text overlays fixed/absolute positioned over the sticky container,
          passing it the scrollProgress mapped (0 to 1) 
        */}
        <section className="relative w-full">
          <ProductTextOverlays scrollProgress={scrollProgress} />
          <ProductBottleScroll onProgress={setScrollProgress} />
        </section>

        {/* Purchase layout section */}
        <BuySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
