import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 border border-primary-500/20',
  secondary:
    'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm',
  ghost:
    'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent',
  outline:
    'bg-transparent hover:bg-primary-600/10 text-primary-400 border border-primary-500/40 hover:border-primary-400',
  danger:
    'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 border border-red-500/20',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-xl',
  lg: 'px-7 py-3.5 text-base font-semibold rounded-xl',
  xl: 'px-9 py-4.5 text-lg font-semibold rounded-2xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, fullWidth = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
