"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans relative">
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-inverse-surface/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Handles both desktop and mobile states */}
      <AdminSidebar isMobileOpen={isMobileOpen} closeMobile={() => setIsMobileOpen(false)} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between h-16 px-6 bg-card border-b border-border/40 sticky top-0 z-30">
          <span className="text-label-sm uppercase tracking-widest text-muted-foreground font-medium">Console</span>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(true)} className="rounded-full">
            <Menu className="h-5 w-5 text-foreground" />
          </Button>
        </header>

        <div className="flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-6xl w-full mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
