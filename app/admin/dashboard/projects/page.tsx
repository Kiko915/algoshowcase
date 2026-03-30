"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Tab = "Pending" | "Approved" | "Rejected";

export default function AdminProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Pending");

  const tabs: Tab[] = ["Pending", "Approved", "Rejected"];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-display-lg text-foreground font-light leading-tight">
          Curate Projects
        </h1>
        <p className="text-body-md text-muted-foreground max-w-lg">
          Filter and review submissions to the gallery. Only the highest quality technical work should receive your seal of approval.
        </p>
      </div>

      {/* Filter / Pill Button Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3 bg-muted p-1.5 rounded-full inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "rounded-full py-2 px-6 text-sm font-medium transition-all duration-300",
                activeTab === tab
                  ? "bg-accent text-white shadow-sm"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full max-w-[280px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input 
            placeholder="Search projects..." 
            className="rounded-full h-11 pl-10 pr-4 bg-card border-transparent focus-visible:ring-accent shadow-sm hover:shadow-md transition-shadow outline-none" 
          />
        </div>
      </div>

      {/* Content Area - Placeholder for filtered items */}
      <div className="min-h-[400px] flex items-center justify-center p-8 bg-card rounded-[2rem] shadow-sm">
        <div className="text-center space-y-4">
          <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-muted-foreground text-sm tracking-widest uppercase">Null</span>
          </div>
          <p className="text-headline-md font-light">No {activeTab} Records</p>
          <p className="text-body-md text-muted-foreground">
            There are currently no projects sitting in this queue.
          </p>
        </div>
      </div>
    </div>
  );
}
