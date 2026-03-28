import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Admin Access • AlgoShowcase",
  description:
    "Secure administrator entry point for managing the AlgoShowcase platform.",
};

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-[#F9F9F9] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg">
        <div
          className="rounded-[32px] p-12 space-y-8 bg-white"
          style={{
            boxShadow: "0 24px 60px rgba(12,15,15,0.08)",
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/logo/logo-primary.png"
              alt="AlgoShowcase logo"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>

          <div className="space-y-2 text-center">
            <p className="text-label-sm tracking-[0.35em] text-[#5a6061] uppercase">
              Administrator Access
            </p>
            <h1 className="text-headline-md text-[#0c0f0f]">
              The Curator Console
            </h1>
            <p className="text-body-md text-[#5a6061] max-w-sm mx-auto">
              Reserved for AlgoShowcase staff. Authenticate to oversee
              submissions, curation, and gallery operations.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2 text-left">
              <label className="text-label-sm text-[#4a5668]">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="curator@algoshowcase.com"
                className="bg-white rounded-full"
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-label-sm text-[#4a5668]">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-white rounded-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-[14px]"
              style={{
                background: "linear-gradient(135deg,#7A2EEA 0%,#6100EB 100%)",
                color: "#FFFFFF",
                border: "1px solid rgba(97,0,235,0.35)",
              }}
            >
              Enter Console
            </Button>
          </form>

          <p className="text-[13px] text-center text-[#5a6061]">
            Need assistance?{" "}
            <a
              href="mailto:support@algoshowcase.com"
              className="text-[#6100EB] underline-offset-4 hover:underline"
            >
              Contact the curation team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
