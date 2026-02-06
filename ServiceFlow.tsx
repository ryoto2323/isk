import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const services = [
  "店舗・マンションリノベーション",
  "LGS（軽量鉄骨）・ボード工事",
  "内装大工工事一式",
  "オーダー家具製作",
  "原状回復工事"
];

const flowSteps = [
  { num: "01", title: "お問い合わせ", desc: "お電話またはLINE、メールフォームよりお気軽にご連絡ください。" },
  { num: "02", title: "現地調査", desc: "現地を拝見し、採寸や設備の確認を行います。" },
  { num: "03", title: "プラン・お見積り", desc: "ご要望に基づき、プランとお見積書をご提出します。" },
  { num: "04", title: "ご契約・施工", desc: "内容にご納得いただけましたら契約となります。" },
  { num: "05", title: "お引き渡し", desc: "仕上がりをご確認いただき、お引き渡しとなります。" },
];

export const ServiceFlow: React.FC = () => {
  return (
    <Section id="service" className="bg-isk-bg bg-grid border-t border-isk-line">
      {/* Spec Sheet Style Layout */}
      <div className="border border-isk-line/60 p-6 md:p-16 relative bg-white/80 backdrop-blur-sm">
        {/* Corner Marks */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-isk-text/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-isk-text/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-isk-text/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-isk-text/50" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0 lg:divide-x lg:divide-isk-line/60">
          
          {/* Services Column */}
          <div className="lg:pr-16">
            <div className="flex items-baseline justify-between border-b border-isk-line/60 pb-6 mb-12">
               <h2 className="text-2xl md:text-3xl font-serif font-light text-isk-text tracking-widest">
                事業内容
              </h2>
              <span className="text-isk-text/30 font-mono tracking-widest text-[10px]">SPEC - 01</span>
            </div>
           
            <ul className="space-y-6">
              {services.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center group py-2 border-b border-dashed border-isk-line/50"
                >
                  <div className="w-1.5 h-1.5 bg-isk-text/20 mr-4 rotate-45 group-hover:bg-isk-gold transition-colors"></div>
                  <span className="font-serif font-light text-sm md:text-base text-isk-text tracking-wide">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Flow Column */}
          <div className="lg:pl-16">
             <div className="flex items-baseline justify-between border-b border-isk-line/60 pb-6 mb-12">
               <h2 className="text-2xl md:text-3xl font-serif font-light text-isk-text tracking-widest">
                施工工程
              </h2>
              <span className="text-isk-text/30 font-mono tracking-widest text-[10px]">SPEC - 02</span>
            </div>
            
            <div className="relative space-y-0">
              {/* Vertical connecting line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-isk-line/60 z-0"></div>

              {flowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {/* Node */}
                  <div className="absolute left-[11px] top-1.5 w-[9px] h-[9px] bg-isk-bg border border-isk-text z-10"></div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                         <span className="font-mono font-bold text-xs text-isk-text/30 mr-3 w-6">{step.num}</span>
                         <h3 className="text-base font-serif font-medium text-isk-text tracking-widest">{step.title}</h3>
                    </div>
                    <p className="text-xs text-isk-text/60 font-serif font-light leading-relaxed tracking-wide">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};