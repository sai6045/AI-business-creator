import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'NexaFlow',
    avatar: 'SC',
    avatarColor: 'from-primary-500 to-accent-500',
    quote:
      "I had a SaaS idea but no idea how to structure it as a business. AI Business Creator gave me a 50-page business plan, complete financial projections, and a pitch deck in under 10 minutes. We raised our seed round 3 months later.",
    rating: 5,
    featured: false,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    role: 'Co-Founder',
    company: 'GreenPath Logistics',
    avatar: 'MW',
    avatarColor: 'from-emerald-500 to-teal-600',
    quote:
      "The competitor analysis alone was worth the subscription price. It identified 14 direct competitors I didn't even know existed and gave us a clear positioning strategy. Our go-to-market plan was incredibly detailed.",
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Product Director',
    company: 'HealthBridge AI',
    avatar: 'PS',
    avatarColor: 'from-pink-500 to-rose-600',
    quote:
      "We used it to validate three different business ideas before committing to one. The financial forecasting is surprisingly accurate — our actual year-one revenue was within 8% of the AI's projection.",
    rating: 5,
    featured: false,
  },
]

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-800/0 via-primary-950/10 to-surface-900/0" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Loved by Founders{' '}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-lg text-slate-400">
            Join thousands of entrepreneurs who've launched their businesses with AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                testimonial.featured
                  ? 'bg-gradient-to-br from-primary-900/40 to-accent-900/30 border border-primary-500/30'
                  : 'bg-surface-800 border border-surface-600'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {testimonial.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
              )}

              <Quote className="w-8 h-8 text-primary-500/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
