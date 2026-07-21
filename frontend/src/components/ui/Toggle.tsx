import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, size = 'md', checked, onChange, ...props }, ref) => {
    const sizes = {
      sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
      md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
      lg: { track: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' },
    }

    return (
      <label className={cn('flex items-center gap-3 cursor-pointer select-none', className)}>
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={onChange}
            {...props}
          />
          <div
            className={cn(
              sizes[size].track,
              'rounded-full transition-colors duration-200',
              checked ? 'bg-primary-600' : 'bg-surface-500',
            )}
          />
          <div
            className={cn(
              sizes[size].thumb,
              'absolute top-0.5 left-0.5 rounded-full bg-white shadow transition-transform duration-200',
              checked && sizes[size].translate,
            )}
          />
        </div>
        {label && <span className="text-sm text-slate-300">{label}</span>}
      </label>
    )
  },
)

Toggle.displayName = 'Toggle'
