import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Plus } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 container-max px-6 py-24">
        <div className="flex items-center justify-between mb-8 mt-8">
          <h1 className="text-3xl font-bold text-white">Your Businesses</h1>
          <Button variant="primary" className="gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-dashed border-surface-500 bg-transparent flex flex-col items-center justify-center p-12 text-center hover:bg-surface-800/50 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-700 flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Create New Business</h3>
            <p className="text-sm text-slate-400">Generate a complete business plan using AI</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
