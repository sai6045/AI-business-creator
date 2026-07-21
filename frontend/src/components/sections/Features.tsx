import { motion } from 'framer-motion';
import { 
  FileText, Palette, Fingerprint, TrendingUp, BarChart2, Megaphone, 
  Presentation, Globe, Layers, DollarSign, ShieldAlert, Map 
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "AI Business Plan",
    desc: "Generate investor-grade business plans with market analysis, competitive landscape, and growth roadmap.",
    gradient: "from-violet-500 to-violet-700"
  },
  {
    icon: Palette,
    title: "Branding Generator",
    desc: "Create comprehensive brand guidelines including color palette, typography, tone of voice, and messaging.",
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    icon: Fingerprint,
    title: "Logo & Identity",
    desc: "Get AI-crafted logo concepts, brand assets, and a complete visual identity system for your startup.",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    icon: TrendingUp,
    title: "Financial Forecast",
    desc: "Build detailed financial projections with P&L statements, cash flow models, and break-even analysis.",
    gradient: "from-emerald-500 to-emerald-700"
  },
  {
    icon: BarChart2,
    title: "Competitor Analysis",
    desc: "Deep-dive into your competitive landscape with positioning maps, SWOT comparisons, and gap analysis.",
    gradient: "from-sky-500 to-cyan-600"
  },
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    desc: "Get a complete go-to-market strategy with channel mix, content calendar, and campaign frameworks.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Presentation,
    title: "Pitch Deck Generator",
    desc: "Create investor-ready pitch decks with compelling narratives, market sizing, and financial asks.",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Globe,
    title: "Website Generator",
    desc: "Generate full website copy, structure, and content strategy optimized for conversion and SEO.",
    gradient: "from-teal-500 to-teal-700"
  },
  {
    icon: Layers,
    title: "SWOT Analysis",
    desc: "Detailed Strengths, Weaknesses, Opportunities, and Threats analysis with actionable insights.",
    gradient: "from-amber-500 to-amber-700"
  },
  {
    icon: DollarSign,
    title: "Revenue Prediction",
    desc: "AI-powered revenue modeling with multiple scenarios, pricing strategy, and unit economics.",
    gradient: "from-lime-500 to-green-600"
  },
  {
    icon: ShieldAlert,
    title: "Risk Analysis",
    desc: "Identify and quantify business risks with mitigation strategies and contingency planning.",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: Map,
    title: "Business Roadmap",
    desc: "Create a detailed 12-24 month execution roadmap with milestones, KPIs, and team requirements.",
    gradient: "from-indigo-500 to-indigo-700"
  }
];

export const Features = () => {
  return (
    <section className="section-padding container-max relative border-y border-white/10 bg-slate-950">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-blue-900/10 pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            Everything You Need to <span className="gradient-text from-violet-600 to-blue-600">Build, Launch & Scale</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            12 powerful AI modules working together to transform your idea into a full business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass-card rounded-2xl p-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
