import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How does AI Business Creator work?',
    a: "You describe your business idea in plain English — the industry, target audience, problem you solve, and any other details. Our AI then generates a complete startup package including a business plan, brand identity, competitor analysis, financial projections, marketing strategy, and pitch deck. The whole process takes under 10 minutes.",
  },
  {
    q: 'Is my business idea kept confidential?',
    a: "Absolutely. All information you submit is encrypted end-to-end and never used to train AI models or shared with third parties. Your intellectual property remains 100% yours. We take data privacy seriously and are GDPR compliant.",
  },
  {
    q: 'How accurate are the financial projections?',
    a: "Our financial models are built using industry benchmarks, real market data, and comparable company analysis. They provide a solid starting framework, but we recommend adjusting the assumptions based on your specific local market and resources. Think of them as a professional starting point, not a guarantee.",
  },
  {
    q: 'Can I edit the generated documents?',
    a: "Yes! All generated content is fully editable. You can modify any section, add your own insights, and customize the documents to match your vision. You can also regenerate specific sections if you're not happy with the initial output.",
  },
  {
    q: 'What formats can I export to?',
    a: "You can export your business plan as a PDF or Word document, financial models as Excel spreadsheets, pitch decks as PowerPoint or PDF, and brand guidelines as a PDF or image package. Enterprise users also get API access for custom integrations.",
  },
  {
    q: 'Do I need any business or technical expertise to use this?',
    a: "Not at all. AI Business Creator is designed for everyone — from first-time entrepreneurs to experienced founders. If you have an idea and can describe it in plain language, our AI handles all the business expertise. It's like having a McKinsey consultant and a creative agency on demand.",
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: "Yes, you can cancel anytime with no questions asked. If you cancel a paid plan, you retain access until the end of your billing period. We also offer a 14-day money-back guarantee on all paid plans, no questions asked.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about AI Business Creator.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-primary-500/30 bg-surface-800'
                  : 'border-surface-500 bg-surface-800 hover:border-surface-400'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {openIndex === index && (
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
              )}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-sm font-semibold ${
                    openIndex === index ? 'text-white' : 'text-slate-200'
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    openIndex === index
                      ? 'bg-primary-600 text-white'
                      : 'bg-surface-600 text-slate-400'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-3 h-3" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
