import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <div id="philosophy" className="relative bg-isk-bg bg-grid border-t border-isk-line/50">
      <Section className="relative z-10">
        
        {/* Architectural Guide Lines */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-isk-line/40 hidden md:block" />
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-isk-line/40 hidden md:block" />

        {/* Large Vertical Title Background */}
        <div className="absolute top-12 left-6 md:left-16 opacity-[0.03] pointer-events-none select-none">
            <span className="font-serif font-light text-6xl md:text-[10rem] vertical-text tracking-[0.2em] text-isk-text leading-none">
              美学・構造
            </span>
        </div>

        <div className="flex flex-col items-center mb-20 md:mb-40 relative">
            {/* Small vertical line decoration */}
            <div className="h-16 w-[1px] bg-isk-gold mb-6"></div>
            
            <span className="text-isk-gold font-mono tracking-widest-2xl text-[10px] md:text-xs mb-4">OUR PHILOSOPHY</span>
            <h2 className="text-2xl md:text-4xl font-serif font-light text-isk-text tracking-widest-xl text-center">
                ISKのこだわり
            </h2>
            <p className="mt-8 md:mt-12 text-isk-text/80 leading-[2.2] md:leading-[2.5] max-w-2xl text-center font-serif font-light text-xs md:text-sm tracking-wider bg-isk-bg/80 backdrop-blur-sm p-4">
                美しい仕上げは正確な下地と綿密な対話から生まれます。<br/>
                ISKは技術とコミュニケーションの両輪で<br/>
                理想の空間を形にします。
            </p>
        </div>

        <div className="space-y-32 md:space-y-48">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-24 group">
                <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
                    whileInView={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full md:w-7/12 relative"
                >
                    <div className="absolute top-4 -left-4 w-full h-full border border-isk-text/10 z-0 hidden md:block transition-all duration-700 group-hover:top-2 group-hover:-left-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop" 
                        alt="Meeting" 
                        className="w-full h-[300px] md:h-[500px] object-cover img-matte relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
                
                <div className="w-full md:w-5/12 flex flex-col justify-center">
                     <motion.div
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.4 }}
                       className="relative"
                     >
                       {/* Giant Number */}
                       <span className="absolute -top-16 -left-8 text-[8rem] font-mono font-thin text-isk-text/5 select-none -z-10">01</span>
                       
                       <span className="block font-mono text-[10px] text-isk-gold tracking-widest mb-4 border-b border-isk-gold/30 w-fit pb-1">DIALOGUE</span>
                       <h3 className="font-serif font-light text-2xl md:text-3xl text-isk-text tracking-widest mb-6 leading-relaxed">
                          納得いくまで<br/>話し合う
                       </h3>
                       <p className="text-isk-text/70 leading-[2.0] md:leading-[2.2] font-serif font-light text-sm tracking-wide">
                            一方的な工事はしません。<br/>
                            お客様のイメージと現場の状況をすり合わせ、納得できる答えが見つかるまで対話を重ねます。
                       </p>
                     </motion.div>
                </div>
            </div>

            {/* Item 2 - Reverse */}
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 md:gap-24 group">
                <motion.div 
                    initial={{ clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)" }}
                    whileInView={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full md:w-7/12 relative"
                >
                    <div className="absolute -top-4 -right-4 w-full h-full border border-isk-text/10 z-0 hidden md:block transition-all duration-700 group-hover:-top-2 group-hover:-right-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                        alt="Construction site" 
                        className="w-full h-[300px] md:h-[500px] object-cover img-matte relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
                
                <div className="w-full md:w-5/12 flex flex-col justify-center md:items-end md:text-right">
                     <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.4 }}
                       className="relative"
                     >
                       <span className="absolute -top-16 -right-8 text-[8rem] font-mono font-thin text-isk-text/5 select-none -z-10">02</span>

                       <span className="block font-mono text-[10px] text-isk-gold tracking-widest mb-4 border-b border-isk-gold/30 w-fit ml-auto pb-1">FLEXIBILITY</span>
                       <h3 className="font-serif font-light text-2xl md:text-3xl text-isk-text tracking-widest mb-6 leading-relaxed">
                          店舗の営業を守る
                       </h3>
                       <p className="text-isk-text/70 leading-[2.0] md:leading-[2.2] font-serif font-light text-sm tracking-wide">
                            夜間や休日の施工など、お店の営業スケジュールを考慮した工程組みも可能です。ビジネスの機会損失を最小限に抑えます。
                       </p>
                     </motion.div>
                </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-24 group">
                <motion.div 
                    initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
                    whileInView={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full md:w-7/12 relative"
                >
                    <div className="absolute bottom-4 -left-4 w-full h-full border border-isk-text/10 z-0 hidden md:block transition-all duration-700 group-hover:bottom-2 group-hover:-left-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1588265057032-15f5d638703c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Details" 
                        className="w-full h-[300px] md:h-[500px] object-cover img-matte relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
                
                <div className="w-full md:w-5/12 flex flex-col justify-center">
                     <motion.div
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.4 }}
                       className="relative"
                     >
                       <span className="absolute -top-16 -left-8 text-[8rem] font-mono font-thin text-isk-text/5 select-none -z-10">03</span>

                       <span className="block font-mono text-[10px] text-isk-gold tracking-widest mb-4 border-b border-isk-gold/30 w-fit pb-1">DETAILS</span>
                       <h3 className="font-serif font-light text-2xl md:text-3xl text-isk-text tracking-widest mb-6 leading-relaxed">
                          見えない場所こそ<br/>美しく
                       </h3>
                       <p className="text-isk-text/70 leading-[2.0] md:leading-[2.2] font-serif font-light text-sm tracking-wide">
                            仕上げれば見えなくなる「下地」。しかし空間の寿命を決めるのはその隠れた部分です。一切の妥協なく土台をつくります。
                       </p>
                     </motion.div>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};