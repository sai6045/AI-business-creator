import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 container-max px-6 py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-400">Have a question or need support? We're here to help.</p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Email" type="email" placeholder="jane@example.com" />
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  className="w-full rounded-xl border bg-surface-700 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 border-surface-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all min-h-[120px]"
                  placeholder="How can we help you?"
                />
              </div>
              <Button variant="primary" size="lg" fullWidth>Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
