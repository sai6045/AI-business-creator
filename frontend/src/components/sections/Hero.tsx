import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Palette } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

export function Hero() {
  const { isDark } = useTheme()

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className={cn('relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden', isDark ? 'bg-[#07070f]' : 'bg-white')}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px] mix-blend-screen" />
        <div className="hero-glow" />
        <div className={cn('absolute inset-0', isDark ? 'mesh-bg' : 'bg-grid-pattern opacity-[0.03]')} />
      </div>

      <div className="container-max section-padding mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={fadeUp} className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8 badge-pill', isDark ? 'border-white/10 bg-white/5' : 'border-violet-200 bg-violet-50 text-violet-700')}>
              <Sparkles className={cn('w-4 h-4', isDark ? 'text-violet-400' : 'text-violet-600')} />
              <span className={cn('text-xs font-semibold uppercase tracking-wider', isDark ? 'text-slate-300' : 'text-violet-700')}>10,000+ startups launched globally</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className={cn('text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.03] tracking-tight mb-6', isDark ? 'text-white' : 'text-gray-900')}>
              Build Your Startup <br />
              with <span className="gradient-text">Artificial Intelligence</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={cn('text-lg md:text-xl max-w-xl leading-relaxed mb-10', isDark ? 'text-slate-400' : 'text-gray-600')}>
              Turn one simple business idea into a complete startup — including branding, business plans, financial forecasts, competitor analysis, marketing strategy, website content, and investor pitch decks.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-16">
              <button className="btn-gradient px-7 py-3.5 rounded-xl text-base font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all flex items-center gap-2 group">
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={cn('px-7 py-3.5 rounded-xl text-base font-medium border flex items-center gap-3 transition-colors', isDark ? 'border-white/10 text-slate-300 hover:bg-white/5' : 'border-gray-200 text-gray-700 hover:bg-gray-50')}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-md">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p className={cn('text-sm font-medium', isDark ? 'text-slate-500' : 'text-gray-500')}>Trusted by teams at</p>
              <div className="flex items-center gap-6 opacity-60 grayscale">
                <span className={cn('text-xl font-bold', isDark ? 'text-white' : 'text-gray-900')}>Stripe</span>
                <span className={cn('text-xl font-bold', isDark ? 'text-white' : 'text-gray-900')}>Google</span>
                <span className={cn('text-xl font-bold', isDark ? 'text-white' : 'text-gray-900')}>Microsoft</span>
                <span className={cn('text-xl font-bold', isDark ? 'text-white' : 'text-gray-900')}>YCombinator</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Illustration */}
          <div className="relative w-full h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            {/* Main Dashboard Card */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, rotateX: 5, z: -100 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, z: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn(
                'relative w-[110%] sm:w-full max-w-lg rounded-2xl glass-card p-5 border shadow-2xl z-10',
                isDark ? 'bg-[#0e0e1a]/80 border-white/[0.07] shadow-violet-900/20' : 'bg-white/90 border-gray-200 shadow-xl'
              )}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Browser Chrome */}
              <div className={cn('flex items-center gap-2 mb-6 pb-4 border-b', isDark ? 'border-white/[0.07]' : 'border-gray-100')}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className={cn('mx-auto w-1/2 h-5 rounded-md', isDark ? 'bg-white/[0.03]' : 'bg-gray-100')} />
              </div>

              {/* Dashboard Content */}
              <div className="space-y-6">
                <div className={cn('w-1/3 h-6 rounded-lg bg-gradient-to-r', isDark ? 'from-white/10 to-white/5' : 'from-gray-200 to-gray-100')} />
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={cn('p-3 rounded-xl border', isDark ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-gray-50 border-gray-100')}>
                      <div className={cn('w-8 h-8 rounded-full mb-3', i===1 ? 'bg-violet-500/20' : i===2 ? 'bg-blue-500/20' : 'bg-emerald-500/20')} />
                      <div className={cn('w-full h-4 rounded mb-2', isDark ? 'bg-white/10' : 'bg-gray-200')} />
                      <div className={cn('w-2/3 h-3 rounded', isDark ? 'bg-white/5' : 'bg-gray-100')} />
                    </div>
                  ))}
                </div>

                <div className={cn('h-40 rounded-xl border p-4 flex items-end gap-2', isDark ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-gray-50 border-gray-100')}>
                  {[40, 70, 45, 90, 65, 85, 100, 75, 55, 80, 60, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + (i * 0.05), duration: 0.8, type: "spring" }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-blue-500 opacity-80"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className={cn(
                'absolute -right-4 md:-right-12 top-10 w-48 p-4 rounded-2xl border shadow-xl z-20 backdrop-blur-md',
                isDark ? 'bg-[#131328]/90 border-white/10' : 'bg-white/95 border-gray-200'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className={cn('text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>Business Plan</div>
              </div>
              <div className="text-xs text-emerald-500 font-medium">Generated ✓</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className={cn(
                'absolute -left-4 md:-left-16 bottom-20 w-52 p-4 rounded-2xl border shadow-xl z-20 backdrop-blur-md',
                isDark ? 'bg-[#131328]/90 border-white/10' : 'bg-white/95 border-gray-200'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-violet-500" />
                </div>
                <div className={cn('text-sm font-semibold', isDark ? 'text-white' : 'text-gray-900')}>Brand Identity</div>
              </div>
              <div className={cn('text-xs', isDark ? 'text-slate-400' : 'text-gray-500')}>5 assets ready</div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className={cn(
                'absolute -right-8 md:-right-20 top-1/2 -translate-y-1/2 w-48 p-4 rounded-2xl border shadow-xl z-20 backdrop-blur-md',
                isDark ? 'bg-[#131328]/90 border-white/10' : 'bg-white/95 border-gray-200'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                </div>
                <div className={cn('text-xs font-semibold uppercase', isDark ? 'text-slate-400' : 'text-gray-500')}>Revenue Forecast</div>
              </div>
              <div className="text-2xl font-bold gradient-text mb-1">$2.4M</div>
              <div className={cn('text-xs', isDark ? 'text-slate-500' : 'text-gray-400')}>Year 1 projection</div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
