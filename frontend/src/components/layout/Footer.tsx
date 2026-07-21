import { Link } from 'react-router-dom'
import { Zap, Twitter, Github, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

export function Footer() {
  const { isDark } = useTheme()

  const links = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter (X)', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'YouTube', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className={cn('relative pt-24 pb-12 overflow-hidden', isDark ? 'bg-[#07070f]' : 'bg-gray-50')}>
      <div className={cn('absolute top-0 left-0 w-full h-px divider-gradient', isDark ? 'opacity-20' : 'opacity-10')} />
      
      <div className="container-max section-padding mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-500/25">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={cn('text-xl font-bold tracking-tight', isDark ? 'text-white' : 'text-gray-900')}>
                <span className="gradient-text">AI</span> Business Creator
              </span>
            </Link>
            <p className={cn('mb-8 text-sm leading-relaxed max-w-sm', isDark ? 'text-slate-400' : 'text-gray-600')}>
              Turn one simple business idea into a complete startup including branding, business plans, financial forecasts, and more.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300',
                    isDark 
                      ? 'border-white/10 text-slate-400 hover:text-white hover:border-violet-500/30 hover:bg-white/5' 
                      : 'border-gray-200 text-gray-500 hover:text-violet-600 hover:border-violet-500/30 hover:bg-violet-50'
                  )}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={cn('font-semibold mb-6', isDark ? 'text-white' : 'text-gray-900')}>Company</h4>
            <ul className="space-y-4">
              {links.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={cn('text-sm transition-colors', isDark ? 'text-slate-400 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600')}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={cn('font-semibold mb-6', isDark ? 'text-white' : 'text-gray-900')}>Resources</h4>
            <ul className="space-y-4">
              {links.resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={cn('text-sm transition-colors', isDark ? 'text-slate-400 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600')}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={cn('font-semibold mb-6', isDark ? 'text-white' : 'text-gray-900')}>Community</h4>
            <ul className="space-y-4">
              {links.community.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={cn('text-sm transition-colors', isDark ? 'text-slate-400 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600')}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={cn('font-semibold mb-6', isDark ? 'text-white' : 'text-gray-900')}>Legal</h4>
            <ul className="space-y-4">
              {links.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={cn('text-sm transition-colors', isDark ? 'text-slate-400 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600')}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cn('py-8 border-y flex flex-col md:flex-row items-center justify-between gap-6 mb-8', isDark ? 'border-white/[0.07]' : 'border-gray-200')}>
          <div>
            <h4 className={cn('font-semibold text-lg mb-2', isDark ? 'text-white' : 'text-gray-900')}>Stay updated</h4>
            <p className={cn('text-sm', isDark ? 'text-slate-400' : 'text-gray-600')}>Get the latest news, updates and tips directly to your inbox.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={cn(
                'px-4 py-3 rounded-xl w-full md:w-72 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all',
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder-slate-500' 
                  : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'
              )}
            />
            <button type="submit" className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg flex items-center gap-2 hover:shadow-violet-500/40 transition-shadow">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={cn('text-sm', isDark ? 'text-slate-500' : 'text-gray-500')}>
            © {new Date().getFullYear()} AI Business Creator. All rights reserved.
          </p>
          <div className={cn('flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border', isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-gray-200 text-gray-700')}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
