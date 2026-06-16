import { LucideIcon } from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon?: LucideIcon
  badge?: string | number
  children?: NavItem[]
}

export interface SiteConfig {
  name: string
  description: string
  url: string
}
