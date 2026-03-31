"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", submissions: 12 },
  { month: "Feb", submissions: 18 },
  { month: "Mar", submissions: 15 },
  { month: "Apr", submissions: 27 },
  { month: "May", submissions: 22 },
  { month: "Jun", submissions: 45 },
];

const chartConfig = {
  submissions: {
    label: "Submissions",
    color: "#6100EB", // The Digital Curator Electric Violet
  },
} satisfies ChartConfig;

export function SubmissionVelocityChart() {
  return (
    <div className="bg-card rounded-4xl p-8 shadow-sm border border-border/20 flex flex-col justify-between h-full hover:shadow-[0_10px_40px_rgba(12,15,15,0.02)] transition-shadow duration-500">
      <div className="mb-6">
        <h3 className="text-headline-md text-foreground font-light mb-1">Submission Velocity</h3>
        <p className="text-body-md text-muted-foreground">Tracing gallery entries over the last 6 months</p>
      </div>

      <div className="flex-1 w-full min-h-[250px] -ml-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillSubmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-submissions)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="var(--color-submissions)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#E2E2E2" strokeDasharray="3 3" opacity={0.4} />
              <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={12} 
                className="text-label-sm font-medium tracking-wide uppercase"
                stroke="#888888"
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickMargin={12}
                className="text-label-sm font-medium tracking-wide"
                stroke="#888888"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="submissions"
                stroke="var(--color-submissions)"
                strokeWidth={2}
                fill="url(#fillSubmissions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
