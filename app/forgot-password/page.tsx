import Image from "next/image";
import Link from "next/link";
import { AuthParticles } from "@/components/auth-particles";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
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
                Reset your password
              </h1>
              <p className="text-body-md text-muted-foreground">
                Enter your email and we’ll send you a secure reset link.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-label-sm text-foreground">Email</label>
                <Input type="email" placeholder="you@company.com" />
              </div>

              <Button variant="accent" className="w-full h-10 rounded-full">
                Send reset link
              </Button>
            </form>

            <p className="text-[13px] text-muted-foreground text-center pt-6">
              Remembered your password?{" "}
              <Link
                href="/sign-in"
                className="text-foreground font-semibold hover:text-muted-foreground transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-[#3b137a] via-[#481A93] to-[#5f23b5]">
          <AuthParticles />
          <Image
            src="/auth_col_img_no_bg.png"
            alt="Authentication illustration"
            width={900}
            height={900}
            className="relative z-10 w-[80%] max-w-[640px] h-auto object-contain"
            priority
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
