"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderKanban, Users, UserCircle, LogOut, ChevronLeft } from "lucide-react";

export const navItems = [
  { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
  { name: "Members", href: "/admin/dashboard/members", icon: Users },
  { name: "Profile", href: "/admin/dashboard/profile", icon: UserCircle },
];

export function AdminSidebar({ 
  isMobileOpen, 
  closeMobile 
}: { 
  isMobileOpen: boolean; 
  closeMobile: () => void; 
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        // Core Layout & Styling
        "shrink-0 h-dvh flex flex-col py-8 bg-card shadow-sm z-50 transition-all duration-300 ease-in-out",
        // Desktop positioning
        "lg:sticky lg:top-0 lg:translate-x-0",
        // Desktop Collapse Width
        isCollapsed ? "lg:w-[92px]" : "lg:w-[280px]",
        // Mobile off-canvas positioning
        "fixed top-0 left-0 w-[280px]",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Desktop Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:flex absolute -right-4 top-10 h-8 w-8 bg-card shadow-md rounded-full items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 transition-all outline-none"
      >
        <ChevronLeft className={cn("h-4 w-4 transition-transform duration-300", isCollapsed && "rotate-180")} />
      </button>

      {/* Brand */}
      <div className={cn("mb-14 flex items-center h-8", isCollapsed ? "justify-center px-0" : "px-6")}>
        <Link href="/admin/dashboard" className="flex items-center gap-2 outline-none" onClick={closeMobile}>
          <Image
            src="/logo/logo-primary.png"
            alt="AlgoShowcase"
            width={120}
            height={32}
            className={cn(
               "w-auto opacity-90 transition-all duration-300 hover:opacity-100",
               isCollapsed ? "h-[1.1rem]" : "h-7"
            )}
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = item.href === "/admin/dashboard" 
            ? pathname === item.href 
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobile}
              title={isCollapsed ? item.name : undefined}
              className={cn(
                "flex items-center gap-4 rounded-full transition-all duration-300 font-medium group overflow-hidden",
                isCollapsed ? "justify-center p-3" : "py-3 px-5 w-full",
                isActive
                  ? "bg-accent text-white shadow-sm"
                  : "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-[1.02]"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
              {!isCollapsed && (
                <span className="text-[15px] whitespace-nowrap opacity-100 transition-opacity">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="mt-8 px-4">
        <Link
          href="/admin"
          onClick={closeMobile}
          title={isCollapsed ? "Sign Out" : undefined}
          className={cn(
            "flex items-center gap-4 rounded-full transition-all duration-300 font-medium group overflow-hidden",
            "bg-transparent text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:scale-[1.02]",
            isCollapsed ? "justify-center p-3" : "py-3 px-5 w-full"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" strokeWidth={2} />
          {!isCollapsed && (
            <span className="text-[15px] whitespace-nowrap">Sign Out</span>
          )}
        </Link>
      </div>
    </aside>
  );
}
