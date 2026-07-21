import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X, Sun, Moon, ChevronDown, FileText, Palette, TrendingUp, Megaphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setSolutionsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const solutions = [
    { icon: FileText, title: 'Business Planning', description: 'Create comprehensive plans instantly' },
    { icon: Palette, title: 'Brand & Identity', description: 'Logos, colors, and brand voice' },
    { icon: TrendingUp, title: 'Financial Tools', description: 'Forecasts and revenue models' },
    { icon: Megaphone, title: 'Growth & Marketing', description: 'Go-to-market strategies' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? isDark
            ? 'bg-[#07070f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg py-3'
            : 'bg-white/90 backdrop-blur-xl border-b border-black/[0.07] shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-max section-padding mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-500/25">
            <Zap className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-lg bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className={cn('text-xl font-bold tracking-tight', isDark ? 'text-white' : 'text-gray-900')}>
            <span className="gradient-text">AI</span> Business Creator
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-violet-400',
                isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600'
              )}
            >
              Solutions
              <ChevronDown className={cn('w-4 h-4 transition-transform', solutionsOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] rounded-2xl glass-card p-4 grid grid-cols-2 gap-2 shadow-2xl z-50 border',
                    isDark ? 'bg-[#0e0e1a]/95 border-white/[0.07]' : 'bg-white/95 border-black/[0.07]'
                  )}
                >
                  {solutions.map((item, idx) => (
                    <Link
                      key={idx}
                      to="#"
                      className={cn(
                        'flex items-start gap-4 p-4 rounded-xl transition-colors',
                        isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-gray-50'
                      )}
                    >
                      <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/10 text-violet-500">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={cn('text-sm font-semibold mb-1', isDark ? 'text-white' : 'text-gray-900')}>
                          {item.title}
                        </h4>
                        <p className={cn('text-xs leading-relaxed', isDark ? 'text-slate-400' : 'text-gray-500')}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link to="/features" className={cn('text-sm font-medium transition-colors hover:text-violet-400', isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600')}>Features</Link>
          <Link to="/how-it-works" className={cn('text-sm font-medium transition-colors hover:text-violet-400', isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600')}>How It Works</Link>
          <Link to="/pricing" className={cn('text-sm font-medium transition-colors hover:text-violet-400', isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600')}>Pricing</Link>
          <Link to="/about" className={cn('text-sm font-medium transition-colors hover:text-violet-400', isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600')}>About</Link>
          <Link to="/contact" className={cn('text-sm font-medium transition-colors hover:text-violet-400', isDark ? 'text-slate-300' : 'text-gray-600 hover:text-violet-600')}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'p-2 rounded-full transition-colors',
              isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/login"
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
              isDark ? 'text-white hover:bg-white/5' : 'text-gray-900 hover:bg-gray-100'
            )}
          >
            Login
          </Link>
          <Link to="/register" className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className={cn('lg:hidden p-2 z-50', isDark ? 'text-white' : 'text-gray-900')}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={cn(
                'fixed top-0 right-0 h-full w-72 z-50 p-6 flex flex-col overflow-y-auto border-l',
                isDark ? 'bg-[#0e0e1a] border-white/[0.07]' : 'bg-white border-black/[0.07]'
              )}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className={cn('p-2 rounded-full', isDark ? 'text-slate-400 hover:bg-white/10' : 'text-gray-500 hover:bg-gray-100')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className={cn('text-sm font-medium', isDark ? 'text-slate-400' : 'text-gray-500')}>Theme</span>
                  <button onClick={toggleTheme} className="p-2 rounded-full bg-violet-500/10 text-violet-500">
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className={cn('text-sm font-semibold uppercase tracking-wider', isDark ? 'text-slate-500' : 'text-gray-400')}>Solutions</h3>
                  {solutions.map((item, idx) => (
                    <Link key={idx} to="#" className={cn('flex items-center gap-3 text-sm font-medium', isDark ? 'text-slate-300' : 'text-gray-700')}>
                      <item.icon className="w-4 h-4 text-violet-500" />
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className={cn('h-px w-full', isDark ? 'bg-white/[0.07]' : 'bg-black/[0.07]')} />

                <div className="flex flex-col gap-4">
                  <Link to="/features" className={cn('text-base font-medium', isDark ? 'text-white' : 'text-gray-900')}>Features</Link>
                  <Link to="/how-it-works" className={cn('text-base font-medium', isDark ? 'text-white' : 'text-gray-900')}>How It Works</Link>
                  <Link to="/pricing" className={cn('text-base font-medium', isDark ? 'text-white' : 'text-gray-900')}>Pricing</Link>
                  <Link to="/about" className={cn('text-base font-medium', isDark ? 'text-white' : 'text-gray-900')}>About</Link>
                  <Link to="/contact" className={cn('text-base font-medium', isDark ? 'text-white' : 'text-gray-900')}>Contact</Link>
                </div>

                <div className="mt-auto pt-8 flex flex-col gap-3">
                  <Link
                    to="/login"
                    className={cn(
                      'w-full py-3 text-center text-sm font-medium rounded-xl transition-colors',
                      isDark ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    )}
                  >
                    Login
                  </Link>
                  <Link to="/register" className="btn-gradient w-full py-3 text-center rounded-xl text-sm font-semibold text-white shadow-lg">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
