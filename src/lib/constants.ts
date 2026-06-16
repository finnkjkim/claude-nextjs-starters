import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FileText,
  Home,
  Info,
} from "lucide-react"
import { SiteConfig, NavItem } from "@/types"

export const SITE_CONFIG: SiteConfig = {
  name: "Next Starter",
  description: "Next.js + TypeScript + TailwindCSS + shadcn/ui 기반 모던 웹 스타터킷",
  url: "https://example.com",
}

export const NAV_LINKS: NavItem[] = [
  { label: "홈", href: "/", icon: Home },
  { label: "소개", href: "/about", icon: Info },
]

export const SIDEBAR_LINKS: NavItem[] = [
  { label: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { label: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "사용자", href: "/dashboard/users", icon: Users },
  { label: "문서", href: "/dashboard/docs", icon: FileText },
  { label: "설정", href: "/settings", icon: Settings },
]
