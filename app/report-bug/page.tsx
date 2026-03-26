import type { Metadata } from "next";
import { Footer } from "@/components/footer";

import { Navbar } from "@/components/navbar";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Report a Bug • AlgoShowcase",
  description:
    "Submit platform issues directly to the AlgoShowcase reliability desk.",
};

export default function ReportBugPage() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(118,67,210,0.35),_transparent_55%),_linear-gradient(135deg,#0b031b,#140937,#05010f)] text-white">
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_40%,transparent_60%,rgba(255,255,255,0.08)_100%)]" />
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto bg-background/90 border border-white/10 shadow-[0_20px_60px_rgba(8,0,34,0.45)] rounded-3xl">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] p-10 md:p-12">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-white/60 mb-4">
                  Platform Reliability
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Report a Platform Bug
                </h1>
                <p className="text-white/70 leading-relaxed">
                  Flag disruptions or unexpected behavior across the
                  AlgoShowcase platform. Submissions are routed to our
                  reliability engineers for triage within one business day.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                      01
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        Capture the impact
                      </h3>
                      <p className="text-white/70 text-sm">
                        Include repro steps, affected workspace, and obvious
                        mitigations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                      02
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-white">
                        Attach evidence
                      </h3>
                      <p className="text-white/70 text-sm">
                        Screenshots, console logs, or HAR files drastically
                        reduce time-to-resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-muted/40 rounded-2xl p-6 backdrop-blur">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Contact name
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="bg-background/80"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Work email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="bg-background/80"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Severity
                  </label>
                  <select className="w-full h-10 rounded-lg border border-white/10 bg-background/80 text-sm px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white">
                    <option className="bg-background text-foreground">
                      P1 – Critical outage
                    </option>
                    <option className="bg-background text-foreground">
                      P2 – Major workflow blocked
                    </option>
                    <option className="bg-background text-foreground">
                      P3 – Degraded experience
                    </option>
                    <option className="bg-background text-foreground">
                      P4 – Cosmetic issue
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Affected module
                  </label>
                  <Input
                    placeholder="e.g., Gallery submissions"
                    className="bg-background/80"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe the bug, steps to reproduce, and expected outcome."
                    className="w-full rounded-lg border border-white/10 bg-background/80 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white resize-none"
                  />
                </div>

                <Button
                  variant="accent"
                  className="w-full h-11 rounded-full text-base"
                >
                  Submit to Reliability Desk
                </Button>

                <p className="text-xs text-white/60 leading-relaxed">
                  We encrypt all submissions at rest. For urgent incidents,
                  contact{" "}
                  <a href="mailto:sre@algoshowcase.com" className="underline">
                    sre@algoshowcase.com
                  </a>{" "}
                  or page the on-call alias in Slack.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
