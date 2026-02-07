import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-isk-bg/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl h-full max-h-[80vh] bg-white border border-isk-line shadow-2xl relative flex flex-col overflow-hidden"
          >
            {/* Architectural Border decoration */}
            <div className="absolute inset-2 border border-isk-text/5 pointer-events-none" />
            
            {/* Header */}
            <div className="flex justify-between items-center p-8 md:p-12 border-b border-isk-line relative z-10">
              <div>
                <span className="font-mono text-[10px] tracking-widest-2xl text-isk-gold block mb-2">LEGAL / COMPLIANCE</span>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-isk-text">
                  プライバシーポリシー
                </h2>
              </div>
              <button
                onClick={onClose}
                className="group flex flex-col items-center justify-center p-2 transition-colors hover:text-isk-gold"
              >
                <X size={24} strokeWidth={1} />
                <span className="font-mono text-[8px] tracking-widest mt-1 opacity-50 group-hover:opacity-100">CLOSE</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 font-serif text-sm leading-relaxed text-isk-text/80 space-y-12">
              <section>
                <h3 className="text-isk-text font-medium mb-4 tracking-widest border-b border-isk-line w-fit pb-1">
                  01. 個人情報の収集について
                </h3>
                <p>
                  ISK（以下「当ブランド」といいます）は、お客様の個人情報を適正な手段により取得いたします。主に、お問い合わせフォームやLINE、お電話を通じてご提供いただく情報を指します。
                </p>
              </section>

              <section>
                <h3 className="text-isk-text font-medium mb-4 tracking-widest border-b border-isk-line w-fit pb-1">
                  02. 個人情報の利用目的
                </h3>
                <p>
                  当ブランドは、収集した個人情報を以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 opacity-80">
                  <li>リノベーション工事・施工に関する打ち合わせ、ご提案</li>
                  <li>お見積書のご送付および施工スケジュールの管理</li>
                  <li>アフターサービスやメンテナンスのご案内</li>
                  <li>当ブランドのサービス向上を目的とした統計データの分析</li>
                </ul>
              </section>

              <section>
                <h3 className="text-isk-text font-medium mb-4 tracking-widest border-b border-isk-line w-fit pb-1">
                  03. 第三者への開示・提供の禁止
                </h3>
                <p>
                  当ブランドは、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 opacity-80">
                  <li>お客様の同意がある場合</li>
                  <li>お客様が希望されるサービスを行なうために、当ブランドが業務を委託する業者に対して開示する場合</li>
                  <li>法令に基づき開示することが必要である場合</li>
                </ul>
              </section>

              <section>
                <h3 className="text-isk-text font-medium mb-4 tracking-widest border-b border-isk-line w-fit pb-1">
                  04. 個人情報の管理
                </h3>
                <p>
                  当ブランドは、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、個人情報の厳重な管理を行ないます。
                </p>
              </section>

              <section className="pt-8 border-t border-isk-line/50">
                <p className="text-[10px] font-mono tracking-widest opacity-40">
                  REVISED: 2024.12.01<br />
                  ISK INTERIOR WORKS
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};