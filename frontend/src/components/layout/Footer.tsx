import { Link } from 'react-router-dom'
import { Zap, Twitter, Github, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="border-t border-surface-600 bg-surface-900">
      {/* Newsletter Section */}
      <div className="border-b border-surface-600">
        <div className="container-max px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">Stay in the loop</h3>
              <p className="text-sm text-slate-400">
                Get the latest updates on new features, AI models, and startup resources.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="min-w-[260px]"
                aria-label="Email for newsletter"
              />
              <Button variant="primary" size="md" className="shrink-0">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
              </div>
              <span className="text-sm font-bold text-white">AI Business Creator</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The AI-powered platform that transforms your startup idea into a complete business plan in minutes.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-surface-700 border border-surface-500 flex items-center justify-center text-slate-400 hover:text-white hover:bg-surface-600 hover:border-surface-400 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AI Business Creator. All rights reserved.
          </p>
          <Badge variant="success" dot>
            All systems operational
          </Badge>
        </div>
      </div>
    </footer>
  )
}
