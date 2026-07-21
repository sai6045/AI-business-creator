import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-slate-800 text-slate-300 border-slate-700',
  primary: 'bg-primary-500/10 text-primary-300 border-primary-500/20',
  success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  danger: 'bg-red-500/10 text-red-300 border-red-500/20',
  info: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-slate-400',
  primary: 'bg-primary-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  danger: 'bg-red-400',
  info: 'bg-sky-400',
}

export function Badge({ className, variant = 'default', dot = false, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge border',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />}
      {children}
    </span>
  )
}
