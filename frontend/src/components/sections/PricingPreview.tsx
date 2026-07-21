import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Toggle } from '@/components/ui/Toggle';

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    tagline: "Perfect for exploring your first idea",
    features: ["3 business plans/month", "Basic competitor overview", "Financial summary", "PDF export", "Community support"],
    cta: "Get Started Free",
    ctaStyle: "outline",
    featured: false
  },
  {
    name: "Pro",
    badge: "Most Popular",
    price: { monthly: 49, yearly: 39 },
    tagline: "Everything you need to launch",
    features: ["Unlimited business plans", "Full competitor intelligence", "Advanced financial models", "Brand identity package", "Marketing strategy suite", "Pitch deck generator", "Website content generator", "Priority AI generation", "Email & chat support"],
    cta: "Start 14-Day Free Trial",
    ctaStyle: "btn-gradient",
    featured: true
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    tagline: "For teams and agencies",
    features: ["Everything in Pro", "Custom AI training", "White-label options", "Full API access", "Team workspace", "Custom integrations", "99.9% SLA", "Dedicated success manager"],
    cta: "Contact Sales",
    ctaStyle: "outline",
    featured: false
  }
];

export const PricingPreview = () => {
  const { isDark } = useTheme();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding container-max">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
          Pricing
        </span>
        <h2 className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'} leading-tight mb-4`}>
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h2>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto mb-8`}>
          Start free. Scale as you grow. Cancel anytime.
        </p>

        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isYearly ? (isDark ? 'text-white' : 'text-gray-900') : 'text-slate-500'}`}>Monthly</span>
          <Toggle checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <span className={`text-sm font-medium ${isYearly ? (isDark ? 'text-white' : 'text-gray-900') : 'text-slate-500'}`}>
            Yearly <span className="badge-pill ml-2 text-xs">save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className={`${plan.featured ? 'gradient-border-card shadow-glow relative' : 'glass-card'} rounded-2xl p-7`}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge-pill text-xs whitespace-nowrap px-3 py-1">
                {plan.badge}
              </div>
            )}
            <div className="mb-8">
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{plan.name}</h3>
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm mb-6 h-10`}>{plan.tagline}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className={`text-5xl font-black ${plan.featured ? 'gradient-text' : (isDark ? 'text-white' : 'text-gray-900')}`}>
                  {typeof plan.price.monthly === 'number' 
                    ? `$${isYearly ? plan.price.yearly : plan.price.monthly}` 
                    : plan.price.monthly}
                </span>
                {typeof plan.price.monthly === 'number' && (
                  <span className={`${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2 font-medium`}>/mo</span>
                )}
              </div>
            </div>

            <button className={`w-full py-3 px-4 rounded-xl font-semibold mb-8 transition-all ${
              plan.ctaStyle === 'btn-gradient' 
                ? 'btn-gradient text-white shadow-lg' 
                : `border ${isDark ? 'border-white/[0.1] text-white hover:bg-white/[0.05]' : 'border-black/[0.1] text-gray-900 hover:bg-black/[0.05]'}`
            }`}>
              {plan.cta}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
