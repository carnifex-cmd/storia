import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00cfff] to-teal-400 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              Storia
            </span>
          </div>
          <p className="text-gray-400 max-w-sm mb-6 font-light leading-relaxed">
            Premium hydration extracted directly from the finest tender coconuts. No added sugar, just pure nature.
          </p>
          <div className="flex gap-4">
            {/* Social mock placeholders */}
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
              Ig
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
              Tw
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-200">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#00cfff] transition">Our Story</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Sourcing</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Press</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-200">Support</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#00cfff] transition">FAQ</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Shipping</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Returns</a></li>
            <li><a href="#" className="hover:text-[#00cfff] transition">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Storia. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
