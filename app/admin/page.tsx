import type { Metadata } from "next";
import Image from "next/image";
import { AdminLoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Admin Access • AlgoShowcase",
  description:
    "Secure administrator entry point for managing the AlgoShowcase platform.",
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Optional ambient background texture - keeping it very subtle for enterprise look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,244,244,1),_transparent_70%)]" />

      <div className="w-full max-w-[440px] relative z-10">
        {/* Component Layer: Elevated Paper */}
        <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-500 ease-out flex flex-col">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <div className="h-10 flex items-center justify-center mb-1">
              <Image
                src="/logo/logo-primary.png"
                alt="AlgoShowcase"
                width={140}
                height={40}
                className="h-8 w-auto opacity-90"
                priority
              />
            </div>
            <div className="space-y-2">
              <p className="text-label-sm text-muted-foreground uppercase tracking-widest">
                Admin Console
              </p>
              <h1 className="text-headline-md text-foreground font-light leading-tight">
                Curator Access
              </h1>
            </div>
          </div>

          <AdminLoginForm />

          {/* Footer */}
          <div className="mt-8 text-center px-2">
            <p className="text-label-sm text-muted-foreground normal-case tracking-normal">
              Need assistance?{" "}
              <a
                href="mailto:support@algoshowcase.com"
                className="text-accent hover:underline underline-offset-4 font-medium transition-colors"
              >
                Contact staff
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
