import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "小さな工事でも依頼できますか？",
    answer: "もちろんです。棚板一枚の取り付けや、クロスの部分補修など、小規模な工事も喜んで承ります。"
  },
  {
    question: "LGS工事（軽天工事）だけでも頼めますか？",
    answer: "可能です。弊社は下地工事（LGS・ボード）の専門技術を持っておりますので、部分的な専門工事のご依頼にも柔軟に対応いたします。"
  },
  {
    question: "対応エリアはどこまでですか？",
    answer: "東京都、神奈川県、埼玉県南部を中心に対応しております。その他のエリアにつきましても、内容により対応可能ですので一度ご相談ください。"
  },
  {
    question: "店舗のデザインからお願いできますか？",
    answer: "はい。協力設計事務所やデザイナーと連携し、設計・デザインから施工までワンストップで対応可能です。"
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-isk-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-24">
            <span className="text-isk-gold font-sans tracking-widest-2xl text-xs mb-6 block">Q&A</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-isk-text tracking-widest-xl">
                よくある質問
            </h2>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-isk-line/60 pb-6">
              <button
                className="flex justify-between items-center w-full py-4 text-left group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-serif font-light text-isk-text tracking-wider group-hover:text-isk-text/70 transition-colors">
                  {item.question}
                </span>
                <span className="text-isk-text/40 transition-all duration-300 group-hover:text-isk-text">
                  {activeIndex === index ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 pt-2 text-isk-text/70 font-serif font-light leading-[2.2] text-sm tracking-wide">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};