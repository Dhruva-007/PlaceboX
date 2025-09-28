"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

const links = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/owned", label: "Owned Items" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/guidelines", label: "Guidelines" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="size-6 rounded-sm bg-brand-gradient shadow-md" aria-hidden />
          <span className="font-semibold tracking-tight">BlockCraft Market</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname?.startsWith(l.href) && "text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/marketplace">
            <Button className="bg-brand-gradient text-black hover:opacity-90">Launch</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
