import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HERO');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background Toggle Logic
      setIsScrolled(window.scrollY > 50);

      // Active Section Logic
      const sections = [
        { id: 'hero', name: '00. HERO' },
        { id: 'philosophy', name: '01. PHILOSOPHY' },
        { id: 'projects', name: '02. PROJECTS' },
        { id: 'service', name: '03. SERVICE & FLOW' },
        { id: 'faq', name: '04. Q&A' },
        { id: 'contact', name: '05. CONTACT' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = sections[0].name;
      
      if (window.scrollY < 100) {
          current = '00. HERO';
      } else {
          for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    current = section.name;
                }
            }
          }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PHILOSOPHY', href: '#philosophy', num: '01' },
    { name: 'PROJECTS', href: '#projects', num: '02' },
    { name: 'SERVICE & FLOW', href: '#service', num: '03' },
    { name: 'Q&A', href: '#faq', num: '04' },
    { name: 'CONTACT', href: '#contact', num: '05' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    } else if (href === '#') {
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Dynamic Header Background Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-700 ease-out pointer-events-none
          ${isScrolled 
            ? 'bg-[#F9F9F7]/60 backdrop-blur-md border-b border-white/10 shadow-[0_1px_30px_rgba(0,0,0,0.03)]' 
            : 'bg-transparent border-transparent'}
        `}
      />

      {/* 4-Corner Navigation System */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference text-white">
        <div className="absolute inset-0 max-w-screen-2xl mx-auto px-6 md:px-12 py-8 flex flex-col justify-between">
            
            {/* Top Row */}
            <div className="flex justify-between items-start">
                {/* Top-Left: Logo */}
                <a 
                    href="#" 
                    onClick={(e) => handleNavClick(e, '#')}
                    className="pointer-events-auto relative group block"
                >
                    <img 
                      src="https://github.com/ryoto2323/isk/blob/main/public/zuya.png?raw=true" 
                      alt="ISK Logo" 
                      className="h-8 md:h-10 w-auto object-contain" 
                    />
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
                </a>

                {/* Top-Right: Menu Trigger */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="pointer-events-auto flex items-center space-x-2 group"
                >
                    <span className="hidden md:block font-mono text-[10px] tracking-widest group-hover:tracking-widest-2xl transition-all duration-300">MENU</span>
                    <Menu size={24} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500"/>
                </button>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
                {/* Bottom-Left: Brand Info */}
                <div className="hidden md:block">
                    <p className="font-sans font-bold text-xs tracking-widest-xl mb-1">INTERIOR RENOVATION</p>
                    <p className="font-mono text-[10px] tracking-widest opacity-60">TOKYO / KANAGAWA / SAITAMA</p>
                </div>

                {/* Bottom-Right: Current Section Indicator */}
                <div className="flex flex-col items-end md:mr-24">
                    <span className="font-mono text-[10px] tracking-widest mb-1 opacity-50 hidden md:inline">CURRENTLY VIEWING</span>
                    <motion.span 
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-xs md:text-xl tracking-widest whitespace-nowrap"
                    >
                        {activeSection}
                    </motion.span>
                </div>
            </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#1C1C1C] text-[#F9F9F7] flex flex-col justify-between p-6 md:p-12 overflow-hidden"
          >
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Header in Overlay */}
            <div className="flex justify-between items-start relative z-10">
                <div className="block">
                     <img 
                      src="https://github.com/ryoto2323/isk/blob/main/public/zuya.png?raw=true" 
                      alt="ISK Logo" 
                      className="h-8 md:h-10 w-auto object-contain" 
                    />
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 group"
                >
                    <span className="font-mono text-[10px] tracking-widest group-hover:tracking-widest-2xl transition-all duration-300">CLOSE</span>
                    <X size={24} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500"/>
                </button>
            </div>

            {/* Main Nav Links */}
            <nav className="flex flex-col items-center md:items-start justify-center flex-grow space-y-8 md:space-y-4 relative z-10 pl-0 md:pl-20">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group flex items-center space-x-4 md:space-x-8"
                    >
                        <span className="font-mono text-xs md:text-sm text-isk-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {link.num}
                        </span>
                        <span className="font-serif text-3xl md:text-6xl font-light tracking-widest relative">
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full" />
                        </span>
                        <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-isk-gold" size={32} strokeWidth={1} />
                    </motion.a>
                ))}
            </nav>

            {/* Footer in Overlay */}
            <div className="flex flex-col md:flex-row justify-between items-end relative z-10 border-t border-white/10 pt-8">
                 <div className="text-left w-full md:w-auto mb-8 md:mb-0">
                    <p className="font-sans font-bold text-sm tracking-widest-xl mb-2">ISK INTERIOR WORKS</p>
                    <p className="font-serif text-xs opacity-60 tracking-wider">Tokyo / Kanagawa / Saitama</p>
                 </div>
                 <div className="flex space-x-8">
                    {/* Non-clickable Instagram link */}
                    <span className="font-mono text-xs tracking-widest opacity-30 cursor-default">INSTAGRAM</span>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="font-mono text-xs tracking-widest hover:text-isk-gold transition-colors">CONTACT</a>
                 </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};