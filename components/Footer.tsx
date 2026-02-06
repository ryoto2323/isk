import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-isk-text text-white/60 py-20 border-t-[10px] border-isk-line/20 relative overflow-hidden">
      
      {/* Engraved Effect Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <div className="mb-12 border border-white/10 p-8 w-full md:w-auto min-w-[300px]">
            <h2 className="font-sans font-bold text-4xl tracking-widest-xl text-white mb-2 mix-blend-overlay opacity-80">ISK</h2>
            <div className="h-[1px] w-full bg-white/20 my-4"></div>
            <p className="font-serif tracking-widest text-xs mb-1">INTERIOR RENOVATION</p>
            <p className="font-mono text-[10px] tracking-widest opacity-50">EST. 2024</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-12 text-[10px] font-mono tracking-widest">
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">COMPANY PROFILE</a>
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">INSTAGRAM</a>
        </div>

        <p className="text-[10px] font-mono tracking-wider opacity-30">
          © {new Date().getFullYear()} ISK INTERIOR WORKS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};