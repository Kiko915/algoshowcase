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

      <div className="max-w-3xl bg-card rounded-[2rem] p-10 shadow-sm relative overflow-hidden">
        {/* Decorative background element or gradient could sit here if needed */}
        
        <div className="flex items-center gap-8 mb-12">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
            <UserCircle className="h-10 w-10 text-muted-foreground" />
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
