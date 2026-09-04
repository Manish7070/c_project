import { LandingNavbar } from "@/components/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Container } from "@/components/ui/index";
import '../(marketing)/globals.css'

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <Container className="pt-48 pb-24">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Page under construction</h1>
        <p className="text-xl text-muted font-medium">We're working hard to bring you this feature. Stay tuned!</p>
      </Container>
      <LandingFooter />
    </main>
  );
}
