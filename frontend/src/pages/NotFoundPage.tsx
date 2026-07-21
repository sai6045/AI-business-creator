import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-6 text-white">Page not found</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
