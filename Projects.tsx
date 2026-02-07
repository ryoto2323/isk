import React, { useState, useEffect, useRef } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, RefreshCcw, ArrowRight, ArrowLeft } from 'lucide-react';

const allProjects: Project[] = [
  {
    id: 1,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/ase.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/aset.jpg?raw=true",
    size: 'large'
  },
  {
    id: 2,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/bse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/bset.jpg?raw=true",
    size: 'small'
  },
  {
    id: 3,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/cse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/cset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 4,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/dese.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/dset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 5,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/ese.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/eset.jpg?raw=true",
    size: 'small'
  },
  {
    id: 6,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/fse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/fset.jpg?raw=true",
    size: 'large'
  },
  {
    id: 7,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/gse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/gset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 8,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/hse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/hset.jpg?raw=true",
    size: 'small'
  },
  {
    id: 9,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/ise.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/iset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 10,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/mse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/mset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 11,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/ose.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/oset.jpg?raw=true",
    size: 'large'
  },
  {
    id: 12,
    title: "",
    category: "Shop",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/jse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/jset.jpg?raw=true",
    size: 'medium'
  },
  {
    id: 13,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/kse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/kset.jpg?raw=true",
    size: 'large'
  },
  {
    id: 14,
    title: "",
    category: "Apartment",
    beforeImage: "https://github.com/ryoto2323/isk/blob/main/public/lse.jpg?raw=true",
    afterImage: "https://github.com/ryoto2323/isk/blob/main/public/lset.jpg?raw=true",
    size: 'medium'
  }
];

const BeforeAfterCard: React.FC<{ project: Project; index: number; isSlide?: boolean }> = ({ project, index, isSlide = false }) => {
  const [showAfter, setShowAfter] = useState(true);
  const [isManual, setIsManual] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isManual) {
      timerRef.current = window.setInterval(() => {
        setShowAfter(prev => !prev);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isManual]);

  const toggleManual = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsManual(true);
    setShowAfter(!showAfter);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: isSlide ? 0.1 * (index % 5) : index * 0.1 }}
      className={`group relative cursor-pointer overflow-hidden bg-[#E5E5E5] ${
          !isSlide && project.size === 'large' ? 'md:row-span-2' : ''
      } ${isSlide ? 'w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0' : 'w-full'} aspect-[4/5] md:aspect-auto md:min-h-[400px] h-full`}
      onClick={toggleManual}
      data-cursor="view"
    >
      {/* Before/After Indicator Badge */}
      <div className="absolute top-6 left-6 z-30 flex items-center space-x-2">
        <div className={`px-2 py-1 text-[8px] tracking-widest font-mono transition-colors duration-500 border rounded-sm
          ${showAfter ? 'bg-white/10 border-white/20 text-white/50' : 'bg-isk-gold border-isk-gold text-isk-text font-bold'}
        `}>
          BEFORE
        </div>
        <div className={`px-2 py-1 text-[8px] tracking-widest font-mono transition-colors duration-500 border rounded-sm
          ${!showAfter ? 'bg-white/10 border-white/20 text-white/50' : 'bg-isk-gold border-isk-gold text-isk-text font-bold'}
        `}>
          AFTER
        </div>
      </div>

      {/* Manual Toggle Hint (Visible on hover) */}
      <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <RefreshCcw size={10} className="text-isk-gold" />
            <span className="text-[8px] text-white font-mono tracking-widest">TAP TO SWITCH</span>
         </div>
      </div>

      {/* Images with AnimatePresence for smooth cross-fade */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? 'after' : 'before'}
            src={showAfter ? project.afterImage : project.beforeImage}
            alt={project.category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover img-matte transition-all duration-1000"
          />
        </AnimatePresence>
      </div>
      
      {/* Blueprint / Geometric Overlay */}
      <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-4 border-[0.5px] border-white/30"></div>
        <div className="absolute top-4 right-4 p-2">
            <ArrowUpRight className="text-white w-5 h-5" strokeWidth={1} />
        </div>
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50"></div>
      </div>

      {/* Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 z-30">
        <div className="overflow-hidden">
          <p className="text-white font-mono tracking-widest uppercase text-[10px] md:text-xs">
            NO.{project.id < 10 ? `0${project.id}` : project.id} — {project.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const curatedProjects = allProjects.slice(0, 3);

  return (
    <div id="projects" className="bg-white overflow-hidden">
      <Section className="pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="border-l-2 border-isk-gold pl-6 md:pl-8">
            <span className="text-isk-text/40 font-mono tracking-widest-2xl text-[10px] mb-4 block uppercase">WORKS / ARCHIVE</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-isk-text tracking-widest leading-tight">
                施工事例
            </h2>
            <p className="mt-6 text-isk-text/60 font-serif font-light text-xs md:text-sm tracking-widest leading-relaxed max-w-lg">
               写真をクリックすることで、施工前後の様子を切り替えてご確認いただけます。
            </p>
          </div>

          <AnimatePresence>
            {!showArchive && (
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowArchive(true)}
                className="group relative inline-flex items-center space-x-4 border border-isk-text px-10 py-4 overflow-hidden transition-all duration-500 w-fit"
              >
                <div className="absolute inset-0 w-0 bg-isk-text transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative z-10 font-mono text-[10px] tracking-widest-2xl group-hover:text-white transition-colors">
                  VIEW ALL ARCHIVES
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-white transition-colors" strokeWidth={1} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Curated Grid (Shown by default) */}
        {!showArchive && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {curatedProjects.map((project, index) => (
              <BeforeAfterCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </Section>

      {/* Horizontal Archive Slider (Revealed after clicking) */}
      <AnimatePresence>
        {showArchive && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="pb-24"
          >
            {/* Navigation controls for slider */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-end space-x-4 mb-8">
               <button 
                 onClick={() => scroll('left')}
                 className="p-4 border border-isk-line hover:bg-isk-text hover:text-white transition-all duration-300 rounded-full"
               >
                 <ArrowLeft size={20} strokeWidth={1} />
               </button>
               <button 
                 onClick={() => scroll('right')}
                 className="p-4 border border-isk-line hover:bg-isk-text hover:text-white transition-all duration-300 rounded-full"
               >
                 <ArrowRight size={20} strokeWidth={1} />
               </button>
            </div>

            {/* The actual slider */}
            <div 
              ref={scrollRef}
              className="flex space-x-6 md:space-x-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-[10vw]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {allProjects.map((project, index) => (
                <div key={project.id} className="snap-center">
                  <BeforeAfterCard project={project} index={index} isSlide={true} />
                </div>
              ))}
              
              {/* End Spacer */}
              <div className="flex-shrink-0 w-24 md:w-48 flex items-center justify-center">
                 <div className="vertical-text font-serif text-[10px] tracking-widest text-isk-text/30">
                   END OF ARCHIVES — ISK
                 </div>
              </div>
            </div>

            {/* Progress indicator bar */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-16">
               <div className="h-[1px] w-full bg-isk-line relative overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-isk-gold origin-left w-full"
                  />
               </div>
               <div className="flex justify-between mt-4">
                  <span className="font-mono text-[10px] text-isk-text/40 tracking-widest uppercase">Slide to explore archive</span>
                  <span className="font-mono text-[10px] text-isk-text/40 tracking-widest uppercase">{allProjects.length} PROJECTS TOTAL</span>
               </div>
            </div>

            {/* Close / Return button */}
            <div className="flex justify-center mt-12">
               <button 
                 onClick={() => {
                   setShowArchive(false);
                   window.scrollTo({ 
                      top: (document.getElementById('projects')?.offsetTop || 0) - 100, 
                      behavior: 'smooth' 
                   });
                 }}
                 className="group flex flex-col items-center"
               >
                 <span className="font-mono text-[10px] tracking-widest-2xl mb-2 group-hover:text-isk-gold transition-colors">CLOSE ARCHIVE</span>
                 <div className="w-12 h-[1px] bg-isk-text group-hover:bg-isk-gold transition-all duration-300 group-hover:w-20"></div>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};