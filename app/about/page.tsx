import Link from "next/link"
import { DollarSign, Globe, Users, Flag, Activity, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">FES</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            The premier student-led society for finance and economics enthusiasts at your university
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Our</span> Mission
            </h2>
            <Card className="bg-card/70 border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We exist to empower students to think critically about how finance and economics shape societies,
                  markets, and nations, preparing future leaders to make data-driven, ethical, and impactful decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Our</span> Vision
            </h2>
            <Card className="bg-card/70 border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To build a community of thinkers and doers who understand how the world's financial and economic
                  systems work, and use that knowledge to create prosperity and stability for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">Why</span> It Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-card/70 border border-border rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Literacy</h3>
              <p className="text-muted-foreground">
                Understanding economics is crucial for personal and professional success in today's world.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-card/70 border border-border rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Impact</h3>
              <p className="text-muted-foreground">
                Economic decisions shape societies, influence policies, and affect millions of lives worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-card/70 border border-border rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Connecting with like-minded individuals fosters growth, opportunity, and lifelong relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">Our</span> Roadmap
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Flag className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/30" />
              <h3 className="text-xl font-bold mb-2">Phase 1 — Foundation (0–3 months, 2025)</h3>
              <p className="text-muted-foreground">
                Recruit core members. Establish leadership structure. Host first orientation session: "Why Finance &
                Economics Matter." Build brand identity (poster, website, quiz).
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/30" />
              <h3 className="text-xl font-bold mb-2">Phase 2 — Knowledge & Engagement (3–6 months, 2025)</h3>
              <p className="text-muted-foreground">
                Run events like "Economics 101 Workshop" and "Debate on Inflation and Policy." Launch first newsletter.
                Start Monthly Market Quiz or Guess the Graph on the website.
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Users className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/30" />
              <h3 className="text-xl font-bold mb-2">Phase 3 — Expansion (6–12 months, 2025–2026)</h3>
              <p className="text-muted-foreground">
                Partner with other university clubs. Host an inter-university economic case competition. Invite guest
                speakers (professionals, economists, professors).
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Award className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/30" />
              <h3 className="text-xl font-bold mb-2">Phase 4 — Impact (1–2 years, 2026–2027)</h3>
              <p className="text-muted-foreground">
                Develop mentorship program with alumni and professionals. Publish student research or opinions.
                Represent the university in national/regional events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/70 border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Co-Founder's Note</h3>
                  <p className="text-sm text-muted-foreground">Steering the vision of FES</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-6 space-y-4 text-lg italic leading-relaxed">
                <p>
                  The Finance & Economics Society was founded on a simple belief: understanding finance and economics is
                  essential to shaping the future.
                </p>
                <p>
                  Our goal is to build a space where students learn to think independently, challenge conventional
                  ideas, and apply knowledge to real-world systems. This is not just an academic pursuit—it's
                  preparation for leadership, impact, and decision-making in an increasingly complex world.
                </p>
                <p>
                  We are at the beginning of this journey. What we build now will define the culture and direction of
                  the society for years to come. I invite those who value depth, discipline, and purpose to join us in
                  creating something that endures—an organization that equips its members to think strategically, act
                  responsibly, and contribute meaningfully to society.
                </p>
                <p className="text-right not-italic font-semibold">— Thanen, Co-Founder</p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join the <span className="text-primary">FES</span> Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            No commitment required - just stay informed about our launch and first events.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/join">Join the Interest List</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
