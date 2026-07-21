import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  label?: string
}

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-[3px]',
  xl: 'w-12 h-12 border-[3px]',
}

export function Spinner({ size = 'md', className, label = 'Loading...' }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        role="status"
        aria-label={label}
        className={cn(
          'rounded-full border-primary-600 border-t-transparent animate-spin',
          sizes[size],
          className,
        )}
      />
      {label && <span className="sr-only">{label}</span>}
    </div>
  )
}
