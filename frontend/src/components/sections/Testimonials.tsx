import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "NexaFlow",
    initials: "SC",
    avatarGradient: "from-violet-500 to-purple-600",
    stars: 5,
    quote: "I went from idea to a fully funded startup in 3 months. The business plan AI Business Creator generated was more thorough than what our $15K consulting firm produced. Our seed investors were genuinely impressed with the depth of analysis.",
    featured: false
  },
  {
    name: "Marcus Williams",
    role: "Co-Founder",
    company: "GreenPath Logistics",
    initials: "MW",
    avatarGradient: "from-emerald-500 to-teal-600",
    stars: 5,
    quote: "The competitor analysis feature alone identified 14 direct competitors we had missed, gave us their pricing strategies, and showed exactly where we could position ourselves. That insight was worth thousands of dollars.",
    featured: true
  },
  {
    name: "Priya Sharma",
    role: "Product Director",
    company: "HealthBridge AI",
    initials: "PS",
    avatarGradient: "from-pink-500 to-rose-600",
    stars: 5,
    quote: "We validated three different business models before picking the right one — in a single afternoon. The financial forecasting was shockingly accurate. Our actual year-one revenue came within 7% of the AI's base-case projection.",
    featured: false
  }
];

export const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section className="section-padding container-max">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
          Testimonials
        </span>
        <h2 className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'} leading-tight mb-4`}>
          Founders <span className="gradient-text">Love It</span>
        </h2>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Join 10,000+ entrepreneurs who've launched with AI Business Creator.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className={`glass-card rounded-2xl p-7 relative ${
              testimonial.featured ? 'gradient-border-card shadow-lg glow-violet md:-translate-y-2' : ''
            }`}
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-violet-500/20" />
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed italic mb-6`}>
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white font-bold`}>
                {testimonial.initials}
              </div>
              <div>
                <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</div>
                <div className="text-slate-500 text-xs">{testimonial.role} · {testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
