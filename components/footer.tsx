import Link from "next/link";
import { Bug } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-[13px] text-muted-foreground font-medium tracking-wide">
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link
              href="/report-bug"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Report a bug"
            >
              <Bug className="h-4 w-4" />
              <span className="sr-only">Report a bug</span>
            </Link>
          </div>
          <p className="flex-1 text-center">
            &copy; {currentYear} AlgoShowcase. All rights reserved.
          </p>
          <p className="flex-1 text-center sm:text-right">
            Developed by{" "}
            <span className="text-foreground font-semibold">
              CodeBearers - Web Dev Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
