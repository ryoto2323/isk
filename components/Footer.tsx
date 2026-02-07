import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-isk-bg text-isk-text/60 py-20 border-t border-isk-line relative overflow-hidden">
      
      {/* Subtle Texture for Depth */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Brand Mark Box - Updated for light theme consistency */}
        <div className="mb-12 border border-isk-text/5 bg-white p-8 w-full md:w-auto min-w-[300px] flex flex-col items-center relative shadow-sm">
             {/* Decorative Corner Marks to match the image provided by user */}
             <div className="absolute top-2 left-2 w-4 h-4 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full border border-isk-text/20 flex items-center justify-center">
                   <div className="w-1 h-1 bg-isk-text/10 rounded-full"></div>
                </div>
             </div>
             
             <img 
                src="https://github.com/ryoto2323/isk/blob/main/public/zuya.png?raw=true" 
                alt="ISK Logo" 
                className="h-16 w-auto mb-4 object-contain" 
            />
            <div className="h-[0.5px] w-full bg-isk-text/10 my-4"></div>
            <p className="font-serif tracking-widest text-[10px] text-isk-text/40 mb-1 uppercase">INTERIOR RENOVATION</p>
            <p className="font-mono text-[8px] tracking-widest opacity-30">EST. 2024 — TOKYO</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-12 text-[10px] font-mono tracking-widest items-center">
            {/* Functional Link */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                onPrivacyClick();
              }}
              className="hover:text-isk-text transition-colors border-b border-transparent hover:border-isk-text pb-1 cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            
            {/* Display Only - Non-clickable */}
            <span className="opacity-30 pb-1 cursor-default select-none">COMPANY PROFILE</span>
            <span className="opacity-30 pb-1 cursor-default select-none">INSTAGRAM</span>
        </div>

        <p className="text-[10px] font-mono tracking-wider opacity-30">
          © {new Date().getFullYear()} ISK INTERIOR WORKS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};