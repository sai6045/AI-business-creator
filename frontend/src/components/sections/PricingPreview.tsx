import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Toggle } from '@/components/ui/Toggle'

const plans = [
  {
    id: 'free',
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for exploring and validating your first idea.',
    features: [
      '3 business plans per month',
      'Basic competitor analysis',
      'Financial overview',
      'PDF export',
      'Community support',
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline' as const,
    featured: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'Everything you need to launch and scale your startup.',
    features: [
      'Unlimited business plans',
      'Full competitor intelligence',
      'Advanced financial models',
      'Brand identity package',
      'Marketing strategy suite',
      'Pitch deck generator',
      'Priority AI generation',
      'Email & chat support',
    ],
    cta: 'Start Pro Trial',
    ctaVariant: 'primary' as const,
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Custom AI solutions for teams and agencies.',
    features: [
      'Everything in Pro',
      'Custom AI training',
      'White-label options',
      'API access',
      'Team collaboration',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    ctaVariant: 'secondary' as const,
    featured: false,
  },
]

export function PricingPreview() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 to-surface-800/50" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-3 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Simple,{' '}
            <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-slate-400 mb-8">Start free, upgrade when you're ready. No hidden fees.</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Monthly
            </span>
            <Toggle
              checked={isYearly}
              onChange={e => setIsYearly(e.target.checked)}
              size="md"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yearly{' '}
              <Badge variant="success" className="ml-1">
                Save 20%
              </Badge>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-b from-primary-900/50 to-surface-800 border-2 border-primary-500/50 shadow-2xl shadow-primary-500/10'
                  : 'bg-surface-800 border border-surface-500'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.featured && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="px-4 py-1.5 text-xs font-bold shadow-lg">
                    <Zap className="w-3 h-3" fill="currentColor" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.description}</p>

                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 mb-1.5">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-black text-white">Custom</div>
                )}
              </div>

              <Link to={plan.id === 'enterprise' ? '/contact' : '/dashboard'}>
                <Button variant={plan.ctaVariant} size="md" fullWidth className="mb-6">
                  {plan.cta}
                </Button>
              </Link>

              <div className="space-y-3">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.featured ? 'bg-primary-500/20' : 'bg-surface-600'
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 ${plan.featured ? 'text-primary-400' : 'text-slate-400'}`}
                      />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
