import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserCircle } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-display-lg text-foreground font-light leading-tight">
          Your Profile
        </h1>
        <p className="text-body-md text-muted-foreground max-w-lg">
          Manage your individual settings, notification preferences, and security footprint within the administrative console.
        </p>
      </div>

      <div className="max-w-3xl bg-linear-to-b from-card to-card/50 rounded-4xl p-10 border border-border/20 shadow-sm relative overflow-hidden">
        {/* Subtle decorative glow orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-12 relative z-10">
          <div className="h-28 w-28 rounded-full bg-linear-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 shadow-inner border border-accent/10">
            <UserCircle className="h-12 w-12 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-display-lg text-foreground font-light text-[2.5rem]">
              Curator Root
            </h2>
            <p className="text-label-sm text-accent mt-1 tracking-widest uppercase">
              Superuser Level
            </p>
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-label-sm text-muted-foreground font-medium ml-4">
                Full Name
              </label>
              <Input 
                defaultValue="Curator Root"
                className="rounded-full h-12 px-6 bg-muted border-transparent focus-visible:ring-accent shadow-none outline-none text-body-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-label-sm text-muted-foreground font-medium ml-4">
                Console Email
              </label>
              <Input 
                type="email"
                defaultValue="sysadmin@algoshowcase.com"
                readOnly
                className="rounded-full h-12 px-6 bg-muted/60 text-muted-foreground border-transparent shadow-none outline-none text-body-md cursor-not-allowed"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-4 border-t border-border/40 pt-8 mt-12">
            <Button variant="ghost" className="rounded-full h-11 px-8 text-muted-foreground hover:bg-muted font-medium hover:text-foreground">
              Cancel
            </Button>
            <Button className="rounded-full h-11 bg-primary-gradient text-white hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 font-medium tracking-wide px-8 border-none shadow-none">
              Save Preferences
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
