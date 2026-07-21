export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

export interface PricingTier {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}
