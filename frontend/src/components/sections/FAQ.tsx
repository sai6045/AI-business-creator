import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const faqs = [
  {
    q: "How does AI Business Creator work?",
    a: "You describe your business idea in plain English — industry, target market, problem you solve, competitive advantage. Our AI simultaneously runs 20+ specialized modules to research the market, analyze competitors, model financials, and generate complete documentation. The entire process takes under 10 minutes."
  },
  {
    q: "Is my business idea kept completely confidential?",
    a: "Absolutely. Your ideas are encrypted end-to-end using AES-256 encryption and are never used to train our AI models or shared with third parties. We are SOC 2 Type II compliant and GDPR certified. Your intellectual property is 100% yours."
  },
  {
    q: "How accurate are the financial projections?",
    a: "Our financial models are built on real market data, industry benchmarks, and comparable company metrics. They consistently come within 10-15% of actual results for our users' first year. They represent a data-driven starting framework — not a guarantee — but far more reliable than guesswork."
  },
  {
    q: "Can I edit and customize the generated content?",
    a: "Yes, 100%. All generated documents are fully editable in-platform and exportable to Word, Excel, and PowerPoint. You can regenerate any individual section as many times as you like until it's exactly right."
  },
  {
    q: "What formats can I export my startup package in?",
    a: "Business plans export as PDF or Word. Financial models as Excel with formulas intact. Pitch decks as PowerPoint or PDF. Brand guidelines as PDF. Website copy as structured markdown or Word. Enterprise users also get API access for custom integrations."
  },
  {
    q: "Do I need business or technical knowledge to use this?",
    a: "None required. If you can describe your idea in a few sentences, our AI handles the rest. We have successful users ranging from first-time entrepreneurs to serial founders, MBAs to artists. The AI brings the expertise."
  },
  {
    q: "How is this different from ChatGPT or other AI tools?",
    a: "AI Business Creator uses 20+ specialized models each fine-tuned for a specific business function — competitor intelligence, financial modeling, brand strategy, etc. General LLMs produce generic output. We produce startup-grade, investor-ready documents with real market data integration."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, cancel anytime with zero friction. Paid plan access continues until end of billing period. We offer a 14-day money-back guarantee on all paid plans — no questions asked. We're confident you'll love it."
  }
];

export const FAQ = () => {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section-padding container-max max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
          FAQ
        </span>
        <h2 className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'} leading-tight mb-4`}>
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} mb-8`}>
          Everything you need to know about AI Business Creator.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card rounded-xl overflow-hidden ${
                isOpen 
                  ? (isDark ? 'border-violet-500/25' : 'border-violet-500/50') 
                  : (isDark ? 'border-white/[0.07]' : 'border-black/[0.07]')
              } transition-colors relative`}
            >
              {isOpen && <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-blue-500" />}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center gap-4 p-5 text-left focus:outline-none"
              >
                <span className={`text-sm md:text-base font-semibold ${
                  isOpen 
                    ? (isDark ? 'text-white' : 'text-gray-900') 
                    : (isDark ? 'text-slate-300' : 'text-slate-700')
                }`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  isOpen 
                    ? 'bg-violet-500 text-white' 
                    : (isDark ? 'bg-white/10 text-slate-400' : 'bg-black/5 text-slate-500')
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed px-5 pb-5`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
