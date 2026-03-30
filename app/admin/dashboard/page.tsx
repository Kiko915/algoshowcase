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

      {/* KPI Cards using Tonal Shifts and Ambient Depth */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Pending Submissions", count: 5 },
          { label: "Total Approved", count: 14 },
          { label: "Rejected Concept", count: 2 },
        ].map((stat, i) => (
          <div 
            key={i}
            className="bg-card rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between min-h-[160px] group"
          >
            <p className="text-label-sm text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
              {stat.label}
            </p>
            <p className="text-[3.5rem] font-light tracking-tight text-foreground leading-none">
              {stat.count}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity Example */}
      <div className="pt-4">
        <h2 className="text-headline-md text-foreground font-medium mb-6">Recent Activity</h2>
        <div className="bg-card rounded-[2rem] p-8 shadow-sm">
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-6 group">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-xs text-muted-foreground">Log</span>
                </div>
                <div className="flex-1 border-b border-border/40 pb-6 group-last:border-0 group-last:pb-0">
                  <p className="text-body-md text-foreground">
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
