import React from 'react';
import { Section } from './ui/Section';
import { Phone, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-isk-bg py-32 md:py-40 border-t border-isk-line relative overflow-hidden">
      {/* Decorative background grid consistency */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <Section className="!py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          <div>
             <span className="text-isk-gold font-sans tracking-widest-2xl text-xs mb-6 block">CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest leading-tight mb-12 text-isk-text">
              理想の空間を<br/>
              共に創りましょう。
            </h2>
            <p className="text-isk-text/70 font-serif font-light leading-[2.5] tracking-wide mb-16">
              お気軽にお問い合わせください。<br/>
              現場の状況写真はLINEからお送りいただくと<br className="hidden md:inline"/>スムーズにお見積り可能です。
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {/* LINE Button - Refined for light background */}
            <a 
              href="https://line.me/ti/p/JTyJN1p8ed" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full border border-isk-text/10 bg-white overflow-hidden py-8 px-8 flex justify-between items-center transition-all duration-500 hover:border-[#06c755]/50 shadow-sm"
            >
               <div className="absolute inset-0 bg-[#06c755] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out opacity-5"></div>
               
               <span className="font-serif font-light tracking-widest text-lg relative z-10 text-isk-text group-hover:text-isk-text transition-colors">LINEで相談・見積もり</span>
               <ArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500 text-gray-300 group-hover:text-[#06c755]" strokeWidth={1} />
            </a>

            {/* Phone Button - Refined for light background */}
            <a 
              href="tel:09071619479" 
              className="group relative w-full border border-isk-text/10 bg-white hover:bg-isk-text hover:text-white text-isk-text py-8 px-8 flex justify-between items-center transition-all duration-500 shadow-sm"
            >
               <div className="flex flex-col relative z-10">
                   <span className="text-[10px] tracking-widest-xl opacity-50 mb-2 font-sans">お電話でのお問い合わせ</span>
                   <span className="font-sans font-light text-xl md:text-2xl tracking-widest-xl">090-7161-9479</span>
               </div>
               <Phone size={24} className="relative z-10 transform group-hover:rotate-12 transition-transform duration-500 opacity-30 group-hover:opacity-100" strokeWidth={1} />
            </a>

             <p className="text-[10px] text-isk-text/40 font-serif mt-4 text-center md:text-left tracking-widest">
                受付時間: 9:00 - 18:00 (日曜定休)
             </p>
          </div>

        </div>
      </Section>
    </div>
  );
};