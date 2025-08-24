export interface PersonalInfo {
  name: string
  dateOfBirth: string
  address: string
  zipCode: string
  email: string
  phone: string
}

export interface Education {
  id: string
  date: string
  degree: string
  institution: string
  cgpa: string
  description: string
}

export interface Experience {
  id: string
  date: string
  position: string
  company: string
  description: string
  awards?: string
}

export interface Skill {
  name: string
  percentage: number
  color: 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6'
}

export interface CircularSkill {
  name: string
  value: number
  lastWeek: number
  lastMonth: number
}

export interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  link?: string
  description?: string
}

export interface CounterItem {
  number: number
  label: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  website: string
}

export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'github' | 'linkedin' | 'dribbble' | '500px'
  url: string
  icon: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface RotatingText {
  texts: string[]
  period: number
}

// Animation types
export type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight'

// Styled component prop types
export interface StyledProps {
  $variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  $size?: 'sm' | 'md' | 'lg'
  $fullWidth?: boolean
  $centered?: boolean
  $animate?: boolean
  $delay?: number
}

// Progress bar types
export interface ProgressBarProps {
  value: number
  color?: string
  showPercentage?: boolean
  animated?: boolean
  label?: string
}

// Theme-aware component props
export interface ThemeProps {
  theme: any
}
