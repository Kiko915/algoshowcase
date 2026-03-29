"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes("@")) {
      setError("Please provide a valid curator email address.");
      return;
    }

    if (!password || password.length < 8) {
      setError("Security credentials must be at least 8 characters long.");
      return;
    }

    // Example of successful validation proceeding..
    console.log("Validation passed. Authenticating as curator...");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="h-4 w-4 mt-[2px] opacity-80" />
          <div className="flex flex-col">
            <AlertTitle>Authentication Failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </div>
        </Alert>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-label-sm text-muted-foreground ml-2 font-medium">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="curator@algoshowcase.com"
              className="rounded-full h-12 pl-11 pr-6 bg-muted border-transparent focus-visible:ring-accent focus-visible:bg-transparent focus-visible:ring-1 focus-visible:ring-offset-0 text-body-md transition-all placeholder:text-muted-foreground/60 outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-label-sm text-muted-foreground ml-2 font-medium">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-foreground transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-full h-12 pl-11 pr-12 bg-muted border-transparent focus-visible:ring-accent focus-visible:bg-transparent focus-visible:ring-1 focus-visible:ring-offset-0 text-body-md transition-all placeholder:text-muted-foreground/60 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full rounded-full h-12 bg-primary-gradient text-white hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 font-medium tracking-wide border-none shadow-none"
        >
          Authenticate
        </Button>
      </div>
    </form>
  );
}
