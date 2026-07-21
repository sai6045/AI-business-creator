import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        surface: {
          950: '#07070f',
          900: '#0e0e1a',
          800: '#131328',
          700: '#1c1c38',
          600: '#242448',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.22) 0%, transparent 70%)',
        'mesh-violet':
          'radial-gradient(at 30% 20%, rgba(124,58,237,0.14) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(59,130,246,0.09) 0px, transparent 50%), radial-gradient(at 10% 80%, rgba(167,139,250,0.07) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-sm':   '0 0 20px rgba(124,58,237,0.18)',
        'glow':      '0 0 40px rgba(124,58,237,0.24)',
        'glow-lg':   '0 0 60px rgba(124,58,237,0.30)',
        'glow-blue': '0 0 40px rgba(59,130,246,0.20)',
        'card':      '0 4px 24px rgba(0,0,0,0.40)',
        'card-hover':'0 12px 48px rgba(0,0,0,0.50), 0 0 40px rgba(124,58,237,0.14)',
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-out',
        'slide-up':     'slideUp 0.6s ease-out',
        'float':        'float 6s ease-in-out infinite',
        'float-b':      'float 7s ease-in-out infinite 1.5s',
        'float-c':      'float 8s ease-in-out infinite 3s',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'spin-slow':    'spin 12s linear infinite',
        'gradient-x':   'gradientX 6s ease infinite',
        'scale-in':     'scaleIn 0.3s ease-out',
        'ping-slow':    'ping 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:  { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':     { transform: 'translateY(-12px) rotate(0.6deg)' },
          '66%':     { transform: 'translateY(-5px) rotate(-0.4deg)' },
        },
        shimmer:   { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        gradientX: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        scaleIn:   { '0%': { opacity: '0', transform: 'scale(0.92)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
}

export default config
