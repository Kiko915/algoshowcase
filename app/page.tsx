import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 py-32 text-center animate-in fade-in duration-700">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-display-lg text-foreground">
            The Digital Curator.
          </h1>

          <p className="text-body-md text-muted-foreground max-w-2xl mx-auto">
            A high-end editorial showcase treating code and programming projects
            as fine art. Discover meticulously crafted software, or submit your
            own masterpiece to the collection.
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
      <Footer />
    </>
  );
}
