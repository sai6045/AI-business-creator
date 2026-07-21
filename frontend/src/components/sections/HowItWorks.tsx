import { motion } from 'framer-motion'
import { Lightbulb, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Describe Your Idea',
    description:
      'Tell us about your business idea in plain English. Industry, target audience, problem you solve — the more detail, the better the output.',
    color: 'from-primary-500 to-primary-700',
    shadow: 'shadow-primary-500/30',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Generates Everything',
    description:
      'Our AI engine creates a complete business suite: business plan, brand identity, competitive landscape, financial model, and marketing strategy.',
    color: 'from-accent-500 to-accent-700',
    shadow: 'shadow-accent-500/30',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description:
      'Download your complete startup package, share your pitch deck with investors, and launch with confidence using your AI-crafted strategy.',
    color: 'from-emerald-500 to-emerald-700',
    shadow: 'shadow-emerald-500/30',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-max">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-3 block">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            From Idea to Launch{' '}
            <span className="gradient-text">in 3 Steps</span>
          </h2>
          <p className="text-lg text-slate-400">
            No business expertise required. Just bring your idea — we handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-px bg-gradient-to-r from-primary-500/50 via-accent-500/50 to-emerald-500/50" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ${step.shadow} relative z-10`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-black shadow-lg z-20`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl scale-110`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
