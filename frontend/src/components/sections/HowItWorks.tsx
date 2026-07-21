import { motion } from 'framer-motion';
import { Lightbulb, Brain, Cpu, Download, Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Enter Your Business Idea",
    desc: "Simply type your business concept in plain English. Include your industry, target audience, and the problem you're solving. The more detail you provide, the better your output.",
    color: "from-violet-500 to-purple-600"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Researches the Market",
    desc: "Our AI simultaneously scans millions of data points — market trends, competitor moves, pricing data, consumer behavior — to build a comprehensive picture of your opportunity.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    number: "03",
    icon: Cpu,
    title: "Generate Your Complete Startup",
    desc: "In under 10 minutes, receive a full startup package: business plan, brand identity, financial models, competitor analysis, marketing strategy, pitch deck, and more.",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    number: "04",
    icon: Download,
    title: "Download Everything",
    desc: "Export your complete startup package in professional formats — PDF, Word, Excel, PowerPoint. Ready for investors, partners, banks, or your own team.",
    color: "from-emerald-500 to-teal-600"
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-padding container-max relative">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-20"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-4">
          Process
        </span>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
          From Idea to Launch in <span className="gradient-text from-violet-600 to-blue-600">4 Simple Steps</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          No MBA required. No consultants. Just describe your idea and watch AI do the rest.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-7 top-0 bottom-12 w-[2px] bg-gradient-to-b from-violet-600 via-blue-600 to-emerald-600 hidden md:block opacity-30" />

        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br bg-opacity-10 border-4 border-slate-900 shadow-xl z-10 relative bg-slate-900">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`} />
                <span className="font-bold text-white relative z-10">{step.number}</span>
              </div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl flex-grow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10 items-center justify-center md:justify-start"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 border-4 border-slate-900 shadow-xl z-10 relative">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-white">
                Ready to Launch 🚀
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
