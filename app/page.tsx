import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuthParticles } from "@/components/auth-particles";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex-1 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,92,255,0.35),_transparent_55%),_linear-gradient(135deg,#16053c,#240c56,#0a0317)]" />
        <AuthParticles className="absolute inset-0 opacity-70" />
        <div className="relative flex flex-col items-center justify-center container mx-auto px-6 py-32 text-center animate-in fade-in duration-700">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-display-lg text-foreground">
              The Digital Curator.
            </h1>

            <p className="text-body-md text-muted-foreground max-w-2xl mx-auto">
              A high-end editorial showcase treating code and programming
              projects as fine art. Discover meticulously crafted software, or
              submit your own masterpiece to the collection.
            </p>

            <div className="flex items-center justify-center gap-6 pt-8">
              <Button asChild size="lg" variant="default">
                <Link href="/gallery">Enter Gallery</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Read the Manifesto</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
