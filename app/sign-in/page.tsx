"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-[calc(100svh-1px)] grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form */}
        <div className="flex items-center justify-center px-6 py-12 md:py-16">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center">
              <Image
                src="/logo/logo-primary.png"
                alt="AlgoShowcase"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>

            <div className="space-y-2 mb-8">
              <h1 className="text-headline-md text-foreground">
                Log in to your Account
              </h1>
              <p className="text-body-md text-muted-foreground">
                Welcome back. Select your method to sign in.
              </p>
            </div>

            <div className="space-y-6">
              <Button
                variant="outline"
                className="w-full h-10 rounded-full gap-2"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="#4285F4"
                    d="M23.49 12.27c0-.82-.07-1.61-.2-2.36H12v4.47h6.48a5.54 5.54 0 0 1-2.4 3.64v3.02h3.89c2.27-2.1 3.52-5.19 3.52-8.77z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.89-3.02c-1.08.73-2.46 1.16-4.06 1.16-3.13 0-5.78-2.11-6.72-4.95H1.28v3.11A12 12 0 0 0 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27A7.2 7.2 0 0 1 4.91 12c0-.79.14-1.56.37-2.27V6.62H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.38l4-3.11z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.76c1.76 0 3.34.6 4.58 1.78l3.44-3.44C17.95 1.27 15.24 0 12 0A12 12 0 0 0 1.28 6.62l4 3.11C6.22 6.87 8.87 4.76 12 4.76z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-label-sm text-muted-foreground">
                  or continue with email
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-label-sm text-foreground">Email</label>
                  <Input type="email" placeholder="you@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-label-sm text-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[13px] text-muted-foreground">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-border"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="hover:text-foreground transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button variant="accent" className="w-full h-10 rounded-full">
                  Log in
                </Button>
              </form>

              <p className="text-[13px] text-muted-foreground text-center pt-2">
                Don’t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-foreground font-semibold hover:text-muted-foreground transition-colors"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="relative hidden md:flex items-center justify-center bg-[linear-gradient(135deg,#481A93_0%,#6A1FD0_50%,#3A0D7A_100%)] p-10">
          <Image
            src="/auth_col_img_no_bg.png"
            alt="Project submissions dashboard illustration"
            width={900}
            height={900}
            className="w-[85%] max-w-xl h-auto object-contain"
            priority
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
