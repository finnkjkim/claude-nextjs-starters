"use client"

import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn("text-foreground/70 transition-colors hover:text-foreground", className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>{SITE_CONFIG.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-3 px-2">
          {NAV_LINKS.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              onOpenChange={setOpen}
              className="flex items-center gap-2 text-base font-medium"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
            </MobileLink>
          ))}
          <div className="my-2 border-t" />
          <MobileLink
            href="/dashboard"
            onOpenChange={setOpen}
            className="flex items-center gap-2 text-base font-medium"
          >
            대시보드
          </MobileLink>
          <MobileLink
            href="/login"
            onOpenChange={setOpen}
            className="flex items-center gap-2 text-base font-medium"
          >
            로그인
          </MobileLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
