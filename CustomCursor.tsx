import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'view' | 'text'>('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Stiffer spring for "magnetic" feel
  const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHoverState('pointer');
      } else if (target.closest('[data-cursor="view"]')) {
        setHoverState('view');
      } else if (['P', 'H1', 'H2', 'H3', 'LI', 'SPAN'].includes(target.tagName)) {
         setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot - The precise point */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Magnetic / Interaction Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverState === 'view' ? 80 : hoverState === 'pointer' ? 40 : 12,
          height: hoverState === 'view' ? 80 : hoverState === 'pointer' ? 40 : 12,
          opacity: hoverState === 'view' ? 1 : hoverState === 'text' ? 0.8 : 0.5,
          scale: hoverState === 'text' ? 1.5 : 1,
          borderWidth: hoverState === 'view' ? '0px' : '1px',
          backgroundColor: hoverState === 'view' ? '#ffffff' : 'transparent',
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {hoverState === 'view' && (
           <span className="font-mono text-[10px] tracking-widest text-black font-bold">VIEW</span>
        )}
      </motion.div>
    </>
  );
};