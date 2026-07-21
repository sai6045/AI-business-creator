import { motion } from 'framer-motion'
import { FileText, Palette, BarChart2, TrendingUp, Megaphone, PresentationIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'

const features = [
  {
    icon: FileText,
    title: 'Business Planning',
    description:
      'Generate comprehensive business plans with market analysis, SWOT analysis, operational strategies, and growth roadmaps tailored to your industry.',
    color: 'from-primary-500 to-primary-700',
    glow: 'group-hover:shadow-primary-500/20',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Create a complete brand identity including logo concepts, color palettes, typography, brand voice, and visual guidelines — all in minutes.',
    color: 'from-accent-500 to-accent-700',
    glow: 'group-hover:shadow-accent-500/20',
  },
  {
    icon: BarChart2,
    title: 'Competitor Analysis',
    description:
      'Discover and analyze your top competitors. Understand their strengths, weaknesses, pricing strategies, and positioning to find your edge.',
    color: 'from-sky-500 to-sky-700',
    glow: 'group-hover:shadow-sky-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Financial Forecasting',
    description:
      'Build realistic financial models with revenue projections, expense breakdowns, cash flow analysis, and break-even calculations.',
    color: 'from-emerald-500 to-emerald-700',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy',
    description:
      'Get a tailored go-to-market strategy with channel recommendations, content calendar, customer personas, and campaign ideas.',
    color: 'from-orange-500 to-orange-700',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    icon: PresentationIcon,
    title: 'Pitch Deck Generator',
    description:
      'Create investor-ready pitch decks with compelling narratives, market size slides, traction metrics, and financial ask slides.',
    color: 'from-pink-500 to-pink-700',
    glow: 'group-hover:shadow-pink-500/20',
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 via-surface-800/50 to-surface-900" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Everything You Need to <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Our AI-powered platform provides all the essential tools and resources you need to turn your idea into a thriving business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full group bg-surface-800/50 hover:bg-surface-800 transition-colors duration-300 border-surface-600">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transition-all duration-300 ${feature.glow}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
