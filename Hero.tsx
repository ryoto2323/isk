import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Hammer, RefreshCw } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-end justify-start bg-isk-bg">
      
      {/* Structural Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Vertical Lines */}
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "100%" }} 
          transition={{ duration: 1.5, delay: 4, ease: "easeInOut" }}
          className="absolute left-6 md:left-12 top-0 w-[1px] bg-white/20" 
        />
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "100%" }} 
          transition={{ duration: 1.5, delay: 4.2, ease: "easeInOut" }}
          className="absolute right-6 md:right-12 top-0 w-[1px] bg-white/20" 
        />
        {/* Horizontal Lines */}
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "100%" }} 
          transition={{ duration: 1.5, delay: 4.4, ease: "easeInOut" }}
          className="absolute top-24 md:top-32 left-0 h-[1px] bg-white/20" 
        />
      </div>

      {/* Background Image Container with "Construction" Reveal */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            className="w-full h-full relative overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }} // Reveal from bottom like building up
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.5, delay: 3.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Parallax Image */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 3.5, ease: "easeOut" }}
            >
                {/* Base dark overlay */}
                <div className="absolute inset-0 bg-black/20 z-10" /> 
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
                  alt="Artisan Renovation" 
                  className="w-full h-full object-cover img-matte"
                />
            </motion.div>
          </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          
          {/* Main Copy */}
          <div className="mb-8 md:mb-0 w-full">
             <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 1.2, delay: 4.8 }}
              className="flex items-center space-x-4 mb-6 overflow-hidden"
            >
              <span className="h-[1px] w-8 md:w-12 bg-white/80 shrink-0"></span>
              <span className="text-white/90 font-sans tracking-widest text-[10px] md:text-xs uppercase whitespace-nowrap">Shop & Apartment Renovation</span>
            </motion.div>

            <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 5.0, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white font-serif font-light text-4xl md:text-7xl lg:text-8xl leading-tight mb-4 tracking-wide"
                >
                  対話から生まれる<br />
                  確かな空間
                </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 5.5 }}
              className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-12 text-white/90"
            >
               <div className="flex items-center space-x-2 border border-white/20 px-3 py-1 bg-black/10 backdrop-blur-sm rounded-sm">
                 <MessageCircle size={14} className="text-isk-gold shrink-0" />
                 <span className="text-[10px] md:text-xs tracking-widest font-serif">納得の対話</span>
               </div>
               <div className="flex items-center space-x-2 border border-white/20 px-3 py-1 bg-black/10 backdrop-blur-sm rounded-sm">
                 <Hammer size={14} className="text-isk-gold shrink-0" />
                 <span className="text-[10px] md:text-xs tracking-widest font-serif">確かな技術</span>
               </div>
               <div className="flex items-center space-x-2 border border-white/20 px-3 py-1 bg-black/10 backdrop-blur-sm rounded-sm">
                 <RefreshCw size={14} className="text-isk-gold shrink-0" />
                 <span className="text-[10px] md:text-xs tracking-widest font-serif">柔軟な対応</span>
               </div>
            </motion.div>
          </div>

          {/* Brand Name Large - Wireframe style */}
          <motion.div 
            initial={{ opacity: 0, strokeDasharray: 1000, strokeDashoffset: 1000 }}
            animate={{ opacity: 0.1, strokeDashoffset: 0 }}
            transition={{ duration: 3, delay: 4.5 }}
            className="hidden md:block absolute right-0 bottom-0 pointer-events-none mix-blend-overlay"
          >
             <svg width="400" height="200" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="120" fontFamily="Montserrat" fontSize="120" fontWeight="bold" stroke="white" strokeWidth="2" fill="none" letterSpacing="-5">ISK</text>
             </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};