import { Wrench, BookOpen, Headphones, Activity, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FES <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Curated materials to expand your knowledge in finance and economics
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/70 border-primary/30">
            <CardContent className="p-8 text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Resources Section <span className="text-primary">Coming Soon!</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We're currently compiling the best books, articles, podcasts, and tools for economics enthusiasts. Check
                back soon for our curated collection.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-secondary border border-border rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="rounded-full">Notify Me</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-primary">What</span> to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Reading Lists</h3>
                <p className="text-muted-foreground mb-4">
                  Essential books and papers covering economic theory, financial markets, and policy analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Books</Badge>
                  <Badge variant="secondary">Papers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <Headphones className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Podcasts & Videos</h3>
                <p className="text-muted-foreground mb-4">
                  Engaging audio and video content from leading economists and financial experts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Podcasts</Badge>
                  <Badge variant="secondary">Videos</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/70 border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Tools & Data</h3>
                <p className="text-muted-foreground mb-4">
                  Practical tools for analysis and reliable sources of economic data and statistics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tools</Badge>
                  <Badge variant="secondary">Datasets</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Suggestions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have a Resource to <span className="text-primary">Suggest?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for great materials to share with our members. Know of a book, podcast, or tool we
              should include?
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:Thanenpeou@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Your Suggestion
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
