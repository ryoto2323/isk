import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Minato-ku Residence",
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    size: 'large'
  },
  {
    id: 2,
    title: "Blue Bottle Style Cafe",
    category: "Shop",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    size: 'small'
  },
  {
    id: 3,
    title: "Kamakura Salon",
    category: "Hair Salon",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb246?q=80&w=2070&auto=format&fit=crop",
    size: 'medium'
  },
  {
    id: 4,
    title: "Shibuya Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    size: 'medium'
  },
  {
    id: 5,
    title: "Setagaya House",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    size: 'small'
  },
  {
    id: 6,
    title: "Ginza Bar",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1795&auto=format&fit=crop",
    size: 'large'
  },
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-white">
       <div className="flex flex-col items-start mb-24 border-l-2 border-isk-gold pl-6 md:pl-8">
          <span className="text-isk-text/40 font-mono tracking-widest-2xl text-xs mb-4 block">WORKS / ARCHIVE</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-isk-text tracking-widest">
              施工事例
          </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className={`group relative cursor-pointer ${
                project.size === 'large' ? 'md:row-span-2' : ''
            }`}
            data-cursor="view"
          >
            <div className="relative overflow-hidden w-full h-full bg-[#E5E5E5] aspect-[4/5] md:aspect-auto md:min-h-[400px]">
               
               {/* Blueprint Overlay (Visible on Hover) */}
               <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-4 border-[0.5px] border-white/50"></div>
                  <div className="absolute top-4 right-4 p-2">
                     <ArrowUpRight className="text-white w-6 h-6" strokeWidth={1} />
                  </div>
                  
                  {/* Measurements */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="h-8 w-[1px] bg-white/40 mb-2"></span>
                    <span className="font-mono text-[9px] text-white/80 vertical-text">H: 2400mm</span>
                    <span className="h-8 w-[1px] bg-white/40 mt-2"></span>
                  </div>
                  
                  {/* Crosshairs */}
                  <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white"></div>
               </div>

              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover img-matte transition-all duration-1000 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              
              {/* Bottom Info Bar - slides up */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 z-30">
                 <div className="overflow-hidden">
                    <p className="text-white/70 text-[10px] font-mono tracking-widest uppercase mb-2">
                        NO.0{project.id} — {project.category}
                    </p>
                 </div>
                 <div className="overflow-hidden">
                    <h3 className="text-white font-serif font-light text-xl md:text-2xl tracking-widest">
                        {project.title}
                    </h3>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
         <a href="#" className="inline-block border border-isk-text px-12 py-4 font-mono text-xs tracking-widest-2xl hover:bg-isk-text hover:text-white transition-colors duration-300">
            VIEW ALL ARCHIVES
         </a>
      </div>
    </Section>
  );
};