"use client";

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { status: "approved", value: 14, color: "#10B981" }, // Emerald 500
  { status: "pending", value: 5, color: "#6100EB" },   // Electric Violet
  { status: "rejected", value: 2, color: "#EF4444" },  // Destructive Red
];

const chartConfig = {
  value: {
    label: "Projects",
  },
  approved: {
    label: "Approved",
    color: "#10B981", 
  },
  pending: {
    label: "Pending Review",
    color: "#6100EB",
  },
  rejected: {
    label: "Rejected",
    color: "#EF4444",
  },
} satisfies ChartConfig;

export function StatusDistributionChart() {
  return (
    <div className="bg-card rounded-4xl p-8 shadow-sm border border-border/20 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(12,15,15,0.02)] transition-shadow duration-500">
      <div className="mb-6">
        <h3 className="text-headline-md text-foreground font-light mb-1">Status Distribution</h3>
        <p className="text-body-md text-muted-foreground w-full">Current queue breakdown across the gallery.</p>
      </div>

      <div className="flex-1 min-h-[250px] w-full mt-4 flex items-center justify-center relative">
        <ChartContainer config={chartConfig} className="w-full h-full absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="status"
                innerRadius={65}
                outerRadius={95}
                strokeWidth={5}
                stroke="#FFFFFF"
                paddingAngle={2}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent />}
                className="mt-6 flex-wrap gap-4 text-label-sm uppercase tracking-widest text-muted-foreground"
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
