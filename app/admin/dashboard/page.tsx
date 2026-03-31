import { FileClock, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { SubmissionVelocityChart } from "@/components/charts/submission-velocity-chart";
import { StatusDistributionChart } from "@/components/charts/status-distribution-chart";

export default function AdminDashboardOverview() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header section with massive white space */}
      <div className="space-y-2">
        <h1 className="text-display-lg text-foreground font-light leading-tight">
          Overview
        </h1>
        <p className="text-body-md text-muted-foreground max-w-lg">
          Welcome to the curation console. The gallery currently holds 14 active pieces, with 5 outstanding submissions requiring your review.
        </p>
      </div>

      {/* KPI Cards using Subtle Tints and Ambient Depth */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Pending Submissions", count: 5, accent: "from-accent/5 to-card", icon: FileClock, iconColor: "text-accent", iconBg: "bg-accent/10" },
          { label: "Total Approved", count: 14, accent: "from-emerald-500/5 to-card", icon: CheckCircle2, iconColor: "text-emerald-600", iconBg: "bg-emerald-500/10" },
          { label: "Rejected Concept", count: 2, accent: "from-destructive/5 to-card", icon: XCircle, iconColor: "text-destructive", iconBg: "bg-destructive/10" },
        ].map((stat, i) => (
          <div 
            key={i}
            className={cn(
              "bg-linear-to-br rounded-4xl p-8 shadow-sm hover:shadow-[0_10px_40px_rgba(12,15,15,0.04)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between min-h-[180px] group relative overflow-hidden",
              "border border-border/20", // The Ghost Border Fallback
              stat.accent
            )}
          >
            <div className="flex justify-between items-start relative z-10">
              <div className={cn("p-3 rounded-2xl transition-colors duration-500 group-hover:bg-transparent", stat.iconBg)}>
                <stat.icon className={cn("h-6 w-6 stroke-[1.5]", stat.iconColor)} />
              </div>
              <p className="text-[3.5rem] font-light tracking-tight text-foreground leading-none">
                {stat.count}
              </p>
            </div>
            
            {/* Subtle glow orb in background */}
            <div className={cn("absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-opacity opacity-20 group-hover:opacity-40", stat.iconColor.replace('text-', 'bg-'))} />
            
            <p className="text-label-sm text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors relative z-10 mt-8">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 min-h-[400px]">
          <SubmissionVelocityChart />
        </div>
        <div className="lg:col-span-1 min-h-[400px]">
          <StatusDistributionChart />
        </div>
      </div>

      {/* Recent Activity Example */}
      <div className="pt-4">
        <h2 className="text-headline-md text-foreground font-medium mb-6">Recent Activity</h2>
        <div className="bg-linear-to-b from-card to-card/50 rounded-4xl p-8 shadow-sm border border-border/20">
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-6 group">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-accent/15 transition-all duration-300">
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">Log</span>
                </div>
                <div className="flex-1 border-b border-border/40 pb-6 group-last:border-0 group-last:pb-0">
                  <p className="text-body-md text-foreground group-hover:text-accent transition-colors duration-300">
                    <span className="font-semibold">Curator 01</span> approved the project "Quantum Entanglement Visualizer".
                  </p>
                  <p className="text-label-sm text-muted-foreground mt-1 tracking-wider uppercase">
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
