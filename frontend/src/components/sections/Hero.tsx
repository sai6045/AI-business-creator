import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Star, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const stats = [
  { icon: Users, value: '10,000+', label: 'Businesses Created' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-max px-6 flex flex-col items-center text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <Badge variant="primary" dot className="mb-8 px-4 py-2 text-sm">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Business Creation Platform
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 text-white"
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
        >
          Launch Your Dream
          <br />
          Business{' '}
          <span className="gradient-text">With AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          Transform any idea into a complete startup — business plans, brand identity, competitor
          analysis, financial forecasts, marketing strategies, and pitch decks. All in minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
        >
          <Link to="/dashboard">
            <Button variant="primary" size="lg" className="group">
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="gap-3">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-3 h-3 text-white fill-white" />
            </span>
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary-400" />
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className="w-full max-w-5xl relative"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Glow behind mockup */}
          <div className="absolute inset-x-0 -bottom-20 h-40 bg-primary-600/20 blur-3xl" />

          {/* Browser Chrome */}
          <div className="relative rounded-2xl border border-white/10 bg-surface-800 shadow-2xl shadow-black/50 overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface-900">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-surface-700 border border-white/5 text-xs text-slate-500">
                app.aibusinesscreator.com/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-surface-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="h-6 w-48 bg-gradient-to-r from-primary-600/40 to-accent-500/40 rounded-lg mb-2" />
                  <div className="h-3 w-32 bg-surface-600 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-primary-600/30 rounded-lg border border-primary-500/20" />
                  <div className="h-8 w-8 bg-surface-600 rounded-lg" />
                </div>
              </div>
              {/* Metric Cards */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {['Business Plans', 'Brand Assets', 'Competitors', 'Financials'].map((label, i) => (
                  <div key={label} className="p-3 rounded-xl bg-surface-700 border border-white/5">
                    <div className={`h-6 w-6 rounded-lg mb-2 ${['bg-primary-500/30', 'bg-accent-500/30', 'bg-emerald-500/30', 'bg-amber-500/30'][i]}`} />
                    <div className="h-5 w-12 bg-white/20 rounded mb-1" />
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              {/* Chart Area */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 h-32 rounded-xl bg-surface-700 border border-white/5 p-3">
                  <div className="flex items-end gap-1 h-full pb-2">
                    {[40, 65, 55, 80, 70, 90, 75, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary-600/60 to-primary-400/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-32 rounded-xl bg-surface-700 border border-white/5 p-3 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-primary-500/40 border-t-primary-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-400">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
