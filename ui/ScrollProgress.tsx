import React, { useEffect, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useVelocity 
} from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollY } = useScroll();
  const [ticks, setTicks] = useState<number[]>([]);
  
  // Physics for smooth scrolling tape
  const smoothY = useSpring(scrollY, {
    damping: 15,
    stiffness: 100,
    mass: 0.5
  });

  // Calculate velocity for sway effect
  const scrollVelocity = useVelocity(scrollY);
  // Transform velocity to rotation (sway)
  // High velocity -> larger rotation.
  const swayRotation = useTransform(scrollVelocity, [-2000, 2000], [5, -5]);
  const smoothSway = useSpring(swayRotation, {
    damping: 20,
    stiffness: 200
  });

  useEffect(() => {
    // Generate ticks array to avoid inline calculation during render
    setTicks(Array.from({ length: 50 }));
  }, []);

  return (
    <div className="fixed right-6 md:right-8 top-0 bottom-0 z-40 pointer-events-none hidden md:flex flex-col items-center justify-start overflow-visible h-screen mix-blend-normal">
      
      {/* Tape Housing (Top Anchor) */}
      <div className="absolute top-0 right-0 w-12 h-16 bg-[#1C1C1C] z-20 flex items-center justify-center shadow-2xl border-b-2 border-isk-gold">
         <span className="font-bold text-isk-gold text-[10px] tracking-widest">ISK</span>
      </div>

      {/* The Physical Tape */}
      <motion.div 
        style={{ 
          // Move tape UP as we scroll DOWN to reveal numbers
          y: useTransform(smoothY, (v) => -v + 60), 
          rotateZ: smoothSway,
          transformOrigin: "50% 0%"
        }}
        className="relative w-8 bg-[#F2C94C] shadow-xl flex flex-col items-center origin-top will-change-transform"
      >
        {/* Infinite Tape Visual */}
        <div className="w-full h-[10000px] relative bg-[#F2C94C] border-l border-r border-black/10">
           {/* Center Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-black/20 transform -translate-x-1/2"></div>
           
           {/* Ticks Pattern */}
           <div 
             className="absolute inset-0 w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(to bottom, transparent 9px, rgba(0,0,0,0.5) 10px)`,
               backgroundSize: '100% 10px'
             }}
           />

           {/* Major Ticks and Numbers */}
           {ticks.map((_, i) => (
             <div 
                key={i} 
                className="absolute w-full flex justify-between items-center px-1"
                style={{ top: i * 200 }} 
             >
                <span className="w-2 h-[2px] bg-black/60"></span>
                <span className="font-mono text-[10px] font-bold text-black/80 rotate-90 origin-center translate-y-[1px]">
                    {i * 10}
                </span>
                <span className="w-2 h-[2px] bg-black/60"></span>
             </div>
           ))}
        </div>
        
        {/* Weighted Bottom of Tape */}
        <div className="absolute bottom-0 w-full h-8 bg-[#D4AF37] border-t border-black/20 flex justify-center items-center">
             <div className="w-2 h-2 rounded-full bg-black/20"></div>
        </div>

      </motion.div>

      {/* Reading Indicator (Fixed Arrow at top) */}
      <div className="absolute top-14 right-8 z-30 pointer-events-none transform translate-x-1/2 translate-y-2 drop-shadow-md">
         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-red-600 border-b-[6px] border-b-transparent"></div>
      </div>

    </div>
  );
};