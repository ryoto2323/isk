import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-isk-bg flex items-center justify-center overflow-hidden"
    >
      {/* Grid Background for Loading */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Central Structure Animation */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Drawing the Frame Box */}
        <motion.div
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{ width: 280, height: 280, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute border border-isk-text/20"
        />

        {/* Cross Hairs / Construction Lines */}
        <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="absolute w-screen h-[1px] bg-isk-text/10"
        />
         <motion.div
           initial={{ scaleY: 0 }}
           animate={{ scaleY: 1 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="absolute h-screen w-[1px] bg-isk-text/10"
        />

        {/* Logo Container */}
        <div className="relative z-10 overflow-hidden p-4">
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          >
             <img 
                src="https://github.com/ryoto2323/isk/blob/main/public/zuya.png?raw=true" 
                alt="ISK Logo" 
                className="h-24 md:h-32 w-auto object-contain" 
            />
          </motion.div>
        </div>

        {/* Vertical Text Reveal */}
        <div className="overflow-hidden absolute -right-8 md:-right-16 top-0 bottom-0 flex items-center">
             <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                className="font-serif text-xs md:text-sm tracking-widest-xl text-isk-text/60 vertical-text whitespace-nowrap border-l border-isk-text/20 pl-4 py-2"
             >
                対話から生まれる確かな空間
             </motion.p>
        </div>
      </div>
    </motion.div>
  );
};