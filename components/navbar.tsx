import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel ghost-border-bottom transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex h-16 items-center justify-between gap-4 lg:gap-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/logo/logo-primary.png"
              alt="AlgoShowcase Logo"
              width={32}
              height={32}
              className="object-contain h-8 w-auto transition-transform duration-500 ease-out group-hover:scale-105"
              priority
            />
          </Link>

          {/* Middle: Dribbble-inspired Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl ml-6">
            <div className="flex w-full h-10 items-center bg-muted/50 rounded-full pl-5 pr-1 border border-transparent focus-within:border-border transition-colors duration-300 hover:bg-surface-container-low shadow-sm">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 bg-transparent border-none focus:outline-none text-[13px] text-foreground placeholder:text-muted-foreground w-full h-full"
              />
              <div className="flex items-center gap-2 shrink-0 h-full">
                <button className="flex items-center gap-1 text-[13px] text-foreground/80 hover:text-foreground transition-colors px-2 font-medium h-full">
                  Projects{" "}
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                <Button
                  variant="accent"
                  size="icon"
                  className="h-8 w-8 rounded-full shrink-0 shadow-none hover:scale-105 transition-transform duration-300"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-5 px-6">
            <Link
              href="/"
              className="text-[13px] font-semibold tracking-wide text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-[13px] font-semibold tracking-wide text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              About
            </Link>
          </nav>

          {/* Right: Auth/Action */}
          <div className="flex items-center gap-5 shrink-0 ml-auto">
            <div className="flex items-center gap-3">
              <Link
                href="/sign-in"
                className="hidden sm:block text-[13px] font-semibold tracking-wide text-foreground hover:text-muted-foreground transition-colors duration-300 mr-1"
              >
                Sign in
              </Link>
              <Button
                variant="accent"
                className="hidden sm:inline-flex shadow-sm h-9 px-4 text-[13px] rounded-full"
              >
                Showcase Project
              </Button>

              {/* Mobile Fallback Icon */}
              <Button
                variant="accent"
                size="icon"
                className="sm:hidden shadow-sm h-9 w-9 rounded-full"
              >
                <span className="text-lg leading-none">+</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
