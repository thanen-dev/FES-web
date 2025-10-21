import Link from "next/link"
import { Calendar, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Mastering Money, <span className="text-primary">Shaping Nations</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-muted-foreground leading-relaxed">
            The premier society for finance and economics enthusiasts at your university
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/join">Join the Interest List</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#what-we-offer">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">What</span> We'll Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Exclusive Events</h3>
                <p className="text-muted-foreground">
                  Workshops, guest lectures, and networking sessions with industry leaders in finance and economics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Resources</h3>
                <p className="text-muted-foreground">
                  Curated reading lists, research papers, and educational materials to expand your knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Like-minded Community</h3>
                <p className="text-muted-foreground">
                  Connect with peers who share your passion for economics and financial markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
