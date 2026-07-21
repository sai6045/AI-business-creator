import { motion } from 'framer-motion';
import { LayoutTemplate, Zap, Cpu, Building2, Check, X } from 'lucide-react';

const stats = [
  {
    icon: LayoutTemplate,
    value: "100+",
    label: "Business Templates",
    desc: "Ready for every industry",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: Zap,
    value: "95%",
    label: "Faster Planning",
    desc: "vs. traditional methods",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Cpu,
    value: "20+",
    label: "AI Modules",
    desc: "Specialized for each function",
    gradient: "from-fuchsia-500 to-pink-600"
  },
  {
    icon: Building2,
    value: "∞",
    label: "Enterprise Ready",
    desc: "SOC 2 compliant + API access",
    gradient: "from-emerald-500 to-teal-600"
  }
];

const comparison = {
  with: [
    "Complete in 10 minutes",
    "Professional quality",
    "Data-driven insights",
    "All formats included",
    "Unlimited revisions"
  ],
  without: [
    "Weeks of research",
    "Expensive consultants",
    "Guesswork",
    "Multiple tools",
    "Fixed deliverables"
  ]
};

export const WhyChooseUs = () => {
  return (
    <section className="section-padding container-max relative border-y border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-violet-900/10 pointer-events-none" />

      <div className="relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            Built for the <span className="gradient-text from-violet-600 to-blue-600">Modern Founder</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Everything you need to go from napkin sketch to investor-ready, without the $50K consulting fee.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-400">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card rounded-2xl p-8 border border-emerald-500/20 bg-emerald-500/5">
            <h3 className="text-xl font-bold text-white mb-6">With AI Business Creator</h3>
            <ul className="space-y-4">
              {comparison.with.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-red-500/20 bg-red-500/5">
            <h3 className="text-xl font-bold text-white mb-6">Without AI Business Creator</h3>
            <ul className="space-y-4">
              {comparison.without.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
