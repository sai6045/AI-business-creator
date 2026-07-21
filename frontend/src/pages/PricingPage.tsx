import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying out the platform and generating a basic business plan.',
    features: ['1 Business Plan', 'Basic Brand Identity', 'Standard Support'],
    buttonText: 'Get Started Free',
    variant: 'secondary' as const,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious entrepreneurs ready to launch and scale their startup.',
    features: ['Unlimited Business Plans', 'Full Brand Kit Generation', 'Financial Projections', 'Competitor Analysis', 'Priority Support'],
    buttonText: 'Upgrade to Pro',
    variant: 'primary' as const,
    glow: true,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 container-max px-6 py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-slate-400 text-lg">Choose the perfect plan for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.glow ? 'border-primary-500/50 glow-primary' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                  {tier.price}
                  {tier.period && <span className="ml-1 text-xl font-medium text-slate-400">{tier.period}</span>}
                </div>
                <p className="mt-4 text-sm text-slate-400">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-400 shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.variant} size="lg" fullWidth>
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
