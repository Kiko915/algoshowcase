import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SeveritySelect } from "@/components/severity-select";

export const metadata: Metadata = {
  title: "Report a Bug • AlgoShowcase",
  description:
    "Submit platform issues directly to the AlgoShowcase reliability desk.",
};

export default function ReportBugPage() {
  return (
    <>
      <section className="bg-background text-foreground">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/logo-primary.png"
                  alt="AlgoShowcase"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  priority
                />
                <p className="text-label-sm text-muted-foreground tracking-[0.3em]">
                  Reliability Desk
                </p>
              </div>
              <div className="space-y-3">
                <h1 className="text-display-lg leading-tight">
                  Report a Platform Bug
                </h1>
                <p className="text-body-md max-w-xl">
                  Flag disruptions or unexpected behavior across the
                  AlgoShowcase platform. Submissions are routed to our
                  reliability engineers within one business day.
                </p>
              </div>

              <div className="space-y-4">
                <div
                  className="rounded-[24px] p-5"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-label-sm text-muted-foreground">
                      01
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-headline-md">Capture the impact</h3>
                      <p className="text-body-md text-muted-foreground">
                        Include repro steps, affected workspace, and any obvious
                        mitigations or workarounds.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-[24px] p-5"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-label-sm text-muted-foreground">
                      02
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-headline-md">Attach evidence</h3>
                      <p className="text-body-md text-muted-foreground">
                        Screenshots, console logs, or HAR files drastically
                        reduce time-to-resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="space-y-5 rounded-[24px] p-6"
              style={{
                backgroundColor: "var(--color-surface-container-lowest)",
              }}
            >
              <div className="space-y-2">
                <label className="text-label-sm text-muted-foreground">
                  Contact name
                </label>
                <Input placeholder="Your full name" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-label-sm text-muted-foreground">
                  Work email
                </label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white"
                />
              </div>

              <SeveritySelect />

              <div className="space-y-2">
                <label className="text-label-sm text-muted-foreground">
                  Affected module
                </label>
                <Input
                  placeholder="e.g., Gallery submissions"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-label-sm text-muted-foreground">
                  Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe the bug, steps to reproduce, and expected outcome."
                  className="w-full rounded-3xl border border-border bg-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <Button
                variant="accent"
                className="w-full h-11 rounded-full text-sm tracking-wide"
              >
                Submit to Reliability Desk
              </Button>

              <p className="text-body-md text-muted-foreground">
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
      </section>
      <Footer />
    </>
  );
}
