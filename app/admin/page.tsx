import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Admin Access • AlgoShowcase",
  description:
    "Secure administrator entry point for managing the AlgoShowcase platform.",
};

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div
          className="rounded-2xl p-8 space-y-6"
          style={{
            background: "linear-gradient(180deg,#ffffff 0%,#f1f2f7 100%)",
            boxShadow:
              "0 18px 45px rgba(15,31,46,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(15,31,46,0.05)",
          }}
        >
          <div className="space-y-2 text-center">
            <p className="text-[12px] font-semibold tracking-[0.4em] text-[#7a8799] uppercase">
              Admin
            </p>
            <h1 className="text-[28px] font-semibold text-[#0f1f2e]">
              Slotra Control Room
            </h1>
            <p className="text-[15px] text-[#4a5668]">
              Enter your credentials to access the administrator console.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2 text-left">
              <label className="text-[12px] font-medium text-[#4a5668]">
                Work Email
              </label>
              <Input
                type="email"
                placeholder="you@slotra.ph"
                className="bg-white rounded-lg"
                style={{
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  borderColor: "#d4d8de",
                }}
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[12px] font-medium text-[#4a5668]">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-white rounded-lg"
                style={{
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  borderColor: "#d4d8de",
                }}
              />
            </div>

            <Button type="submit" className="w-full h-12 text-[14px]">
              Sign in to Dashboard
            </Button>
          </form>

          <p className="text-[13px] text-center text-[#7a8799]">
            Having trouble signing in?{" "}
            <a
              href="mailto:hello@slotra.ph"
              className="text-[#2e3192] underline-offset-4 hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
