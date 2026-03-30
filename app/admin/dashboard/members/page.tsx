import { Search, Mail, ShieldAlert } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminMembersPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-display-lg text-foreground font-light leading-tight">
          Members & Curators
        </h1>
        <p className="text-body-md text-muted-foreground max-w-lg">
          Oversee administrative privileges, curator accounts, and standard users who have submitted pieces to the gallery.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="relative w-full max-w-[280px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input 
            placeholder="Search by name or email..." 
            className="rounded-full h-11 pl-10 pr-4 bg-card border-transparent focus-visible:ring-accent shadow-sm hover:shadow-md transition-shadow outline-none" 
          />
        </div>
      </div>

      {/* Roster List / Card */}
      <div className="bg-card rounded-[2rem] p-8 shadow-sm">
        <div className="space-y-6">
          {[
            { name: "Eleanor Vance", role: "Head Curator", email: "eleanor@algoshowcase.com" },
            { name: "David Chen", role: "Staff Reviewer", email: "david.c@algoshowcase.com" },
            { name: "System Admin", role: "Superuser", email: "sysadmin@algoshowcase.com" },
          ].map((member, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  {member.name.slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 border-b border-border/40 pb-6 group-last:border-0 group-last:pb-0 flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <p className="text-headline-md font-medium text-foreground tracking-tight">
                    {member.name}
                  </p>
                  <p className="text-label-sm text-accent mt-1 tracking-widest uppercase">
                    {member.role}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-body-md">{member.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
