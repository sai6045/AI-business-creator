import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 container-max px-6 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">AI Business Creator</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            We are on a mission to democratize entrepreneurship. Our platform harnesses the power of advanced AI to help anyone turn their ideas into comprehensive, actionable business plans in minutes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
