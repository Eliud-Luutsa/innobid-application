'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavigationItem {
  href: string
  label: string
  isExternal?: boolean
}

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/pricing", label: "Pricing" },
]

interface MainNavigationProps {
  className?: string
  onItemClick?: () => void
  isMobile?: boolean
}

export function MainNavigation({ className, onItemClick, isMobile = false }: MainNavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        const isHomeActive = pathname === "/" && item.href === "/"
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors",
              isMobile 
                ? "text-muted-foreground hover:text-primary px-2 py-1 rounded"
                : "text-muted-foreground hover:text-primary",
              (isActive || isHomeActive) && "text-primary font-medium"
            )}
            onClick={onItemClick}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
} 