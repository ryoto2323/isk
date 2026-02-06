import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, ease: "easeOut", delay }}
      className={`py-24 md:py-40 px-6 md:px-12 max-w-screen-2xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};