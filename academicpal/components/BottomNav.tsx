"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, BookOpen, User, Wrench, MessageCircle } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", icon: Home, label: "Home" },
    {
      href: "https://academicpal.vercel.app/notes.html",
      icon: BookOpen,
      label: "Notes",
      external: true,
    },
    { href: "/chat", icon: MessageCircle, label: "Messages" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/login", icon: Wrench, label: "Tools" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-black border-t border-white/10"
    >
      <ul className="grid grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = !item.external
            ? pathname === item.href || pathname.startsWith(item.href + "/")
            : false;

          const linkClass = cn(
            "relative flex flex-col items-center justify-center min-h-[56px] py-2.5 select-none",
            "text-neutral-400 hover:text-neutral-200 transition-colors duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9BF0]/50 focus-visible:ring-offset-0",
            isActive && "text-[#1D9BF0]"
          );

          const iconClass = cn(
            "transition-transform duration-150",
            isActive ? "scale-110" : "scale-100"
          );

          const content = (
            <>
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#1D9BF0] transition-opacity duration-150",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
              <Icon size={26} className={iconClass} />
              <span className="sr-only">{item.label}</span>
            </>
          );

          if (item.external) {
            return (
              <li key={item.href} className="flex">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={cn(linkClass, "w-full")}
                >
                  {content}
                </a>
              </li>
            );
          }

          return (
            <li key={item.href} className="flex">
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(linkClass, "w-full")}
              >
                {content}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}